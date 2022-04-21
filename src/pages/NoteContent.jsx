import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFoldersAction} from "../redux/actions/folders";
import {Col, Divider, Layout, Row} from "antd";
import FolderTree from "../components/folders/FolderTree/FolderTree";
import NoteList from "../components/notes/NoteList/NoteList";
import {Content} from "antd/es/layout/layout";
import {useHistory, useLocation} from "react-router-dom";
import {HOME} from "../routes/routes";

const NoteContent = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {folders} = useSelector(state => state.folders)
    const {notes, folderId} = useSelector(state => state.notes)
    const location = useLocation()
    const router = useHistory()

    useEffect(() => {
        dispatch(getFoldersAction(user.id))
    }, [user.id])

    if (notes.length === 0 && !folderId && location.pathname === "/notes") {
        router.push(HOME)
    }

    console.log("Render NoteContent")

    return (
        <Layout style={{backgroundColor: "white", padding: "0"}}>
            <Divider style={{margin: 0}}/>
            <Content style={{ padding: '0 25px' }}>
                <Row className={"h75"} justify="start">
                    <Col style={{paddingTop: "10px"}} span={4}>
                        <FolderTree folders={folders}/>
                    </Col>
                    <Col span={1}>
                        <Divider style={{height: "90vh"}} type="vertical" />
                    </Col>
                    <Col span={19}>
                        <Row justify="center" style={{width: "100%", margin: "25px 0"}}>
                            <NoteList notes={notes} />
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default NoteContent;