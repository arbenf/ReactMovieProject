import * as actionTypes from "../actions/types";

const initialState = {
  credits: {
    cast: [],
    crew: []
  },
  actorDetails: {
    alsoKnownAs: []
  },
  actorImages: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREDITS_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CREDITS:
      return {
        ...state,
        credits: {
          ...action.payload,
          cast: [...action.payload.cast],
          crew: [...action.payload.crew]
        },
        loading: false
      };
    case actionTypes.ACTOR_DETAILS_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_ACTOR_DETAILS:
      return {
        ...state,
        actorDetails: {
          ...action.payload,
          alsoKnownAs: [...action.payload.also_known_as]
        },
        loading: false
      };
    case actionTypes.IMAGES_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_ACTOR_IMAGES:
      return {
        ...state,
        actorImages: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
