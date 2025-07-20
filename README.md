# Cypher

A Progressive Web App (PWA) that generates unique, deterministic passwords for different websites based on a master password and the website name.

## 🔐 What is Cypher?

Cypher is a password generation tool that creates unique passwords for each website you visit, while only requiring you to remember one master password. The app uses a deterministic algorithm that will always generate the same password for the same website-master password combination, ensuring consistency across sessions.

## ✨ Features

- **Deterministic Password Generation**: Same inputs always produce the same output
- **Website-Specific Passwords**: Each website gets a unique password
- **Progressive Web App**: Can be installed and used offline
- **Automatic Clipboard Copy**: Generated passwords are automatically copied to clipboard
- **Security-Focused**: Passwords are cleared after 5 seconds for security
- **Character Support**: Supports lowercase, uppercase, numbers, and special characters
- **Mobile-Friendly**: Responsive design that works on all devices

## 🚀 How It Works

1. **Input**: Enter the website name (without www.) and your master password
2. **Cypher Calculation**: The app calculates a numeric cypher based on the website name
3. **Character Shifting**: Each character in your master password is shifted based on the cypher
4. **Shuffling**: The result is shuffled using a seeded random function for additional security
5. **Output**: The final unique password is generated and copied to your clipboard

### Algorithm Details

- **Website Cypher**: Each character in the website name contributes to a numeric value
- **Character Mapping**: 
  - Lowercase letters: a-z (26 characters)
  - Uppercase letters: A-Z (26 characters)  
  - Numbers: 0-9 (10 characters)
  - Symbols: 32 special characters
- **Modular Arithmetic**: Characters are shifted using modular arithmetic to stay within valid ranges
- **Seeded Shuffling**: Final password is shuffled using the cypher as a seed

## 🛠️ Installation

### As a Web App
1. Open the `index.html` file in a web browser
2. For PWA features, serve the files through a web server (not file://)

### As a PWA
1. Host the files on a web server
2. Open the app in a browser
3. Look for the "Install" prompt or use the browser's install option
4. The app will be available offline after installation

## 📱 Usage

1. **Website Field**: Enter the website domain (e.g., "google.com", "facebook.com")
   - Do not include "www." or "https://"
   - The input is automatically converted to lowercase

2. **Password Field**: Enter your master password
   - This should be a strong password you can remember
   - The same master password should be used consistently

3. **Submit**: Click the "Submit" button
   - The generated password is automatically copied to your clipboard
   - You'll see a confirmation alert
   - The generated password field is cleared after 5 seconds for security

## 🔧 Technical Details

### File Structure
```
Cypher/
├── index.html          # Main HTML file
├── script.js           # Core password generation logic
├── style.css           # Styling and responsive design
├── manifest.json       # PWA manifest
├── service-worker.js   # Service worker for offline functionality
├── icon.png           # App icon
├── fuscus_vulpes.png  # Footer branding
└── icons/             # PWA icons in various sizes
    ├── launchericon-48-48.png
    ├── launchericon-72-72.png
    ├── launchericon-96-96.png
    ├── launchericon-144-144.png
    ├── launchericon-192-192.png
    └── launchericon-512-512.png
```

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Responsive styling with CSS Grid
- **Vanilla JavaScript**: Core functionality
- **PWA**: Manifest and Service Worker for offline capability
- **Custom Seeded Random**: For deterministic shuffling

## 🔒 Security Considerations

- **No Data Storage**: Passwords are never stored locally or remotely
- **Deterministic**: Same inputs always produce the same output
- **Clipboard Security**: Generated passwords are cleared after 5 seconds
- **Offline Capable**: Works completely offline, no network requests
- **No Dependencies**: Pure vanilla JavaScript, no external libraries

## ⚠️ Important Notes

- **Consistency**: Always use the same website name format for consistent results
- **Master Password**: Use a strong master password and keep it secure
- **Website Format**: Always enter websites in the same format (e.g., without www.)
- **Backup**: Consider keeping a secure backup of your master password

## 🎨 Customization

The app uses CSS custom properties and can be easily themed:
- Background color: `rgb(46, 46, 46)`
- Text color: `rgb(255, 255, 255)`
- Button color: `rgb(255, 97, 97)`

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Fuscus Vulpes**

---

*Generate unique passwords for every website with just one master password!*
