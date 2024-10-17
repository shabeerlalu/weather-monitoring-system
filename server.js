// server.js
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const path = require('path');
const dotenv = require('dotenv');
const { storeWeatherData } = require('./controllers/weatherController');
const weatherRouter = require('./routes/index');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected...');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});



app.use('/' , weatherRouter);
// Schedule weather data retrieval every 5 minutes

cron.schedule('*/5 * * * *', () => {
    console.log('Fetching weather data...');
    storeWeatherData();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
