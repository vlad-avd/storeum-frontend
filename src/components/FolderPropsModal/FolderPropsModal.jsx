import React, {useState} from 'react';
import {Button, Modal} from "antd";
import '../../styles/antd-override.scss'
import AddFolderModal from "../AddFolderModal/AddFolderModal";

const FolderPropsModal = ({isVisible, handleClose, folder}) => {

    const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);

    const handleAddFolder = () => {
        setIsAddFolderModalVisible(true);
    }

    const closeAddFolderModal = async () => {
        setIsAddFolderModalVisible(false)
        //TODO: to close child modal then parent
        await new Promise(it => setTimeout(it, 0));
        handleClose();
    }

    return (
        <Modal
            width={"200px"}
            visible={isVisible}
            footer={null}
            closable={false}
            onCancel={handleClose}
        >
            <Button
                block
                htmlType="submit"
                size={"small"}
            >
                Rename
            </Button>
            <Button
                block
                htmlType="submit"
                size={"small"}
            >
                Delete
            </Button>
            <Button
                block
                htmlType="submit"
                size={"small"}
            >
                Move
            </Button>
            <AddFolderModal
                isVisible={isAddFolderModalVisible}
                handleClose={closeAddFolderModal}
                parentFolderId={folder.id}
            />
            <Button
                onClick={handleAddFolder}
                block
                htmlType="submit"
                size={"small"}
            >
                Add folder
            </Button>
        </Modal>
    );
};

export default FolderPropsModal;