import * as types from "./actionTypes";

export const updateMonth = (month) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_MONTH,
      payload: month,
    });
  };
};

export const updateYear = (year) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_YEAR,
      payload: year,
    });
  };
};
