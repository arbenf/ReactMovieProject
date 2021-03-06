import * as actionTypes from "../actions/types";

const initialState = {
    item: {
        cast: [],
        crew: []
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CREDITS:
            return {
                ...state,
                item: action.payload
            }
            default:
                return state;
    }
}

export default reducer;