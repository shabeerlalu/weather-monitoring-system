const WeatherData = require('../models/weatherData');
const express=require('express')
const router=express.Router()
router.get('/', async (req, res) => {
    try {
        const weatherData = await WeatherData.find().sort({ timestamp: -1 }).limit(10);
        res.render('index', { weatherData });
    } catch (error) {
        res.status(500).send('Error fetching weather data.');
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const weatherData = await WeatherData.find().sort({ timestamp: -1 }).limit(100);
        res.render('dashboard', { weatherData });
    } catch (error) {
        res.status(500).send('Error fetching weather data.');
    }
});

module.exports=router