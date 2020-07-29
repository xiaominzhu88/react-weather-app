import React, { useState } from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  const [city, setCity] = useState('vienna');
  const [country, setCountry] = useState('austria');
  const [temperature, setTemperature] = useState('☀️ - ⛈');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [wind, setWind] = useState('🌬');
  const [feel, setFeel] = useState('🌸');

  const api_key = process.env.REACT_APP_SECRET_CODE;
  // fetch the url to get city,country,temp,description

  const getWeather = (e) => {
    const cityName = e.target.city.value;
    const countryName = e.target.country.value;
    e.preventDefault();

    // use By city name API

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${api_key}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //log out: {temp: 281.05, feels_like: 277.33,temp....}
        //console.log(data.main.temp);

        // convert kelvin to celsius
        const tempInCel = data.main.temp - 273.15;
        const feelInCel = data.main.feels_like - 273.15;

        // condition if input complete

        if (city && country) {
          setTemperature(tempInCel.toFixed(2) + '°C');
          setCity(data.name);
          setCountry(data.sys.country);
          setDescription(data.weather[0].description);
          setWind(`deg: ${data.wind.deg} ~ speed: ${data.wind.speed}`);
          setFeel(feelInCel.toFixed(2) + '°C');
          setError('');
        } else {
          setError('Please complete your search...');
        }
      })
      .catch((err) => {
        alert('Please check your input City/Country');
      });
  };
  console.log(wind);

  return (
    <div className="App">
      {/* Create input field and button*/}
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <br />
        <button>Get Weather</button>
      </form>

      {/* Create content to show the information, use props in Weather.js Component */}
      <Weather
        temperature={temperature}
        city={city}
        country={country}
        description={description}
        error={error}
        wind={wind}
        feel={feel}
      />
      <div className="imageWeather">
        <h1>React-Weather-App</h1>
      </div>

      <p className="copyright">&copy; 2020 xiaomin.Zhu</p>
    </div>
  );
}
