import * as actionTypes from "../actions/types";

const initialState = {
  credits: {
    cast: [],
    crew: [],
  },
};

const tvShowCreditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TV_CREDITS:
      return {
        ...state,
        credits: {
          ...action.payload,
          cast: [...action.payload.cast],
          crew: [...action.payload.crew],
        },
      };
    default:
      return state;
  }
};

export default tvShowCreditsReducer;
