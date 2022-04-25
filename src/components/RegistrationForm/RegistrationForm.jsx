import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {Button, Col, Divider, Form, Input, Row} from "antd";
import {registerAction} from "../../redux/actions/auth";
import Title from "antd/es/typography/Title";
import {GoogleOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import {ERROR, MESSAGE} from "../../routes/routes";
import "./RegistrationForm.scss";
import {setMessageAction} from "../../redux/actions/messages";

const Register = () => {

    const dispatch = useDispatch();
    const router = useHistory()

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePasswordConfirmation = (e) => {
        const passwordConfirm = e.target.value;
        setPasswordConfirm(passwordConfirm);
    };


    const handleRegister = () => {
        dispatch(registerAction(firstName, email, password, passwordConfirm)).then(() => {
            dispatch(setMessageAction("Account was created. Go to link from email to confirm account"))
            router.push(MESSAGE)
        }, (err) => {
            router.push(ERROR)
        })
    };

    // console.log("Render Register")

    return (
        <Col>
            <Form onFinish={handleRegister}>
                <Title className="form-title">
                    Create account
                </Title>

                <Form.Item name="firstName">
                    <Input
                        onChange={onChangeFirstName}
                        placeholder="First Name *"
                        className="input-field"
                    />
                </Form.Item>

                <Form.Item name="email">
                    <Input
                        onChange={onChangeEmail}
                        placeholder="Email *"
                        className="input-field"
                    />
                </Form.Item>

                <Row>
                    <Form.Item name="password">
                        <Input.Password
                            onChange={onChangePassword}
                            placeholder="Password"
                            className="password-field"
                        />
                    </Form.Item>

                    <Form.Item name="passwordConfirmation">
                        <Input.Password
                            onChange={onChangePasswordConfirmation}
                            placeholder="Confirmation *"
                            className="password-confirm-field"
                        />
                    </Form.Item>
                </Row>

                <Form.Item >
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="main-button"
                    >
                        Create account
                    </Button>
                </Form.Item>
            </Form>

            <Divider plain>or</Divider>

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

export default Register;