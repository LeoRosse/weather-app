import { combineReducers, Action } from 'redux';
import image from './image';
import weather from './weather';
import { ThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
  image,
  weather,
});

type RootReducer = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootReducer, null, Action<string>>;

export default rootReducer;
