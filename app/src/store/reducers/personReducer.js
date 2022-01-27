import * as actionTypes from "../actions/types";

const initialState = {
  actorDetails: {
    alsoKnownAs: [],
  },
  actorImages: [],
  loading: false,
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTOR_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ACTOR_DETAILS:
      return {
        ...state,
        actorDetails: {
          ...action.payload,
          alsoKnownAs: [...action.payload.also_known_as],
        },
        loading: false,
      };
    case actionTypes.IMAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ACTOR_IMAGES:
      return {
        ...state,
        actorImages: [...action.payload],
      };
    default:
      return state;
  }
};

export default personReducer;
