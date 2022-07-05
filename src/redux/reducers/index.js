import { combineReducers } from "redux";
import month from "./monthReducer";
import year from "./yearReducer";

const rootReducer = combineReducers({
  month,
  year,
});

export default rootReducer;
