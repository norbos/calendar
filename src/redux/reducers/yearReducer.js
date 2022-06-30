import * as types from "../actions/actionTypes";

export default function yearReducer(state = {}, action) {
    switch (action.type) {
        case types.UPDATE_YEAR:
            return { ...state, year: action.year };
        default:
            return state;
    }
}