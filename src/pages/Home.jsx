import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Col, Divider, Layout, Row} from "antd";
import '../styles/App.scss'
import {Content} from "antd/es/layout/layout";
import FolderTree from "../components/folders/FolderTree/FolderTree";
import {getFoldersAction} from "../redux/actions/folders";
import {REMOVE_FOLDER_ID} from "../redux/actions/types";

const Home = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {folders} = useSelector(state => state.folders)

    useEffect(() => {
        dispatch({type: REMOVE_FOLDER_ID})
    }, [user.id])

    useEffect(() => {
        dispatch(getFoldersAction(user.id))
    }, [user.id])

    console.log("Render Home")

    return (
        <Layout style={{backgroundColor: "white", padding: "0"}}>
            <Divider style={{margin: 0}}/>
            <Content style={{ padding: '0 25px' }}>
                <Row className={"h75"} justify="start">
                    <Col style={{paddingTop: "10px", marginTop: "50px"}} span={4}>
                        <FolderTree folders={folders}/>
                    </Col>
                    <Col span={1}>
                        <Divider style={{height: "90vh"}} type="vertical" />
                    </Col>
                    <Col span={19} style={{marginTop: "50px", paddingRight: "100px", paddingBottom: "200px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        Here will be your newest notes
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Home;