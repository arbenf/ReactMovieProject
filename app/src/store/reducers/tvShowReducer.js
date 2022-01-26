import * as actionTypes from "../actions/types";

const initialState = {
  tvShows: [],
  tvShow: {
    genres: [],
  },
  watchProviders: {
    results: {},
  },
};

const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TV_SHOWS:
      return {
        ...state,
        tvShows: [...action.payload],
      };
    case actionTypes.TVSHOW_INFO:
      return {
        ...state,
        tvShow: { ...action.payload, genres: [...action.payload.genres] },
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

export default tvShowReducer;
