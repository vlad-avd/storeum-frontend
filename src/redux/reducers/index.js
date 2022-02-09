import {combineReducers} from "redux";
import auth from "./auth";
import folders from "./folders";
import notes from "./notes";

export default combineReducers({
  auth,
  folders,
  notes,
});