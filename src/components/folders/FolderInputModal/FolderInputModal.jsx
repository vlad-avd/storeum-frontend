import React, {useState} from 'react';
import {Button, Input, Modal, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addFolderAction} from "../../../redux/actions/folders";
import Title from "antd/es/typography/Title";
import "./FolderInputModal.scss"

const FolderInputModal = ({isVisible, handleClose, parentFolderId, title}) => {

    const dispatch = useDispatch();
    const [folderTitle, setFolderTitle] = useState("");
    const {user} = useSelector(state => state.auth)

    const onChangeFolderTitle = (e) => {
        const folderTitle = e.target.value;
        setFolderTitle(folderTitle);
    }

    const handleFolderCreation = () => {
        dispatch(addFolderAction(user.id, parentFolderId, folderTitle))
        // when creating root folder - there is no parent modal with options
        // if (parentFolderId === undefined) {
        handleClose()
        // } else {
        //     handleCloseWithParent();
        // }
    }

    // console.log("Render AddFolderModal")

    {/*TODO: set footer as null & move buttons to content*/}
    return (
        <Modal
            className={"add-folder-modal"}
            okText="Create"
            okButtonProps={{form:'add-folder-form', htmlType: 'submit'}}
            width={"30vw"}
            visible={isVisible}
            closable={false}
            onCancel={handleClose}
            destroyOnClose={true}
            footer={null}
        >
            <Row type="flex" align="middle" justify="center">
                <Title className={"modal-form-title"}>
                    {title}
                </Title>
            </Row>
            <Row type="flex" align="middle" justify="center">
                <Input
                    onChange={onChangeFolderTitle}
                    placeholder="Title *"
                    className="input-folder-title"
                />
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
                    onClick={handleFolderCreation}
                    block
                    type="primary"
                    htmlType="submit"
                    className={"save-btn"}
                >
                    Submit
                </Button>
            </Row>
        </Modal>
    );
};

export default FolderInputModal;