import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../redux/actions/auth";
import {Button, Col, Layout, Row} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import {DEFAULT, PROFILE} from "../../routes/routes";
import "./Navbar.css"

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
        <Layout.Header className="header-background" >
            <Row>
                <Col span={12}>
                    <Button
                        onClick={() => router.push(DEFAULT)}
                        type="link"
                        className="nav-button"
                    >
                        <b>storeum</b>
                    </Button>
                </Col>

                <Col span={12}>
                    <Row justify="end" align="middle" gutter={[16, 16]}>
                        <Col span={2}>
                            <Button
                                onClick={() => router.push(PROFILE)} type="link"
                                className="nav-button"
                            >
                                {user.username}
                            </Button>
                        </Col>

                        <Col span={2}>
                            <Button
                                onClick={handleLogout}
                                type="primary"
                                htmlType="submit"
                                className="logout-button"
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