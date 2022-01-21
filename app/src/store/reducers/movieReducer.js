import * as actionTypes from "../actions/types";

const initialState = {
  movies: [],
  movie: {
    genres: [],
  },
  watchProviders: {
    results: {},
  },
  loading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
      };
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        movies: [...action.payload],
      };
    case actionTypes.MOVIEINFO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.MOVIE_INFO:
      return {
        ...state,
        movie: { ...action.payload, genres: [...action.payload.genres] },
        loading: false,
      };
    case actionTypes.GET_WATCH_PROVIDERS:
      return {
        ...state,
        watchProviders: {
          ...action.payload,
          results: {
            ...action.payload.results,
          },
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
