const axios = require('axios');
const WeatherData = require('../models/weatherData');
require('dotenv').config();

const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore'];

async function fetchWeatherData() {
    const url = 'https://api.openweathermap.org/data/2.5/group';
    const cityIds = '1273294,1275339,1264527,1261481,1277333';  // City IDs for Indian metros

    try {
        const response = await axios.get(`${url}?id=${cityIds}&units=metric&appid=${apiKey}`);
        const weatherData = response.data.list.map(city => ({
            city: city.name,
            temperature: city.main.temp,
            maxTemp: city.main.temp_max,
            minTemp: city.main.temp_min,
            humidity: city.main.humidity,
            windSpeed: city.wind.speed,
            timestamp: new Date()
        }));
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return [];
    }
}
async function storeWeatherData() {
    const weatherData = await fetchWeatherData();

    weatherData.forEach(async data => {
        const newWeather = new WeatherData(data);
        await newWeather.save();
    });
}
async function calculateDailySummary() {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const weatherRecords = await WeatherData.find({ timestamp: { $gte: startOfDay } });

    const summary = weatherRecords.reduce((acc, record) => {
        acc.maxTemp = Math.max(acc.maxTemp, record.maxTemp);
        acc.minTemp = Math.min(acc.minTemp, record.minTemp);
        acc.avgTemp += record.temperature;
        return acc;
    }, { maxTemp: -Infinity, minTemp: Infinity, avgTemp: 0 });

    summary.avgTemp /= weatherRecords.length;
    return summary;
}
function checkForAlerts(weatherData, threshold = 35) {
    weatherData.forEach(data => {
        if (data.temperature > threshold) {
            console.log(`Alert: Temperature in ${data.city} is above ${threshold}°C!`);
        }
    });
}

module.exports = { fetchWeatherData,storeWeatherData,calculateDailySummary,checkForAlerts };
