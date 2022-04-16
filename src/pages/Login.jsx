import React from 'react';
import {Row} from "antd";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {

    return (
        <Row
            justify="center"
            align="middle"
            style={{backgroundColor: "white", height:"90vh"}}
        >
            <LoginForm/>
        </Row>
    );
};

export default Login;