import {CLOSE_MODAL, OPEN_MODAL} from "../actions/types";

const initialState = {isOpened: false};

export default function (state = initialState, action) {
    const {type} = action;

    switch (type) {
        case OPEN_MODAL:
            return {...state, isOpened: true};
        case CLOSE_MODAL:
            return {...state, isOpened: false};
        default:
            return state;
    }
}