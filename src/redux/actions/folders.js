import FolderService from "../../services/FolderService";
import {CREATE_FOLDER, DELETE_FOLDER, GET_FOLDERS} from "./types";

export const getFoldersAction = (userId) => (dispatch) => {
    return FolderService.getUserFolders(userId)
        .then((data) => {
            dispatch({type: GET_FOLDERS, payload: data});
        });
}

export const addFolderAction = (userId, parentFolderId, folderTitle) => (dispatch) => {
    return FolderService.createFolder(userId, parentFolderId, folderTitle)
        .then((data) => {
            dispatch({type: CREATE_FOLDER, payload: { parentFolderId: parentFolderId, newFolder: data}});
        });
}

export const deleteFolderAction = (userId, folderId) => (dispatch) => {
    return FolderService.deleteFolder(userId, folderId)
        .then((data) => {
            dispatch({type: DELETE_FOLDER, payload: {folderId: folderId}});
        });
}