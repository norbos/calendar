import * as types from "./actionTypes";

export function updateMonth(month) {
    return {
        type: types.UPDATE_MONTH,
        month
    };
}

export function updateYear(year) {
    return {
        type: types.UPDATE_YEAR,
        year
    };
}