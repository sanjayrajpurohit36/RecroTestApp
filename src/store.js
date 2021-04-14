import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer";
import { createLogger } from "redux-logger";

// logger for reference
const loggerMiddleware = createLogger({});

export default function configureStore(initialState = {}) {
  // creating store using createStiore function which accumulates rootreducer which has all the reducer
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, loggerMiddleware)
  );

  return store;
}
