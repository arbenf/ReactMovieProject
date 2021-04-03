import * as actionTypes from "../actions/types";

const initialState = {
    item: {
        cast: [],
        crew: []
    },
    actorDetails: {},
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CREDITS_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREDITS:
            return {
                ...state,
                item: action.payload,
                loading: false
            }
        case actionTypes.GET_ACTOR_DETAILS:
            return {
                ...state,
                actorDetails: action.payload
            }
            default:
                return state;
    }
}

export default reducer;