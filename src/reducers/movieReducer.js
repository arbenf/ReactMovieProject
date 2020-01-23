import { FETCH_MOVIES, SEARCH_MOVIE, MOVIE_INFO } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: action.payload
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        items: action.payload
      };
    case MOVIE_INFO:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
