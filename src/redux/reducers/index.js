import {combineReducers} from "redux";
import auth from "./auth";
import folders from "./folders";
import folderActionsModal from "./folder-actions-modal";
import messages from "./messages";
import notes from "./notes";

export default combineReducers({
  auth,
  folders,
  folderActionsModal,
  messages,
  notes,
});