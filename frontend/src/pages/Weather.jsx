import { useState } from "react";
import API from "../services/api";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await API.get(`/weather/${city}`);
      setWeather(res.data);
    } catch (err) {
      alert("City not found");
    }
  };

  return (
    <div>

      <h1>🌦 Weather Module</h1>

      <br />

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>

      <br />
      <br />

      {weather && (
        <div>

          <h2>{weather.city}</h2>

          <h3>🌡 Temperature : {weather.temperature} °C</h3>

          <h3>💧 Humidity : {weather.humidity}%</h3>

          <h3>🌥 Condition : {weather.condition}</h3>

        </div>
      )}

    </div>
  );
}

export default Weather;