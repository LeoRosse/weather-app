import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as imageActions from "../actions/image";
import { Image } from "../@typings/image";
import fetchMock from 'fetch-mock'
import expect from 'expect'

describe('actions', () => {
    it('should create an action to start featching image', () => {
      const expectedAction = {
        type: imageActions.GET_IMAGE_START,
      }
      expect(imageActions.getImageStart()).toEqual(expectedAction)
    })
  })


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
          }
      }
      const expectedAction = {
        type: imageActions.GET_IMAGE_SUCCESS,
        payload
      }
      expect(imageActions.getImageSuccess(payload)).toEqual(expectedAction)
    })
  })

  describe('actions', () => {
    it('should create an action to add an error message', () => {
      const payload: string = "A bad message"
      const expectedAction = {
        type: imageActions.GET_IMAGE_FAILURE,
        payload
      }
      expect(imageActions.getImageFailure(payload)).toEqual(expectedAction)
    })
  })

