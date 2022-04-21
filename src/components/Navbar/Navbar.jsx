import React from 'react';
import {useSelector} from "react-redux";
import {Button, Col, Layout, Row} from "antd";
import {useHistory} from "react-router-dom";
import {DEFAULT, LOGIN} from "../../routes/routes";
import "./Navbar.scss"
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import AnonymousMenu from "../AnonymousMenu/AnonymousMenu";

const Navbar = () => {

    const router = useHistory();
    const {user} = useSelector((state) => state.auth);

    const handleLogoClick = () => {
        if (user) {
            router.push(DEFAULT)
        } else {
            router.push(LOGIN)
        }
    }

    // console.log("Render Navbar")

    return (
        <Layout.Header className="header-background" >
            <Row>
                <Col span={12}>
                    <Button
                        onClick={handleLogoClick}
                        type="link"
                        className="nav-button"
                    >
                        <b>storeum</b>
                    </Button>
                </Col>

                {user
                    ? <ProfileDropdown user={user}/>
                    : <AnonymousMenu/>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;