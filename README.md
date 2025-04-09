# XI FOOTBALL TEAM - Player Selection Web App

Welcome to **XI TEAM**, a React-based web application where users can build their own football dream team by selecting players within a coin budget. The app includes interactive features, real-time notifications, and player management.

---

## 🚀 Live Preview

> [https://select-player.surge.sh/](https://select-player.surge.sh/)

---

## 🛠️ Technologies Used

- ⚛️ React.js (with Hooks)
- 💅 TailwindCSS for styling
- 🍞 React-Toastify for notifications
- 🧠 JavaScript (ES6+)
- 📦 Vite (React Project Setup)
- 🗃️ JSON for player data

---

## 🌟 Key Features

### ✅ Player Management
- Choose from 10–15 players and add them to your team.
- Remove any selected player anytime.
- Displays available coins and deducts on each player selection.

### 🔄 Toggling Views
- Switch between **Available Players** and **Selected Players**.
- Visual feedback on player count and selection status.

### ⚠️ Smart Validations
- Prevents duplicate selections.
- Limits selection to 6 players.
- Ensures users have enough coins before picking a player.
- All alerts shown via elegant **React-Toastify** toasts.

---

## 📂 Project Structure

Here’s the project structure for better understanding:

my-xi-team/
├── public/
│   ├── footballerData.json       # JSON file containing player data
│   ├── CNAME                     # Custom domain configuration
├── src/
│   ├── assets/                   # Static assets (images, icons, etc.)
│   │   ├── bg-shadow.png
│   │   ├── coin.png
│   │   ├── football-log.jpeg
│   │   ├── react.svg
│   ├── Component/                # React components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx        # Navbar component
│   │   ├── Hero-Banner/
│   │   │   ├── Hero.jsx          # Hero banner component
│   │   ├── Player/
│   │   │   ├── Player.jsx        # Main Player component
│   │   │   ├── Available-Player/
│   │   │   │   ├── AvailablePlayer.jsx  # Available players list
│   │   │   ├── Selected-Player/
│   │   │   │   ├── SelectedPlayer.jsx   # Selected players list
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # TailwindCSS styles
│   ├── main.jsx                  # Entry point for React app
├── tailwind.config.js            # TailwindCSS configuration
├── vite.config.js                # Vite configuration
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
