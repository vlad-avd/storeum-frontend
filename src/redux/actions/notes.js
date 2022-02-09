import {GET_FOLDER_NOTES} from "./types";
import NoteService from "../../services/NoteService";

export const getNotesAction = (userId, folderId) => (dispatch) => {
    return NoteService.getFolderNotes(userId, folderId)
        .then((data) => {
            dispatch({type: GET_FOLDER_NOTES, payload: data});
        });
}