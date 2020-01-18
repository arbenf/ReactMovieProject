import { FETCH_MOVIES, SEARCH_MOVIE } from "../actions/types";

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
    default:
      return state;
  }
};

export default movieReducer;
