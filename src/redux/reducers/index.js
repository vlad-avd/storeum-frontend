import {combineReducers} from "redux";
import auth from "./auth";
import folders from "./folders";
import folderActionsModal from "./folder-actions-modal";
import messages from "./messages";

export default combineReducers({
  auth,
  folders,
  folderActionsModal,
  messages,
});