import { combineReducers } from "redux";
import { apiReducer, apiReducerPath } from "../services/api";
import authSlice from "./features/authSlice";
import counter from "./features/counter";

export default combineReducers({
  auth: authSlice,
  [apiReducerPath]: apiReducer,
});
