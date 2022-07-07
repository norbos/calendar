import * as types from "./actionTypes";

export const updateMonth = (month) => (dispatch) => {
  dispatch({
    type: types.UPDATE_MONTH,
    payload: month,
  });
};

export const updateYear = (year) => (dispatch) => {
  dispatch({
    type: types.UPDATE_YEAR,
    payload: year,
  });
};
