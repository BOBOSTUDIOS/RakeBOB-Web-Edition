const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const path = require('path');

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Game state
const rooms = new Map();
const players = new Map();

// Generate unique room code
function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return rooms.has(code) ? generateRoomCode() : code;
}

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // Create room
  socket.on('createRoom', (playerData) => {
    const roomCode = generateRoomCode();
    const room = {
      code: roomCode,
      host: socket.id,
      players: new Map(),
      gameStarted: false,
      rakebob: { x: 0, y: 0, z: 0, active: false }
    };

    room.players.set(socket.id, {
      id: socket.id,
      name: playerData.name,
      avatar: playerData.avatar,
      position: { x: 0, y: 2, z: 0 },
      rotation: { x: 0, y: 0 },
      ready: false,
      health: 100,
      flashlight: false
    });

    rooms.set(roomCode, room);
    players.set(socket.id, roomCode);
    socket.join(roomCode);

    socket.emit('roomCreated', {
      roomCode,
      player: room.players.get(socket.id)
    });

    console.log(`Room created: ${roomCode} by ${socket.id}`);
  });

  // Join room
  socket.on('joinRoom', (data) => {
    const { roomCode, playerData } = data;
    const room = rooms.get(roomCode);

    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }

    if (room.gameStarted) {
      socket.emit('error', { message: 'Game already started' });
      return;
    }

    if (room.players.size >= 4) {
      socket.emit('error', { message: 'Room is full' });
      return;
    }

    room.players.set(socket.id, {
      id: socket.id,
      name: playerData.name,
      avatar: playerData.avatar,
      position: { x: Math.random() * 10 - 5, y: 2, z: Math.random() * 10 - 5 },
      rotation: { x: 0, y: 0 },
      ready: false,
      health: 100,
      flashlight: false
    });

    players.set(socket.id, roomCode);
    socket.join(roomCode);

    // Send room state to new player
    socket.emit('roomJoined', {
      roomCode,
      players: Array.from(room.players.values()),
      isHost: socket.id === room.host
    });

    // Notify others and send updated player list to everyone
    socket.to(roomCode).emit('playerJoined', room.players.get(socket.id));
    io.to(roomCode).emit('roomStateUpdate', {
      players: Array.from(room.players.values())
    });

    console.log(`Player ${socket.id} joined room ${roomCode}`);
  });

  // Player ready
  socket.on('playerReady', () => {
    const roomCode = players.get(socket.id);
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.get(socket.id);
    if (player) {
      player.ready = !player.ready;
      io.to(roomCode).emit('playerReadyUpdate', {
        playerId: socket.id,
        ready: player.ready,
        players: Array.from(room.players.values())
      });

      // Check if all players are ready
      const allReady = Array.from(room.players.values()).every(p => p.ready);
      if (allReady && room.players.size >= 1) {
        room.gameStarted = true;
        io.to(roomCode).emit('gameStart', {
          players: Array.from(room.players.values())
        });
        console.log(`Game started in room ${roomCode}`);
      }
    }
  });

  // Get room state (for refreshing lobby)
  socket.on('getRoomState', () => {
    const roomCode = players.get(socket.id);
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    socket.emit('roomStateUpdate', {
      players: Array.from(room.players.values())
    });
  });

  // Player movement
  socket.on('playerMove', (data) => {
    const roomCode = players.get(socket.id);
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room || !room.gameStarted) return;

    const player = room.players.get(socket.id);
    if (player) {
      player.position = data.position;
      player.rotation = data.rotation;

      // Broadcast to others in room
      socket.to(roomCode).emit('playerMoved', {
        playerId: socket.id,
        position: data.position,
        rotation: data.rotation
      });
    }
  });

  // Flashlight toggle
  socket.on('flashlightToggle', (state) => {
    const roomCode = players.get(socket.id);
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.get(socket.id);
    if (player) {
      player.flashlight = state;
      socket.to(roomCode).emit('playerFlashlight', {
        playerId: socket.id,
        state
      });
    }
  });

  // RakeBob update (host only)
  socket.on('rakebobUpdate', (data) => {
    const roomCode = players.get(socket.id);
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room || room.host !== socket.id) return;

    room.rakebob = data;
    socket.to(roomCode).emit('rakebobMoved', data);
  });

  // Player damage
  socket.on('playerDamage', (damage) => {
    const roomCode = players.get(socket.id);
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players.get(socket.id);
    if (player) {
      player.health = Math.max(0, player.health - damage);
      io.to(roomCode).emit('playerHealthUpdate', {
        playerId: socket.id,
        health: player.health
      });

      if (player.health <= 0) {
        io.to(roomCode).emit('playerDied', socket.id);
      }
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    const roomCode = players.get(socket.id);
    if (roomCode) {
      const room = rooms.get(roomCode);
      if (room) {
        room.players.delete(socket.id);
        socket.to(roomCode).emit('playerLeft', socket.id);

        // If host left, assign new host or delete room
        if (room.host === socket.id) {
          if (room.players.size > 0) {
            room.host = Array.from(room.players.keys())[0];
            io.to(roomCode).emit('newHost', room.host);
          } else {
            rooms.delete(roomCode);
            console.log(`Room ${roomCode} deleted`);
          }
        }
      }
      players.delete(socket.id);
    }
    console.log('Player disconnected:', socket.id);
  });
});

http.listen(PORT, () => {
  console.log(`🎮 RakeBob Multiplayer Server running on port ${PORT}`);
  console.log(`🌐 Server ready for deployment on Railway/Render`);
});
