import * as imageActions from "../actions/image";
import { ImageActionTypes } from '../actions/image';
import { Image } from "../@typings/image";

//interfaces

interface ImageState {
  image: Image | null;
  loading: boolean;
}

export interface ImageSelectorState {
  image: ImageState
}
// Selectors

export const image = (state: ImageSelectorState) => state.image.image

// Store & reducer

const initialState: ImageState = {
  image: null,
  loading: false
};

export default function reducer(state = initialState, action: ImageActionTypes) {
  switch (action.type) {
    case imageActions.GET_IMAGE_START:
      return {
        ...state,
        loading: true
      };
    case imageActions.GET_IMAGE_SUCCESS:
      return {
        ...state,
        image: action.payload,
        loading: false
      };
    case imageActions.GET_IMAGE_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
