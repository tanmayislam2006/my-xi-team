# 🏏 BPL Dream 11 - Player Selection Web App

Welcome to **XI TEAM**, a React-based web application where users can build their own football dream team by selecting players within a coin budget. The app includes interactive features, real-time notifications, and player management.

## 🚀 Live Preview

> https://select-player.surge.sh/

---

## 🛠️ Technologies Used

- ⚛️ React.js (with Hooks)
- 💅 TailwindCSS for styling
- 🍞 React-Toastify for notifications
- 🧠 JavaScript (ES6+)
- 📦 Vite (React Project Setup)
- 🗃️ LocalStorage (for optional newsletter feature)

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

## 📰 Optional Feature

- Newsletter subscription that stores email in **LocalStorage**.
- Personalized greeting shown on reload if email is saved.

---

## 🖼️ Screenshots

> Add screenshots here (UI with player cards, selected players, toasts, etc.)

---

## 📁 Project Setup

```bash
npm install
npm run dev
