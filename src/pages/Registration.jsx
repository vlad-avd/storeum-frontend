import React from 'react';
import {useHistory} from "react-router-dom";
import {Button, Col, Layout, Row} from "antd";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import {LOGIN} from "../routes/routes";

const Registration = () => {

    const router = useHistory()

    return (
        <Layout>
            <Layout.Header style={{backgroundColor: "white", padding: "0 20px 0 50px", height:"10vh"}}>
                <Row>
                    <Col span={12}>
                        <Row justify="start">
                            <b>storeum</b>
                        </Row>
                    </Col>

                    <Col span={12}>
                        <Row justify="end" align="middle">
                            Already have an account?
                            <Button
                                onClick={() => router.push(LOGIN)}
                                type="link">
                                Login
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Layout.Header>
            <Row
                justify="center"
                align="middle"
                className="h100"
                style={{backgroundColor: "white", height:"90vh"}}
            >
                    <RegistrationForm/>
            </Row>
        </Layout>
    );
};

export default Registration;