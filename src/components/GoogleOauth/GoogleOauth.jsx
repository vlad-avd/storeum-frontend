import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {exchangeOAuthTokenAction} from "../../redux/actions/auth";
import {ERROR, HOME} from "../../routes/routes";

const GoogleOauth = () => {

    const params = useLocation().search;
    const token = new URLSearchParams(params).get('token');
    const dispatch = useDispatch();
    const router = useHistory()

    if ({token}) {
        //TODO: loader component while executing request
        dispatch(exchangeOAuthTokenAction(token))
        router.push(HOME);
    } else {
        router.push(ERROR);
    }

    return (
        <></>
    );
};

export default GoogleOauth;