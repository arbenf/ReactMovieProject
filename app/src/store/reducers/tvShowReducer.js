import * as actionTypes from "../actions/types";

const initialState = {
  tvShows: [],
};

const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TV_SHOWS:
      return {
        ...state,
        tvShows: [...action.payload],
      };
    default:
      return state;
  }
};

export default tvShowReducer;
