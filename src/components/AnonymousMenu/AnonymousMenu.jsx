import React from 'react';
import {Button, Col, Row} from "antd";
import {LOGIN, REGISTER} from "../../routes/routes";
import {useHistory, useLocation} from "react-router-dom";

const AnonymousMenu = () => {

    const router = useHistory()
    const location = useLocation();

    console.log("Render AnonymousMenu")

    return (
        <Col span={12}>
            {location.pathname === "/login"
                ? <Row justify="end" align="middle">
                    Don`t have a profile?
                    <Button
                        onClick={() => router.push(REGISTER)}
                        type="link">
                        Create account
                    </Button>
                </Row>
                :<Row justify="end" align="middle">
                    Already have an account?
                    <Button
                        onClick={() => router.push(LOGIN)}
                        type="link">
                        Login
                    </Button>
                </Row>
            }
        </Col>
    );
};

export default AnonymousMenu;