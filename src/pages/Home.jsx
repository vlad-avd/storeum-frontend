import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Col, Divider, Layout, Row} from "antd";
import '../styles/App.css'
import {Content} from "antd/es/layout/layout";
import FolderTree from "../components/folders/FolderTree/FolderTree";
import {getFoldersAction} from "../redux/actions/folders";
import Notes from "../components/notes/Notes/Notes";

const Home = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {folders} = useSelector(state => state.folders)
    const {notes} = useSelector(state => state.notes)

    useEffect(() => {
        dispatch(getFoldersAction(user.id))
    }, [user.id])

    return (
        <Layout style={{backgroundColor: "white", padding: "0"}}>
            <Divider style={{margin: 0}}/>
            <Content style={{ padding: '0 25px' }}>
                <Row className={"h75"} justify="start">
                    <Col style={{paddingTop: "10px"}} span={4}>
                        <FolderTree folders={folders}/>
                    </Col>
                    <Col span={1}>
                        <Divider className={"h100"} type="vertical" />
                    </Col>
                    <Col span={19}>
                        <Row justify="center" style={{width: "100%", margin: "25px 0"}}>
                                <Notes notes={notes} />
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Home;