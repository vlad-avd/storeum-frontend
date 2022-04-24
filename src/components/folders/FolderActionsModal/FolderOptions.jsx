import React, {useState} from 'react';
import {Button} from "antd";
import '../../../styles/antd-override.scss'
import FolderInputModal from "../AddFolderModal/FolderInputModal";
import DeleteFolderModal from "../DeleteFolderModal/DeleteFolderModal";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL, OPEN_MODAL} from "../../../redux/actions/types";

const FolderOptions = ({folder, handleCloseOptions}) => {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isRenameModalVisible, setIsRenameModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const dispatch = useDispatch();

    const addFolder = () => {
        handleCloseOptions();
        setIsAddModalVisible(true);
    }

    const deleteFolder = () => {
        handleCloseOptions();
        setIsDeleteModalVisible(true);
    }

    const renameFolder = () => {
        handleCloseOptions();
        setIsRenameModalVisible(true);
    }

    // const closeAddFolderModalWithParent = async () => {
    //     setIsAddModalVisible(false)
    //     //TODO: to close child modal then parent
    //     await new Promise(it => setTimeout(it, 0));
    //     handleClose();
    // }

    const closeAddModal = () => {
        setIsAddModalVisible(false)
        dispatch({type: CLOSE_MODAL});
    }

    const closeDelModal = () => {
        setIsDeleteModalVisible(false)
        dispatch({type: CLOSE_MODAL});
    }

    const closeRenameModal = () => {
        setIsRenameModalVisible(false)
        dispatch({type: CLOSE_MODAL});
    }

    // console.log("Render FolderActionsModal")

    return (
        <div style={{display: "flex", alignItems: "start", flexDirection: "column"}}>
            <FolderInputModal
                isVisible={isAddModalVisible}
                handleClose={closeAddModal}
                parentFolderId={folder.id}
                title="Create Folder"
            />
            <Button onClick={addFolder} size="small" type="link">Add Folder</Button>

            <FolderInputModal
                isVisible={isRenameModalVisible}
                handleClose={closeRenameModal}
                parentFolderId={folder.id}
                title="Rename Folder"
            />
            <Button onClick={renameFolder} size="small" type="link">Rename</Button>

            <DeleteFolderModal
                isVisible={isDeleteModalVisible}
                handleClose={closeDelModal}
                folderId={folder.id}
            />
            <Button onClick={deleteFolder} size="small" type="link">Delete</Button>
        </div>
    );
};

export default FolderOptions;