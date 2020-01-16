import * as imageActions from "../actions/image";

// Selectors

export const image = (state: any) => state.image.image;

// Store & reducer

const initialState = {
  image: null,
  loading: false
};

export default function reducer(state = initialState, action: any) {
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
