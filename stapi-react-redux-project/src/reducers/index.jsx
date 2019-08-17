import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions';
  
  const initialState = {
    jokes: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          jokes: action.payload,
          error: ''
        };
      default:
        return state;
    }
  };
  