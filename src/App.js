import React, { useState, useEffect } from "react";
import api from "./api";
import "./styles.css";

function App() {
  const [citySearched, setCitySearched] = useState("");
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherText, setWeatherText] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    const res = await api.get(
      `data/2.5/weather?q=${citySearched}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=pt_br`
    );

    setCityName(res.data.name);
    setTemperature(res.data.main.temp);
    setWeatherText(res.data.weather[0].description);
    setHumidity(res.data.main.humidity);
    setIcon(res.data.weather[0].icon);
  }

  useEffect(() => {
    localStorage.setItem(
      "dataWeather",
      JSON.stringify({
        cityName,
        temperature,
        weatherText,
        humidity,
        icon,
      })
    );
  }, [cityName, temperature, weatherText, humidity, icon]);

  useEffect(() => {
    const { 
      cityName, 
      temperature, 
      weatherText, 
      humidity, 
      icon 
    } = JSON.parse(
      localStorage.getItem("dataWeather")
    );

    setCityName(cityName);
    setTemperature(temperature);
    setWeatherText(weatherText);
    setHumidity(humidity);
    setIcon(icon);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather React App</h1>

        <form onSubmit={handleFormSubmit}>
          <input
            type="search"
            placeholder="Digite o nome da cidade"
            value={citySearched}
            onChange={(event) => {
              setCitySearched(event.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {localStorage.getItem("dataWeather") ? (
          <div className="container">
            <h1>{cityName}</h1>

            <span>{Math.floor(temperature)} &#176;C</span>
            <div className="weather-info">
              <p>
                {weatherText.charAt(0).toUpperCase() + weatherText.slice(1)}
              </p>

              <img
                src={`http://api.openweathermap.org/img/w/${icon}.png`}
                alt="Weather icon"
              />
            </div>

            <hr />
            <br />
            <p>Humidade: {humidity} &#x0025;</p>
          </div>
        ) : (
          <div className="container">
            <p>Faça sua busca</p>
          </div>
        )}
      </main>
      <footer>Made with &#x2764; by D3V Ninja</footer>
    </div>
  );
}
export default App;
