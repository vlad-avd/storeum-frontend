import React from 'react';
import {Button, Col, Row} from "antd";
import {useSelector} from "react-redux";
import Title from "antd/es/typography/Title";
import {LOGIN} from "../routes/routes";
import {useHistory} from "react-router-dom";

const Message = () => {

    const {message} = useSelector(state => state.messages)
    const router = useHistory()

    return (
        <div>
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