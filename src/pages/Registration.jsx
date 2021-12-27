import React from 'react';
import {useHistory} from "react-router-dom";
import {Button, Card, Col, Layout, Row} from "antd";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import {LOGIN} from "../routes/routes";

const Registration = () => {

    const router = useHistory()

    return (
        <Layout>
            <Layout.Header style={{backgroundColor: "white"}}>
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
                style={{backgroundColor: "white"}}
            >
                <Card bordered={false}>
                    <RegistrationForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Registration;