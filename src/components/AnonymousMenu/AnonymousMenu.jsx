import React from 'react';
import {Button, Row} from "antd";
import {LOGIN, REGISTER} from "../../routes/routes";
import {useHistory, useLocation} from "react-router-dom";

const AnonymousMenu = () => {

    const router = useHistory()
    const location = useLocation();

    return (
        //TODO: add locations list
        location.pathname === "/login"
            ? <Row justify="end" align="middle">
                Don`t have a profile?
                <Button onClick={() => router.push(REGISTER)} type="link">
                    Create account
                </Button>
            </Row>
            : <Row justify="end" align="middle">
                Already have an account?
                <Button onClick={() => router.push(LOGIN)} type="link">
                    Login
                </Button>
            </Row>
    );
};

export default AnonymousMenu;