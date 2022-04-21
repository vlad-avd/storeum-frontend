import React from 'react';
import "./styles.scss"
import {Button, Col, Layout, Row} from "antd";
import {useSelector} from "react-redux";
import Title from "antd/es/typography/Title";
import {LOGIN, REGISTER} from "../routes/routes";
import {useHistory} from "react-router-dom";

const Message = () => {

    const {message} = useSelector(state => state.messages)
    const router = useHistory()

    console.log("Render Message")

    return (
        <div>
            <Layout.Header style={{backgroundColor: "white", padding: "0 20px 0 50px", height:"10vh"}}>
                <Row>
                    <Col span={12}>
                        <Row justify="start">
                            <b>storeum</b>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row justify="end" align="middle">
                            Don`t have a profile?
                            <Button
                                onClick={() => router.push(REGISTER)}
                                type="link">
                                Create account
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Layout.Header>

            <Row
                justify="center"
                align="middle"
                style={{backgroundColor: "white", height:"90vh"}}
            >
                <Col span={12}>
                    <Row justify="center"
                         align="middle">
                        <Title className={"form-title"}>{message}</Title>
                    </Row>
                    <Row justify="center"
                         align="middle">
                        <Button
                            onClick={() => router.push(LOGIN)}
                            block
                            type="primary"
                            htmlType="submit"
                            className={"main-button"}
                        >
                            Go to login page
                        </Button>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Message;