import * as weatherActions from '../actions/weather';

// Selectors

export const weather = (state: any) => state.weather.weather;

// Store & reducer

const initialState = {
  weather: null,
  loading: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case weatherActions.GET_WEATHER_START:
      return {
        ...state,
        loading: true,
      };
    case weatherActions.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    case weatherActions.GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
