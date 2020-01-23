import { Weather } from "../@typings/weather";
import { AppThunk } from "../modules";

// Constants
export const GET_WEATHER_START = "weather/GET_WEATHER_START";
export const GET_WEATHER_SUCCESS = "weather/GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "weather/GET_WEATHER_FAILURE";

// Action creators
export function getWeatherStart() {
  return {
    type: GET_WEATHER_START
  };
}

export function getWeatherSuccess(weather: Weather) {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: weather
  };
}

export function getWeatherFailure(errmessage: string) {
  return {
    type: GET_WEATHER_FAILURE,
    payload: errmessage
  };
}

export const getWeather = (keyword: string): AppThunk => async dispatch => {
  dispatch(getWeatherStart());
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  if (!response.ok) {
    return dispatch(getWeatherFailure("Unable to fetch"));
  }
  try {
    const weather = await response.json();
    dispatch(getWeatherSuccess(weather));
  } catch (error) {
    dispatch(getWeatherFailure(error.message));
  }
};
