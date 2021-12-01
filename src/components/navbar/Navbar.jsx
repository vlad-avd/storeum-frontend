import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../redux/actions/auth";
import {Button, Col, Layout, Row} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import "./Navbar.css"
import "../../styles/App.css"
import {DEFAULT, PROFILE} from "../../routes/routes";

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





        // <nav className="navbar navbar-expand navbar-dark bg-dark">
        //     <Link to={"/"} className="navbar-brand">
        //         Storeum
        //     </Link>
        //     <div className="navbar-nav mr-auto">
        //         <li className="nav-item">
        //             <Link to={"/home"} className="nav-link">
        //                 Home
        //             </Link>
        //         </li>
        //
        //         {user && (
        //             <li className="nav-item">
        //                 <Link to={"/user"} className="nav-link">
        //                     User
        //                 </Link>
        //             </li>
        //         )}
        //     </div>
        //
        //     {user ? (
        //         <div className="navbar-nav ml-auto">
        //             <li className="nav-item">
        //                 <Link to={"/profile"} className="nav-link">
        //                     {user.username}
        //                 </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/login" className="nav-link" onClick={handleLogout}>
        //                     LogOut
        //                 </a>
        //             </li>
        //         </div>
        //     ) : (
        //         <div className="navbar-nav ml-auto">
        //             <li className="nav-item">
        //                 <Link to={"/login"} className="nav-link">
        //                     LoginForm
        //                 </Link>
        //             </li>
        //
        //             <li className="nav-item">
        //                 <Link to={"/register"} className="nav-link">
        //                     Sign Up
        //                 </Link>
        //             </li>
        //         </div>
        //     )}
        // </nav>
    );
};

export default Navbar;