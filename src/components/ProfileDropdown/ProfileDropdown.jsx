import React from 'react';
import {Dropdown, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch} from "react-redux";
import './ProfileDropdown.scss'

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
        <Row justify="end" className="profile-dropdown-row" type="flex" align="middle">
            <Dropdown.Button
                overlay={dropDownMenu}
                placement="bottomCenter"
                icon={<UserOutlined />}
            />
        </Row>
    );
};

export default ProfileDropdown;