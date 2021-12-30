import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Col, Divider, Layout, Row} from "antd";
import '../styles/App.css'
import {Content} from "antd/es/layout/layout";
import FolderTree from "../components/FolderTree/FolderTree";
import {getFoldersAction} from "../redux/actions/folders";

const Home = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {folders} = useSelector(state => state.folders)

    useEffect(async () => {
        dispatch(getFoldersAction(user.id))
    }, [user.id])

    return (
        <Layout style={{backgroundColor: "white", padding: "40px 0 0 0"}}>
            <Content style={{ padding: '0 25px' }}>
                <Row className={"h75"} justify="start">
                    <Col style={{paddingTop: "10px"}} span={4}>
                        <FolderTree folders={folders}/>
                    </Col>
                    <Divider className={"h75"} type="vertical" />
                    <Col span={19}>
                        <Row justify="center">
                            Content
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Home;