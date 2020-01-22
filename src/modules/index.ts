import { combineReducers } from "redux";
import image from "./image";
import weather from "./weather";

const rootReducer = combineReducers({
  image,
  weather
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
