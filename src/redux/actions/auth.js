import {LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS,} from "./types";

import AuthService from "../../services/AuthService";

export const registerAction = (username, email, password, passwordConfirm) => (dispatch) => {
    return AuthService.register(username, email, password, passwordConfirm)
        .then(() => {
            dispatch({type: REGISTER_SUCCESS});
        })
};

export const loginAction = (email, password) => (dispatch) => {
    return AuthService.login(email, password)
        .then((data) => {
            dispatch({type: LOGIN_SUCCESS, payload: { user: data }});
        });
};

export const exchangeOAuthTokenAction = (token) => (dispatch) => {
    return AuthService.exchangeOAuthToken(token)
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