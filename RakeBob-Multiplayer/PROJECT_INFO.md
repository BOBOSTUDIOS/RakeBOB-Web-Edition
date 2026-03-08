# 🎮 RakeBob Multiplayer - Complete Project

This folder contains the complete RakeBob Multiplayer game - a 3D first-person survival horror game with full multiplayer support.

## 📁 Folder Structure

```
RakeBob-Multiplayer/
├── server.js                      # Node.js + Socket.IO multiplayer server
├── package.json                   # Dependencies and npm scripts
├── .gitignore                     # Git ignore rules
├── Procfile                       # Deployment configuration
├── README.md                      # Main documentation
├── QUICKSTART.md                  # Quick setup guide
├── IMPLEMENTATION_SUMMARY.md      # Complete feature list
├── DEPLOYMENT_CHECKLIST.md        # Deployment guide
├── PROJECT_INFO.md                # This file
└── public/
    └── index.html                 # Multiplayer game client
```

## 🚀 Quick Start

1. **Install Node.js** from [nodejs.org](https://nodejs.org/)

2. **Open terminal in this folder** (`RakeBob-Multiplayer`)

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open browser:**
   ```
   http://localhost:3000
   ```

6. **Play with friends:**
   - Create a room and share the code
   - Or join a friend's room with their code

## 📖 Documentation

- **README.md** - Full project documentation and features
- **QUICKSTART.md** - Step-by-step setup instructions
- **IMPLEMENTATION_SUMMARY.md** - Complete list of implemented features
- **DEPLOYMENT_CHECKLIST.md** - Guide for deploying online

## ✨ Features

- ✅ Multiplayer support (up to 4 players)
- ✅ Room system with unique codes
- ✅ Avatar customization
- ✅ First-person 3D gameplay
- ✅ WASD movement + mouse look
- ✅ Flashlight system
- ✅ Day/night cycle
- ✅ RakeBob monster
- ✅ Real-time synchronization
- ✅ Collision detection
- ✅ Health and stamina systems
- ✅ Deployment ready (Railway/Render/Heroku)

## 🎮 Controls

- **WASD** - Move
- **Mouse** - Look around
- **SHIFT** - Sprint
- **F** - Toggle flashlight
- **Click** - Lock mouse cursor

## 🌐 Deploy Online

### Railway (Recommended)
1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Deploy from GitHub repo
4. Get your public URL

### Render
1. Push to GitHub
2. Go to [render.com](https://render.com)
3. Create Web Service
4. Connect GitHub repo
5. Deploy

## 🔧 Technical Stack

- **Frontend:** Three.js, Socket.IO Client, HTML5, CSS3
- **Backend:** Node.js, Express, Socket.IO
- **3D Graphics:** Three.js (WebGL)
- **Networking:** WebSockets via Socket.IO

## 📝 What's Included

### Server (server.js)
- Room management with unique codes
- Player join/leave handling
- Real-time position synchronization
- Health and damage system
- Host migration
- Ready system for lobby

### Client (public/index.html)
- Complete 3D game with Three.js
- Main menu and lobby system
- Avatar customization
- First-person camera and controls
- Multiplayer synchronization
- Game world with structures, trees, rocks
- RakeBob monster rendering
- UI and HUD

## 🎯 How to Play

1. **Create or Join Room** - Start a new game or join friends
2. **Customize Avatar** - Choose your appearance
3. **Ready Up** - Wait for all players in lobby
4. **Survive** - Explore during day, hide from RakeBob at night
5. **Work Together** - Team up to survive as many nights as possible

## 🐛 Troubleshooting

**Server won't start?**
- Make sure Node.js is installed
- Check if port 3000 is available
- Run `npm install` first

**Can't connect?**
- Verify server is running
- Check firewall settings
- Try different browser

**Game lag?**
- Reduce graphics quality
- Check internet connection
- Close other applications

## 📞 Support

- Check the documentation files in this folder
- Read QUICKSTART.md for setup help
- See DEPLOYMENT_CHECKLIST.md for deployment issues

## 🎉 Ready to Play!

This is a complete, working multiplayer game. Just install Node.js, run `npm install`, then `npm start`, and you're ready to play!

For detailed instructions, see **QUICKSTART.md**.

---

**Have fun surviving with your friends! 🌲👻**
