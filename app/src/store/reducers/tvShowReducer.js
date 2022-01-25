import * as actionTypes from "../actions/types";

const initialState = {
  tvShows: [],
  tvShow: {
    genres: [],
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
    default:
      return state;
  }
};

export default tvShowReducer;
