import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "antd/dist/antd.css";
import {Button, Divider, Form, Input} from "antd";
import {loginAction} from "../../redux/actions/auth";
import Title from "antd/es/typography/Title";
import "./LoginForm.css"
import {GoogleOutlined} from "@ant-design/icons";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = () => {
        dispatch(loginAction(username, password))
    };

    return (
        <Form onFinish={handleLogin}>
            <Title level={3}>
                Login
            </Title>

            <Form.Item
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input
                    onChange={onChangeUsername}
                    className="input-field"
                />
            </Form.Item>

            <Form.Item
                labelCol={{span: 24}}
                wrapperCol={{span: 24}}
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password
                    onChange={onChangePassword}
                    className="input-field"
                />
            </Form.Item>

            <Form.Item >
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="main-button"
                >
                    Login
                </Button>

            </Form.Item>

            <Form.Item>
                <Divider className="form-divider" plain>
                    or
                </Divider>
            </Form.Item>

            <Form.Item>
                <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="google-button"
                    icon={<GoogleOutlined className="google-icon" />}
                >
                    Continue with Google
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;