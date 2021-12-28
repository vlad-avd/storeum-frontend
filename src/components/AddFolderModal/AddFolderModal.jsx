import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import FolderService from "../../services/FolderService";
import {useSelector} from "react-redux";

const AddFolderModal = ({isVisible, handleClose, parentFolderId}) => {

    const [folderTitle, setFolderTitle] = useState("");

    const {user} = useSelector(state => state.auth)

    const onChangeFolderTitle = (e) => {
        const folderTitle = e.target.value;
        setFolderTitle(folderTitle);
    }

    const handleFolderCreation = () => {
        //TODO: add folders to app state
        const data = FolderService.createFolder(user.id, parentFolderId, folderTitle)
        handleClose();
    }


    return (
        <Modal
            okText="Create"
            okButtonProps={{form:'add-folder-form', htmlType: 'submit'}}
            width={"200px"}
            visible={isVisible}
            closable={false}
            onCancel={handleClose}
        >
            <Form
                id='add-folder-form'
                onFinish={handleFolderCreation}
            >
                <Form.Item
                    labelCol={{span: 24}}
                    wrapperCol={{span: 24}}
                    label="Folder Title"
                    name="folder-title"
                >
                    <Input
                        onChange={onChangeFolderTitle}
                        // className="input-field"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddFolderModal;