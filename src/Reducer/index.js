import { combineReducers } from "redux";
import defaultInfo from "./testReducer";

//combining all reducers into one
const reducers = {
  defaultInfo: defaultInfo,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
