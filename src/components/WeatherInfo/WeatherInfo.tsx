import React from 'react';
import { Weather } from '../../@typings/weather';
import { Image } from '../../@typings/image';
import './WeatherInfo.styles.scss';
import { convertTimeStampToDate } from './utils';
interface WeatherInfoProps {
  showInfo: boolean;
  weather: Weather;
  image: Image | undefined;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ showInfo, weather, image }) =>
  showInfo ? (
    <div className="card">
      <div className="photo__container">
        <img src={image && image.urls.small} alt="City" className="photo" />
      </div>
      <div className="title-content">
        <h3>{weather.name}</h3>
        <hr />
        <div className="intro">{image && image.location.title}</div>
      </div>
      <p className="info">
        <label>{weather.weather[0].description}</label>
        <span>
          <label>temperature:</label> {Math.round(weather.main.temp)}°C
        </span>
        <span>
          <label>perceived temperature:</label> {Math.round(weather.main.feels_like)}°C
        </span>
        <span>
          <label htmlFor="">humidity:</label> {Math.round(weather.main.humidity)}%
        </span>
        <span>
          <label htmlFor="">temperature max:</label> {Math.round(weather.main.temp_max)}°C
        </span>
        <span>
          <label htmlFor="">temperature min:</label> {Math.round(weather.main.temp_min)}°C
        </span>
        <span>
          <label htmlFor="">sunrise: </label> {convertTimeStampToDate(weather.sys.sunrise, weather.timezone)}
        </span>
        <span>
          <label htmlFor="">sunset: </label> {convertTimeStampToDate(weather.sys.sunset, weather.timezone)}
        </span>
      </p>
    </div>
  ) : null;
