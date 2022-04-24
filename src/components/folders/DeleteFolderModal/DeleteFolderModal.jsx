import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteFolderAction} from "../../../redux/actions/folders";
import {Button, Input, Modal, Row} from "antd";
import Title from "antd/es/typography/Title";

const DeleteFolderModal = ({isVisible, handleClose, folderId}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)

    const handleFolderDelete = (e) => {
        //TODO
        e.stopPropagation()
        dispatch(deleteFolderAction(user.id, folderId))
        handleClose()
    }

    // console.log("Render DeleteFolderModal")

    return (
        <Modal
            className={"add-folder-modal"}
            width={"30vw"}
            visible={isVisible}
            closable={false}
            onCancel={handleClose}
            destroyOnClose={true}
            footer={null}
        >
            <Row type="flex" align="middle" justify="center">
                <Title className={"modal-form-title"}>
                    Sure you want to accept ?
                </Title>
            </Row>
            <Row type="flex" align="middle" style={{marginBottom: "30px"}}>
                Are you really want to delete folder? Will be deleted all nested folders and titles.
            </Row>
            <Row type="flex" align="middle" justify="center" style={{paddingBottom: "20px"}}>
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
                    onClick={handleFolderDelete}
                    block
                    type="primary"
                    htmlType="submit"
                    className={"save-btn"}
                >
                    Confirm
                </Button>
            </Row>
        </Modal>
    );
};

export default DeleteFolderModal;