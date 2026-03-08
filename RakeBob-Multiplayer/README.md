# 🎮 RakeBob Multiplayer - 3D Horror Game

A multiplayer first-person horror game built with Three.js and Socket.IO where players survive against RakeBob in a dark forest.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Start the server:**
```bash
npm start
```

3. **Open your browser:**
```
http://localhost:3000
```

### Development Mode (with auto-reload)
```bash
npm run dev
```

## 🌐 Deployment

### Deploy to Railway

1. Create account at [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select this repository
4. Railway will automatically detect and deploy

### Deploy to Render

1. Create account at [Render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Click "Create Web Service"

### Environment Variables
- `PORT` - Automatically set by hosting platforms (default: 3000)

## 🎯 Features

### Multiplayer
- ✅ Create/Join rooms with unique codes
- ✅ Up to 4 players per room
- ✅ Real-time position synchronization
- ✅ Ready system before game starts
- ✅ Host migration on disconnect

### Gameplay
- ✅ First-person 3D movement (WASD)
- ✅ Mouse look with pitch/yaw limits
- ✅ Flashlight system
- ✅ Avatar customization
- ✅ Animated RakeBob enemy
- ✅ Day/Night cycle
- ✅ Health system

### UI/UX
- ✅ Lobby system
- ✅ Player list with avatars
- ✅ Settings menu
- ✅ Full-screen support
- ✅ Responsive design

## 🎮 Controls

- **WASD** - Move
- **Mouse** - Look around
- **SHIFT** - Sprint
- **F** - Toggle flashlight
- **ESC** - Settings menu
- **Ctrl+F** - Toggle fullscreen

## 📁 Project Structure

```
rakebob-multiplayer/
├── server.js           # Node.js + Socket.IO server
├── package.json        # Dependencies
├── public/            # Client files
│   └── index.html     # Game client
└── README.md          # This file
```

## 🔧 Technical Stack

- **Frontend:** Three.js, Socket.IO Client, HTML5, CSS3
- **Backend:** Node.js, Express, Socket.IO
- **Deployment:** Railway/Render compatible

## 📝 How to Play

1. **Create or Join Room:**
   - Click "Create Room" to start a new game
   - Share the room code with friends
   - Or click "Join Room" and enter a code

2. **Customize Avatar:**
   - Choose skin color, outfit, and headgear
   - Your avatar appears in lobby and game

3. **Ready Up:**
   - Click "Ready" when you're prepared
   - Game starts when all players are ready

4. **Survive:**
   - Explore the forest during the day
   - Hide from RakeBob at night
   - Work together to survive!

## 🐛 Troubleshooting

**Server won't start:**
- Make sure port 3000 is available
- Check Node.js version (>=14.0.0)

**Can't connect to server:**
- Check firewall settings
- Verify server URL is correct

**Game lag:**
- Reduce graphics quality in settings
- Check internet connection

## 📄 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

Made with ❤️ for horror game fans
