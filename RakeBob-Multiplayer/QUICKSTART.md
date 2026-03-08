# 🚀 Quick Start Guide - RakeBob Multiplayer

## Prerequisites

Before you begin, make sure you have Node.js installed:

### Install Node.js

**Windows:**
1. Download from [nodejs.org](https://nodejs.org/)
2. Run the installer (.msi file)
3. Follow the installation wizard
4. Verify installation: Open Command Prompt and type `node --version`

**Mac:**
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

## Running the Game Locally

### Step 1: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This will install:
- express (web server)
- socket.io (real-time communication)

### Step 2: Start the Server

```bash
npm start
```

You should see:
```
🎮 RakeBob Multiplayer Server running on port 3000
🌐 Server ready for deployment on Railway/Render
```

### Step 3: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

### Step 4: Test Multiplayer

To test multiplayer on the same computer:

1. Open the game in one browser window
2. Click "CREATE ROOM" and note the room code
3. Open a new browser window (or incognito/private window)
4. Navigate to `http://localhost:3000`
5. Click "JOIN ROOM" and enter the room code
6. Both players should see each other in the lobby!

## Testing on Local Network

To play with friends on the same WiFi network:

1. Find your local IP address:
   - **Windows**: Open Command Prompt, type `ipconfig`, look for "IPv4 Address"
   - **Mac/Linux**: Open Terminal, type `ifconfig` or `ip addr`

2. Start the server on your computer

3. Share your IP with friends: `http://YOUR_IP:3000`
   - Example: `http://192.168.1.100:3000`

4. Friends can join from their devices on the same network!

## Deploying Online

### Option 1: Railway (Recommended)

1. Create account at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Connect your GitHub repository
4. Railway auto-detects Node.js and deploys
5. Get your public URL (e.g., `https://your-app.railway.app`)
6. Share the URL with friends anywhere in the world!

### Option 2: Render

1. Create account at [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect GitHub repository
4. Settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click "Create Web Service"
6. Get your public URL

### Option 3: Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`
5. Open: `heroku open`

## Troubleshooting

### "npm: command not found"
- Node.js is not installed or not in PATH
- Reinstall Node.js and restart terminal

### "Port 3000 is already in use"
- Another application is using port 3000
- Stop other applications or change port in `server.js`

### "Cannot GET /"
- Server is running but files are missing
- Make sure `public/index.html` exists

### Players can't see each other
- Check that both are in the same room
- Verify network connection
- Check browser console for errors (F12)

### Game is laggy
- Reduce graphics quality in settings
- Check internet connection speed
- Try deploying to a server closer to players

## Game Controls

Once in game:

- **WASD** - Move around
- **Mouse** - Look around (click to lock cursor)
- **SHIFT** - Sprint (uses stamina)
- **F** - Toggle flashlight
- **ESC** - Open settings

## Tips for Best Experience

1. **Use headphones** for immersive audio (when implemented)
2. **Play in fullscreen** for better immersion
3. **Communicate with friends** via voice chat (Discord, etc.)
4. **Stick together** during night phase
5. **Manage flashlight battery** - don't waste it during day

## Next Steps

- Customize your avatar before joining
- Explore the forest during day phase
- Survive RakeBob during night phase
- Earn coins and upgrade equipment
- Try to survive as many nights as possible!

## Need Help?

- Check the main README.md for detailed documentation
- Open an issue on GitHub
- Check browser console (F12) for error messages

---

**Have fun surviving! 🌲👻**
