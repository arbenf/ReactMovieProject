import { FETCH_MOVIES, SEARCH_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  movie: {}
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
