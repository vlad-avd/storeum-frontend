import {ADD_NOTE} from "../actions/types";

const initialState =  ""

export default function (state = initialState, action) {
    const {type} = action;

    switch (type) {
        case ADD_NOTE:
            return {...state, update: {action: ADD_NOTE, value: Date.now()}};
        default:
            return {...state, update: {action: "", value: ""}};
    }
}