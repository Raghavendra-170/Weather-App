# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---
## 🌐 live  https://weather-app-1-e1mi.onrender.com/

# 🌦️ Weather App

A simple and responsive **Weather App** built with **React** and **Material UI**. It allows users to search for a city and view real-time weather details like temperature, conditions, and more.

---

## 🚀 Features

- 🌍 Search weather by city
- 📡 Real-time data from a weather API
- 💅 Beautiful UI with Material UI components
- 🌤️ Displays temperature, weather conditions, humidity, wind speed, etc.
- 📱 Fully responsive for mobile and desktop

---

## 🛠️ Built With

- [React.js](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Vite](https://vitejs.dev/) (for faster development)
- Weather API ([OpenWeatherMap](https://openweathermap.org/))

---

## 📷 Screenshots

<img width="1901" height="906" alt="image" src="https://github.com/user-attachments/assets/76c5d469-b125-40af-9a5e-88dfb067385c" />


---

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Raghavendra-170/Weather-App.git
cd Weather-App
```
### 2. Install Dependencies
```
npm install
```
### 2. Start the development server
```
npm run dev
```
## 🔐 API Key Setup
If you're using an API (like OpenWeatherMap), create a .env file in the root folder:
```
    const API_URL = "https://api.openweathermap.org/"
    const API_KEY = "your_api_key_here"
```
## 📦 Production Build
```
npm run build
```
## 📁 Folder Structure

src/
│
├── components/
│   ├── SearchBox.jsx
│   ├── WeatherApp.jsx
│   ├── InfoBox.jsx
│
├── App.jsx
├── main.jsx
├── styles/
│   ├── App.css
│   ├── SearchBox.css
│   ├── WeatherApp.css

## 🙌 Acknowledgements
Weather data provided by OpenWeatherMap

UI components powered by Material UI

## 📄 License
This project is licensed under the MIT License.

## 🌐 Live Demo- too soon we will deploy into website

