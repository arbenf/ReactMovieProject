import * as actionTypes from "../actions/types";

const initialState = {
  movies: [],
  movie: {
    genres: [],
  },
  upComingMovies: {
    results: [],
  },
  nowPlayingMovies: {
    results: [],
  },
  movieSearch: [],
  watchProviders: {
    results: {},
  },
  movieTrailers: {
    results: [],
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
    case actionTypes.GET_UPCOMING_MOVIES:
      return {
        ...state,
        upComingMovies: {
          ...action.payload,
          results: [...action.payload.results],
        },
      };
    case actionTypes.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: {
          ...action.payload,
          results: [...action.payload.results],
        },
      };
    case actionTypes.SEARCH_MOVIE:
      return {
        ...state,
        movieSearch: [...action.payload],
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
    case actionTypes.GET_MOVIE_TRAILERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_MOVIE_TRAILERS:
      return {
        ...state,
        movieTrailers: {
          ...action.payload,
          results: [...action.payload.results], //Array of objects
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
