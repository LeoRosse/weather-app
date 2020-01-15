import React from "react";
import { Weather } from "../@typings/weather";

interface WeatherInfoProps {
  showInfo: boolean;
  weather: Weather;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  showInfo,
  weather
}) => (showInfo ? <>{weather.name}</> : null);
