import React from 'react';
import {Row} from "antd";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const Registration = () => {

    console.log("Render Registration")

    return (
        <Row
            justify="center"
            align="middle"
            className="h100"
            style={{backgroundColor: "white", height:"90vh"}}
        >
            <RegistrationForm/>
        </Row>
    );
};

export default Registration;