import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../redux/actions/auth";
import {Button, Col, Layout, Row} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import "../styles/App.css"
import {DEFAULT, PROFILE} from "../routes/routes";

const Navbar = () => {

    const dispatch = useDispatch()
    const router = useHistory();
    const {user} = useSelector((state) => state.auth);

    let location = useLocation();
    if (location.pathname.match('/login') || location.pathname.match('/register') || !user) {
        return null;
    }

    const handleLogout = () => {
        dispatch(logoutAction(user.id))
    }

    return (
        <Layout.Header style={{backgroundColor: "white"}}>
            <Row>
                <Col span={12}>
                    <Button
                        onClick={() => router.push(DEFAULT)} type="link"
                        style={{color: "black"}}
                    >
                        <b>storeum</b>
                    </Button>
                </Col>
                <Col span={12}>
                    <Row justify="end" align="middle" gutter={[16, 16]}>
                        <Col span={2}>
                            <Button
                                onClick={() => router.push(PROFILE)} type="link"
                                style={{color: "black"}}
                            >
                                {user.username}
                            </Button>
                        </Col>
                        <Col span={2}>
                            <Button
                                onClick={handleLogout}
                                type="primary"
                                htmlType="submit"
                                style={{borderRadius: 10, border: "none"}}
                            >
                                Logout
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;