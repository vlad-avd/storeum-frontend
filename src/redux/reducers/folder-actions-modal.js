import {CLOSE_FOLDER_ACTIONS_MODAL, OPEN_FOLDER_ACTIONS_MODAL} from "../actions/types";

const initialState = {isOpened: false};

export default function (state = initialState, action) {
    const {type} = action;

    switch (type) {
        case OPEN_FOLDER_ACTIONS_MODAL:
            return {...state, isOpened: true};
        case CLOSE_FOLDER_ACTIONS_MODAL:
            return {...state, isOpened: false};
        default:
            return state;
    }
}