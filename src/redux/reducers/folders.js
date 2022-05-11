import {
    CREATE_FOLDER,
    DELETE_FOLDER,
    EDIT_FOLDER,
    GET_FOLDERS,
    REMOVE_FOLDER_ID,
    SET_FOLDER_ID
} from "../actions/types";

const initialState = {folders: [], selectedId: null};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_FOLDERS:
            return {...state, folders: payload};
        case CREATE_FOLDER:
            return {...state, folders: addFolder(state.folders, payload.parentFolderId, payload.newFolder)};
        case EDIT_FOLDER:
            return {...state, folders: editFolder(state.folders, payload.folderId, payload.newFolder)}
        case DELETE_FOLDER:
            return {...state, folders: deleteFolder(state.folders, payload.folderId)};
        case SET_FOLDER_ID:
            return {...state, selectedId: payload.selectedId}
        case REMOVE_FOLDER_ID:
            return {...state, selectedId: null}
        default:
            return state;
    }
}

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

const editFolder = (folders, folderId, newFolder) => {
    return folders.map(folder => {
        if (folder.subFolders) {
            folder.subFolders = editFolder(folder.subFolders, folderId, newFolder)
        }
        if (folder.id === folderId) {
            return newFolder;
        } else {
            return folder;
        }
    })
}

const deleteFolder = (folders, folderId) => {
    return folders.filter(folder => folder.id !== folderId).map(folder => {
        if (folder.subFolders) {
            folder.subFolders =  deleteFolder(folder.subFolders, folderId)
        }
        return folder;
    })
}