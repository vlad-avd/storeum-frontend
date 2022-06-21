import {ADD_NOTE} from "../actions/types";

const initialState =  ""

export default function (state = initialState, action) {
    const {type} = action;
    //TODO: improve solution
    switch (type) {
        case ADD_NOTE:
            return {...state, noteAction: ADD_NOTE};
        default:
            return {...state, noteAction: ""};
    }
}