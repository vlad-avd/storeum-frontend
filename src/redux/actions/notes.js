import {ADD_NOTE} from "./types";

export const setAddNoteAction = () => (dispatch) => {
    dispatch({type: ADD_NOTE});
};

export const setClearNoteAction = () => (dispatch) => {
    dispatch({type: ""});
};