
import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  item: {},
  loading: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        items: action.payload
      };
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        items: action.payload
      };
      case actionTypes.MOVIEINFO_LOADING:
        return {
          ...state,
          loading: true
        }
    case actionTypes.MOVIE_INFO:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default movieReducer;



