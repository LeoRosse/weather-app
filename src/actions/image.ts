import { Image } from "../@typings/image";
import { AppThunk } from "../modules";

// Constants
export const GET_IMAGE_START = "image/GET_IMAGE_START";
export const GET_IMAGE_SUCCESS = "image/GET_IMAGE_SUCCESS";
export const GET_IMAGE_FAILURE = "image/GET_IMAGE_FAILURE";

//interfaces
interface getImageStartAction {
  type: typeof GET_IMAGE_START
}
interface getImageSuccessAction {
  type: typeof GET_IMAGE_SUCCESS,
  payload: Image
}
interface getImageFailAction {
  type: typeof GET_IMAGE_FAILURE,
  payload: string
}

export type ImageActionTypes = getImageStartAction | getImageSuccessAction | getImageFailAction

// Action creators
export function getImageStart(): ImageActionTypes {
  return {
    type: GET_IMAGE_START
  };
}

export function getImageSuccess(image: Image): ImageActionTypes {
  return {
    type: GET_IMAGE_SUCCESS,
    payload: image
  };
}

export function getImageFailure(errmessage: string): ImageActionTypes {
  return {
    type: GET_IMAGE_FAILURE,
    payload: errmessage
  };
}

export const getImage = (keyword: string): AppThunk => async dispatch => {
  dispatch(getImageStart());
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_IMAGE_API_KEY}&query=${keyword}&orientation=landscape`
  );
  if (!response.ok) {
    return dispatch(getImageFailure("Unable to fetch"));
  }
  try {
    const image = await response.json();
    dispatch(getImageSuccess(image));
  } catch (error) {
    dispatch(getImageFailure(error.message));
  }
};
