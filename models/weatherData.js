const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    maxTemp: Number,
    minTemp: Number,
    humidity: Number,
    windSpeed: Number,
    timestamp: { type: Date, default: Date.now }
});

const WeatherData = mongoose.model('WeatherData', weatherSchema);

module.exports = WeatherData;
