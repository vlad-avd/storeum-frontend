import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "antd/dist/antd.css";
import {Button, Col, Divider, Form, Input} from "antd";
import {loginAction} from "../../redux/actions/auth";
import Title from "antd/es/typography/Title";
import {GoogleOutlined} from "@ant-design/icons";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = () => {
        dispatch(loginAction(email, password))
    };

    // console.log("Render LoginForm")

    return (
        <Col>
            <Form onFinish={handleLogin}>
                <Title className={"form-title"}>
                    Login
                </Title>

                <Form.Item name="email">
                    <Input
                        onChange={onChangeEmail}
                        placeholder="Email *"
                        className={"input-field"}
                    />
                </Form.Item>

                <Form.Item name="password">
                    <Input.Password
                        onChange={onChangePassword}
                        placeholder="Password *"
                        className={"input-field"}
                    />
                </Form.Item>

                <Form.Item >
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className={"main-button"}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>

            <Divider plain> or </Divider>

            {/*TODO:*/}
            <a href="http://localhost:8080/api/v1/oauth2/authorize/google?redirect_uri==http://localhost:8080">
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="google-button"
                    icon={<GoogleOutlined className="google-icon" />}
                >
                    Continue with Google
                </Button>
            </a>
        </Col>
    );
};

export default LoginForm;