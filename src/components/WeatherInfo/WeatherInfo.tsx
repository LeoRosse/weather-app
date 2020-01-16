import React from "react";
import { Weather } from "../../@typings/weather";
import { Image } from "../../@typings/image";

interface WeatherInfoProps {
  showInfo: boolean;
  weather: Weather;
  image: Image;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  showInfo,
  weather,
  image
}) =>
  showInfo ? (
    <div className="card">
      <img src={image.urls.small} alt="City" />
      <div className="title-content">
        <h3>{weather.name}</h3>
        <hr />
        <div className="intro">
          Yllamco laboris nisi ut aliquip ex ea commodo.
        </div>
      </div>
      <p>
        {weather.weather[0].description}
        <br />
        temperature: {Math.round(weather.main.temp)}°C
        <br />
        perceived temperature: {Math.round(weather.main.feels_like)}°C
        <br />
        humidity: {Math.round(weather.main.humidity)}
        <br />
        temperature max: {Math.round(weather.main.temp_max)}
        <br />
        temperature min: {Math.round(weather.main.temp_min)}
      </p>
    </div>
  ) : null;
