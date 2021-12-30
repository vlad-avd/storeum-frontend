import {CREATE_FOLDER, GET_FOLDERS} from "../actions/types";

const initialState = {folders: []};

const addFolder = (folders, parentFolderId, newFolder) => {
    if (!parentFolderId) {
        folders.push(newFolder)
        return folders
    }
    return folders.map(folder => {
        if (folder.subFolders) {
            folder.subFolders = addFolder(folder.subFolders, parentFolderId, newFolder)
        }
        if (folder.id === parentFolderId) {
            folder.subFolders.push(newFolder)
        }
        return folder;
    })
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_FOLDERS:
            return {...state, folders: payload};
        case CREATE_FOLDER:
            return {...state, folders: addFolder(state.folders, payload.parentFolderId, payload.newFolder)};
        default:
            return state;
    }
}