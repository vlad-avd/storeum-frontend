import React, {useState} from 'react';
import {Button, Modal} from "antd";
import '../../../styles/antd-override.scss'
import AddFolderModal from "../AddFolderModal/AddFolderModal";
import DeleteFolderModal from "../DeleteFolderModal/DeleteFolderModal";

const FolderActionsModal = ({isVisible, handleClose, folder}) => {

    const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);
    const [isDeleteFolderModalVisible, setIsDeleteFolderModalVisible] = useState(false);

    const addFolder = () => {
        setIsAddFolderModalVisible(true);
    }

    const deleteFolder = () => {
        setIsDeleteFolderModalVisible(true);
    }

    const closeAddFolderModalWithParent = async () => {
        setIsAddFolderModalVisible(false)
        //TODO: to close child modal then parent
        await new Promise(it => setTimeout(it, 0));
        handleClose();
    }

    const closeAddFolderModal = (e) => {
        setIsAddFolderModalVisible(false)
    }

    const closeDelFolderModalWithParent = async () => {
        setIsDeleteFolderModalVisible(false)
        //TODO: to close child modal then parent
        await new Promise(it => setTimeout(it, 0));
        handleClose();
    }

    const closeDelFolderModal = () => {
        setIsDeleteFolderModalVisible(false)
    }

    return (
        <Modal
            width={"200px"}
            visible={isVisible}
            footer={null}
            closable={false}
            onCancel={handleClose}
            destroyOnClose={true}
        >
            <Button
                block
                htmlType="submit"
                size={"small"}
            >
                Rename
            </Button>
            <DeleteFolderModal
                isVisible={isDeleteFolderModalVisible}
                handleClose={closeDelFolderModal}
                handleCloseWithParent={closeDelFolderModalWithParent}
                folderId={folder.id}
            />
            <Button
                onClick={deleteFolder}
                block
                htmlType="submit"
                size={"small"}
            >
                Delete
            </Button>
            <AddFolderModal
                isVisible={isAddFolderModalVisible}
                handleClose={closeAddFolderModal}
                handleCloseWithParent={closeAddFolderModalWithParent}
                parentFolderId={folder.id}
            />
            <Button
                onClick={addFolder}
                block
                htmlType="submit"
                size={"small"}
            >
                Add folder
            </Button>
        </Modal>
    );
};

export default FolderActionsModal;