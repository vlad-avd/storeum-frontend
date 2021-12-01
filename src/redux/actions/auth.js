import {LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS,} from "./types";

import AuthService from "../../services/AuthService";

export const registerAction = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password)
        .then(() => {
            dispatch({type: REGISTER_SUCCESS});
        });
};

export const loginAction = (username, password) => (dispatch) => {
    return AuthService.login(username, password)
        .then((data) => {
            dispatch({type: LOGIN_SUCCESS, payload: { user: data }});
        });
};

export const logoutAction = (userId) => (dispatch) => {
    return AuthService.logout(userId)
        .then(() => {
            dispatch({type: LOGOUT});
        })
};