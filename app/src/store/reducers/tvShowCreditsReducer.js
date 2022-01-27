import * as actionTypes from "../actions/types";

const initialState = {
  credits: {
    cast: [],
    crew: [],
  },
  loading: false,
};

const tvShowCreditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TV_CREDITS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.TV_CREDITS:
      return {
        ...state,
        credits: {
          ...action.payload,
          cast: [...action.payload.cast],
          crew: [...action.payload.crew],
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default tvShowCreditsReducer;
