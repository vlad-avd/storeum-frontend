import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFoldersAction} from "../redux/actions/folders";
import {Col, Divider, Layout, Row} from "antd";
import FolderTree from "../components/folders/FolderTree/FolderTree";
import NoteList from "../components/notes/NoteList/NoteList";
import {Content} from "antd/es/layout/layout";
import {useHistory, useLocation} from "react-router-dom";
import {HOME} from "../routes/routes";
import NoteService from "../services/NoteService";
import {setClearNoteAction} from "../redux/actions/notes";

const NoteContent = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {folders, selectedId} = useSelector(state => state.folders)
    const {noteAction} = useSelector(state => state.notes)
    const location = useLocation()
    const router = useHistory()
    const [notes, setNotes] = useState([])

    if (!selectedId && location.pathname === "/notes") {
        router.push(HOME)
    }

    useEffect(() => {
        if (selectedId || (selectedId && noteAction !== '')) {
            dispatch(setClearNoteAction())
            NoteService.getFolderNotes(user.id, selectedId).then((data) => {
                setNotes(data);
            })
        }
    }, [selectedId, user.id, noteAction])

    useEffect(() => {
        dispatch(getFoldersAction(user.id))
    }, [dispatch, user.id])

    const getFolderTags = () => {
        return folders
            .filter(folder => folder.id === selectedId)
            .filter(folder => folder.tags)
            .flatMap(folder => folder.tags)
            .flatMap(tag => tag.title)
    }

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
                    <Col span={19} style={{paddingRight: "50px"}}>
                        <Row justify="center" style={{width: "100%", margin: "25px 0"}}>
                            <NoteList
                                notes={notes}
                                tags={getFolderTags()}
                            />
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default NoteContent;