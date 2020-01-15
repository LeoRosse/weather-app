import React from "react";
import { Weather } from "../@typings/weather";

interface WeatherInfoProps {
  showInfo: boolean;
  weather: Weather;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  showInfo,
  weather
}) =>
  showInfo ? (
    <div>
      <h1>{weather.name}</h1>
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
