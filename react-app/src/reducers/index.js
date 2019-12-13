import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';


const initialState = {
  soccerVideos3: [],
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        error: '',
        soccerVideos3: action.payload

      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
