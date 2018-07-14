import { combineReducers } from "redux";
import { createReducer } from "../../utilities/redux-helpers";
import { setFalse, setTrue, setPayload } from "../../utilities/utility";

const isLoadingReducer = createReducer(false, {
  GET_FEED_START: setTrue,
  GET_FEED_DONE: setFalse
});

const feedReducer = createReducer(null, {
  GET_FEED_DONE: setPayload
});

// GLOBAL STATE
// *************************************************************
export const GLOBAL_STATE_REDUCER: any = combineReducers({
  isLoading: isLoadingReducer,
  feed: feedReducer
});
