import React, {useState} from 'react';
import {Button, Form, Input, Row} from "antd";
import Title from "antd/es/typography/Title";
import EditableTags from "../EditableTags/EditableTags";
import "./CreateNoteForm.scss"
import {useDispatch, useSelector} from "react-redux";
import NoteService from "../../../services/NoteService";
import {setAddNoteAction} from "../../../redux/actions/notes";

const CreateNoteForm = ({handleClose}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {selectedId} = useSelector(state => state.folders)
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState([])

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title)
    }

    const onChangeLink = (e) => {
        const link = e.target.value;
        setLink(link)
    }

    const onChangeDescription = (e) => {
        const description = e.target.value;
        setDescription(description)
    }

    const handleCreateNote = () => {
        let note = {}
        note.title = title;
        note.description = description;
        note.link = link;
        note.tags = tags;
        NoteService.createNote(user.id, selectedId, note).then((data) => {
            //TODO: handle 404
            dispatch(setAddNoteAction())
        })
        handleClose()
    }

    return (
        <Form>
            <Title className={"modal-form-title"}>
                Create Note
            </Title>

            <Form.Item name="title" style={{textAlign: "center"}}>
                <Input
                    onChange={onChangeTitle}
                    placeholder="Title *"
                    className={"add-note-modal-input"}
                />
            </Form.Item>

            <Form.Item name="link" style={{textAlign: "center"}}>
                <Input
                    onChange={onChangeLink}
                    placeholder="Link *"
                    className={"add-note-modal-input"}
                />
            </Form.Item>

            <Form.Item name="description" style={{textAlign: "center"}}>
                <Input.TextArea
                    onChange={onChangeDescription}
                    placeholder="Description *"
                    className={"add-note-modal-input"}
                />
            </Form.Item>

            <EditableTags tags={tags} setTags={(tags) => setTags(tags)}/>

            <Row type="flex" align="middle" justify="center">
                <Button
                    onClick={handleClose}
                    block
                    type="default"
                    htmlType="submit"
                    className={"cancel-btn"}
                >
                    Cancel
                </Button>

                <Button
                    onClick={handleCreateNote}
                    block
                    type="primary"
                    htmlType="submit"
                    className={"save-btn"}
                >
                    Create
                </Button>
            </Row>
        </Form>
    );
};

export default CreateNoteForm;