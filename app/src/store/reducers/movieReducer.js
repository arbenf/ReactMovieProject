import * as actionTypes from "../actions/types";

const initialState = {
  movies: [],
  movie: {
    genres: []
  },
  loading: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        movies: [...action.payload]
      };
    case actionTypes.MOVIEINFO_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.MOVIE_INFO:
      return {
        ...state,
        movie: {...action.payload, genres: [...action.payload.genres]},
        loading: false
      };
    default:
      return state;
  }
};

export default movieReducer;
