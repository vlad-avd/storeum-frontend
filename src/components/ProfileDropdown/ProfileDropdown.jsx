import React from 'react';
import {Col, Dropdown, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch} from "react-redux";

const ProfileDropdown = ({user}) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAction(user.id))
    }

    const dropDownMenu = (
        <Menu>
            <Menu.Item key="0">
                {/*TODO: add firstName*/}
                {user.email}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={handleLogout} key="1">
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Col span={12}>
            <Row justify="end" style={{height: "100%"}} type="flex" align="middle">
                <Dropdown.Button className={"user-button"} overlay={dropDownMenu} placement="bottomCenter" icon={<UserOutlined />}>
                </Dropdown.Button>
            </Row>
        </Col>
    );
};

export default ProfileDropdown;