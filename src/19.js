// Example JavaScript code to demonstrate basic usage of an API.
const request = require('request');

async function fetchWeather(apiKey, location) {
  const url = `https://api.weatherapi.com/v1/weather.json?key=${apiKey}&q=${location}`;

  try {
    const response = await request(url);

    // Extract the current temperature
    const { temp_c } = response.data.current.temp;

    console.log(`Current weather in ${location}: ${temp_c.toFixed(2)}°C`);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

fetchWeather("YOUR_API_KEY", "New York, NY");
