import React from 'react';
import {Button, Col, Layout, Row} from "antd";
import {LOGIN, REGISTER} from "../routes/routes";
import Title from "antd/es/typography/Title";
import {useHistory} from "react-router-dom";

const Error = () => {

    const router = useHistory()

    console.log("Render Error")

    return (
        <div>
            <Row
                justify="center"
                align="middle"
                style={{backgroundColor: "white", height:"90vh"}}
            >
                <Col span={12}>
                    <Row justify="center" align="middle">
                        <Title style={{fontSize: "50px"}}>404</Title>
                    </Row>
                    <Row>
                        <b style={{fontSize: "24px"}}>UH OH! You're lost.</b>
                    </Row>
                    <Row>
                        <span style={{fontSize: "18px"}}>
                        The page you are looking for does not exist. How you got here is a mystery.
                        But you can click the button below to go back to the homepage.
                        </span>
                    </Row>
                    <Row justify="center"
                         align="middle">
                        <Button
                            onClick={() => router.push(LOGIN)}
                            block
                            type="primary"
                            htmlType="submit"
                            style={{marginTop: "30px"}}
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

export default Error;