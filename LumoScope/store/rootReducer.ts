import { combineReducers } from "redux";
import authSlice from "./features/authSlice";
import counter from "./features/counter";

export default combineReducers({
  auth: authSlice,
});
