import {combineReducers} from "redux";
import auth from "./auth";
import folders from "./folders";

export default combineReducers({
  auth,
  folders,
});