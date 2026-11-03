# Sansad Showdown (FightKaro Clone) — 3D Satire Fighting Game

Ye project **https://fightkaro.com/** ka 100% complete offline-ready clone hai. Isme saare 3D models, textures, audio/music, Draco 3D decoders, aur UI assets included hain.

---

## 📁 Folder Structure

```
fightkaro/
├── index.html                 # Main Game Entry Point
├── manifest.webmanifest       # PWA Manifest
├── favicon.svg / png          # Icons
├── serve.py                   # Python Local HTTP Server with MIME types
├── start.sh                   # Linux/Mac startup script
├── start.bat                  # Windows startup script
├── package.json               # Node.js runner configuration
├── faces/                     # Character Face Avatars (Modi, Rahul, Yogi, Trump, etc.)
│   ├── modi.png
│   ├── rahul.png
│   ├── yogi.png
│   ├── trump.png
│   ├── didi.png
│   ├── nitin.png
│   └── mbapu.png
├── models/                    # 3D GLB Character & Object Models
│   ├── modi.glb
│   ├── rahul.glb
│   ├── yogi.glb
│   ├── trump.glb
│   ├── didi.glb
│   ├── nitin.glb
│   ├── mbapu.glb
│   ├── bull1.glb
│   └── mobile/                # Optimized low-poly models for mobile devices
└── assets/                    # Bundled scripts, audio & shaders
    ├── main-*.js              # Three.js Game Engine & Fight Mechanics
    ├── three-*.js             # Three.js 3D Library
    ├── rooms-*.js             # Multiplayer Room Signaling
    ├── main-*.css             # Game HUD & UI Styles
    ├── fonts.css & fonts/     # Bebas Neue & Teko fonts (Offline)
    ├── draco_decoder.*        # 3D Mesh Draco Decompressor (WASM)
    └── *.mp3                  # All character voices, SFX & Background Music
```

---

## 🚀 Kaise Chalayein (How to Run)

Browser security rules (CORS) ki wajah se WebAssembly aur Three.js module scripts ko ek local server ke zariye chalana padta hai (`file://` se directly browser block karta hai).

### Method 1: Python se (Sabse Aasan)
```bash
cd fightkaro
python3 serve.py
```
Phir apne browser me open karein:
👉 **http://localhost:8000**

---

### Method 2: Linux / macOS Script se
```bash
chmod +x start.sh
./start.sh
```

---

### Method 3: Windows me
Sirf `start.bat` par double click karein!

---

### Method 4: Node.js se
```bash
npx serve -l 8000 .
```

---

## 🎮 Controls

- **Move / Jump / Crouch**: Arrow keys ya W/A/S/D
- **Punch**: A / J
- **Kick**: S / K
- **Grab**: D / L
- **Super Move**: Spacebar / Shift
- **Pause**: Escape (Esc)
- **Touch**: Mobile screen par virtual joystick & action buttons
