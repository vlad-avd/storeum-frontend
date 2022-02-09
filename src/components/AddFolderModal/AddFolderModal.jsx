import React, {useState} from 'react';
import {Form, Input, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addFolderAction} from "../../redux/actions/folders";

const AddFolderModal = ({isVisible, handleClose, handleCloseWithParent, parentFolderId}) => {

    const dispatch = useDispatch();
    const [folderTitle, setFolderTitle] = useState("");
    const {user} = useSelector(state => state.auth)

    const onChangeFolderTitle = (e) => {
        const folderTitle = e.target.value;
        setFolderTitle(folderTitle);
    }

    const handleFolderCreation = () => {
        dispatch(addFolderAction(user.id, parentFolderId, folderTitle))
        handleCloseWithParent();
    }

    return (
        <Modal
            className={"add-folder-modal"}
            okText="Create"
            okButtonProps={{form:'add-folder-form', htmlType: 'submit'}}
            width={"200px"}
            visible={isVisible}
            closable={false}
            onCancel={handleClose}
            destroyOnClose={true}
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