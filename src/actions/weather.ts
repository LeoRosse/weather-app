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

export function getWeatherSuccess(weather: any) {
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

export function getWeather(keyword: string) {
  return async (dispatch: any) => {
    dispatch(getWeatherStart());
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&lang=it&units=metric&appid=ea69afac7ee734ece5f456bf9dd27957`
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
}
