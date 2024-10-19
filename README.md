# Real-Time Weather Monitoring System

## Project Overview

This is a real-time weather monitoring system built using **Node.js**, **Express.js**, and **MongoDB**. The system fetches weather data for major Indian metros from the **OpenWeatherMap API**, processes it in real-time, and provides weather summaries, including daily averages, max/min temperatures, and alerts when configurable thresholds are exceeded (e.g., temperature > 35°C). It also visualizes data trends using charts.

## Features

- **Real-Time Weather Data**: Fetches current weather data for Indian metros (e.g., Delhi, Mumbai, Kolkata, Chennai, Bangalore) at regular intervals (every 5 minutes).
- **Weather Summaries**: Displays daily summaries including average, max, and min temperatures.
- **Alerts**: Triggers alerts if user-defined thresholds (e.g., temp > 35°C) are breached.
- **Data Visualization**: Visualizes weather data and historical trends using charts.
- **MongoDB Storage**: Stores weather data in a MongoDB database for future retrieval and analysis.

## Technologies Used

- **Node.js**: Backend framework for server-side logic.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing weather data.
- **Mongoose**: MongoDB object modeling tool.
- **Axios**: HTTP client for making API requests to OpenWeatherMap.
- **Node-cron**: Job scheduling for periodic weather data fetching.
- **EJS**: Templating engine for rendering dynamic views.
- **Chart.js**: For visualizing weather data in charts and graphs.

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (Local instance or MongoDB Atlas)
- **OpenWeatherMap API Key**

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-monitoring-system.git
   cd weather-monitoring-system

2. **Installing Dependencies**:
   ```bash
   npm install

3. **Setting up Environment**:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/weatherDB  # Replace with your MongoDB connection string
   OPENWEATHERMAP_API_KEY=your_openweathermap_api_key  # Replace with your OpenWeatherMap API Key

4. **Running MongoDB**:
   ```bash
   mongod

5. **Run the Application**:
   ```bash
   npm start




