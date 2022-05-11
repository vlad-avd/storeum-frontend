import React from 'react';
import {Button, Input, Modal, Row} from "antd";
import Title from "antd/es/typography/Title";
import "./FolderInputModal.scss"

const FolderInputModal = ({isVisible, handleClose, handleSubmit, setFolderTitle, title}) => {

    const onChangeFolderTitle = (e) => {
        const folderTitle = e.target.value;
        setFolderTitle(folderTitle);
    }

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
                    className="input-folder-modal-title"
                />
            </Row>
            <Row type="flex" align="middle" justify="center" className="input-folder-modal-btns">
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
                    onClick={handleSubmit}
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