import {GET_FOLDER_NOTES} from "../actions/types";

const initialState = {notes: []};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_FOLDER_NOTES:
            return {...state, notes: payload};
        default:
            return state;
    }
}