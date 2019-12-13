import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const soccerVideos = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get('https://www.scorebat.com/video-api/v1/')
    .then(res => {
      console.log('I RAN FAST');
      console.log(res.data);
      console.log('I RAN FAST AGAIN');
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })

    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

// same as:

// const fetchFacts = () => {
//   return dispatch => {
//     dispatch({ type: START_FETCHING });
//     // do some async action and dispatch an error or success action
//     axios
//       .get('https://cat-fact.herokuapp.com/facts')
//       .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
//       .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
//   };
// };

// redux thunk
// const thunk = next => action => store => {
//   if (typeof action === 'object') {
//     next(action); // forward action untouched
//   } else if (typeof action === 'function') {
//     action(store.dispatch) // stop the action and call the function
//   }
// }
