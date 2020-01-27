import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as imageActions from '../actions/image';
import { Image } from '../@typings/image';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { AnyAction } from 'redux';

const initialState = {};
type State = typeof initialState;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to start featching image', () => {
    const expectedAction = {
      type: imageActions.GET_IMAGE_START,
    };
    expect(imageActions.getImageStart()).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add an image', () => {
    const payload: Image = {
      urls: {
        raw: 'a usefull string',
        full: 'a usefull string',
        regular: 'a usefull string',
        small: 'a usefull string',
        thumb: 'a usefull string',
      },
      user: {
        name: 'a usefull string',
      },
      location: {
        title: 'a usefull string',
      },
    };
    const expectedAction = {
      type: imageActions.GET_IMAGE_SUCCESS,
      payload,
    };
    expect(imageActions.getImageSuccess(payload)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add an error message', () => {
    const payload: string = 'A bad message';
    const expectedAction = {
      type: imageActions.GET_IMAGE_FAILURE,
      payload,
    };
    expect(imageActions.getImageFailure(payload)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('creates GET_IMAGE_SUCCESS when fetching image has been done', () => {
    fetchMock.getOnce(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_IMAGE_API_KEY}&query=Firenze&orientation=landscape`,
      {
        payload: { todos: ['do something'] },
        headers: { 'content-type': 'application/json' },
      },
    );
    const expectedActions = [
      { type: imageActions.GET_IMAGE_START },
      { type: imageActions.GET_IMAGE_SUCCESS, payload: { todos: ['do something'] } },
    ];
    const store = mockStore({ todos: [] });
    //@ts-ignore
    return store.dispatch(imageActions.getImage('Firenze')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
