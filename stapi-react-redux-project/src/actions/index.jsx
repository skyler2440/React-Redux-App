import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const headers = {
    'Content-Type':'application/json'
}
export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START });
    axios
      .get('https://icanhazdadjoke.com/slack', {headers})
      .then(res => {
      console.log("TCL: getData -> res", res.data.attachments)
        
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.attachments });
      })
      .catch(err => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };
};
