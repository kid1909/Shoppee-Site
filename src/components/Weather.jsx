import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const API_KEY = "908c4872fa22adc9fc170cf35bba7dcd";
    const CITY_NAME = "Vancouver";

    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${CITY_NAME}`
    );
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getWeather}>Get Weather</button>
      {data && (
        <div>
          <p>Temperature: {data.current.temperature}</p>
          <p>Weather: {data.current.weather_descriptions[0]}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
