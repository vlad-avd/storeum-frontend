import {SET_MESSAGE} from "./types";

export const setMessageAction = (message) => (dispatch) => {
    dispatch({type: SET_MESSAGE, payload: {message}});
};