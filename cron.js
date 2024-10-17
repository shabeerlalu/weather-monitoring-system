const cron = require('node-cron');
const { storeWeatherData } = require('./controllers/weatherController');

cron.schedule('*/5 * * * *', () => {
    console.log('Fetching weather data...');
    storeWeatherData();
});
