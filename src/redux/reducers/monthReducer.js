import * as types from "../actions/actionTypes";

export default function monthReducer(state = {}, action) {
    switch (action.type) {
        case types.UPDATE_MONTH:
            return action.month;
        default:
            return state;
    }
}