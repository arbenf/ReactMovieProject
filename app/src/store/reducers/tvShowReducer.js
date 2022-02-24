import * as actionTypes from "../actions/types";

const initialState = {
  tvShows: [],
  tvShow: {
    genres: [],
  },
  tvShowsOnTheAir: {
    results: [],
  },
  tvShowSearch: [],
  watchProviders: {
    results: {},
  },
  loading: false,
};

const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TV_SHOWS:
      return {
        ...state,
        tvShows: [...action.payload],
      };
    case actionTypes.GET_TVSHOWS_ON_THE_AIR:
      return {
        ...state,
        tvShowsOnTheAir: {
          ...action.payload,
          results: [...action.payload.results],
        },
      };
    case actionTypes.SEARCH_TVSHOW:
      return {
        ...state,
        tvShowSearch: [...action.payload],
      };
    case actionTypes.TVSHOW_INFO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.TVSHOW_INFO:
      return {
        ...state,
        tvShow: { ...action.payload, genres: [...action.payload.genres] },
        loading: false,
      };
    case actionTypes.GET_TVSHOW_WATCH_PROVIDERS:
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
