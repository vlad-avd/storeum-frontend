import {GET_FOLDER_NOTES, REMOVE_FOLDER_ID} from "../actions/types";

const initialState = {notes: [], folderId: ""};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_FOLDER_NOTES:
            return {...state, notes: payload.notes, folderId: payload.folderId,};
        case REMOVE_FOLDER_ID:
            return initialState
        default:
            return state;
    }
}