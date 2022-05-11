import React, {useState} from 'react';
import {Button} from "antd";
import FolderInputModal from "../FolderInputModal/FolderInputModal";
import DeleteFolderModal from "../DeleteFolderModal/DeleteFolderModal";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL, OPEN_MODAL} from "../../../redux/actions/types";
import './FolderActionsModal.scss'
import {addFolderAction, editFolderAction} from "../../../redux/actions/folders";

const FolderActionsModal = ({folder, handleCloseOptions}) => {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isRenameModalVisible, setIsRenameModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [folderTitle, setFolderTitle] = useState("");
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const openAddModal = (e) => {
        e.stopPropagation();
        handleCloseOptions();
        setIsAddModalVisible(true);
        dispatch({type: OPEN_MODAL});
    }

    const openDeleteFolder = (e) => {
        e.stopPropagation();
        handleCloseOptions();
        setIsDeleteModalVisible(true);
        dispatch({type: OPEN_MODAL});
    }

    const openRenameFolder = (e) => {
        e.stopPropagation();
        handleCloseOptions();
        setIsRenameModalVisible(true);
        dispatch({type: OPEN_MODAL});
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

    const handleAddFolder = () => {
        dispatch(addFolderAction(user.id, folder.id, folderTitle));
        closeAddModal();
    }

    const handleEditFolder = () => {
        dispatch(editFolderAction(user.id, folder.parentFolder.id, folder.id, folderTitle))
        closeRenameModal();
    }

    return (
        <div className="folder-options-wrapper">

            <FolderInputModal
                isVisible={isAddModalVisible}
                handleClose={closeAddModal}
                handleSubmit={handleAddFolder}
                setFolderTitle={setFolderTitle}
                parentFolderId={folder.id}
                title="Create Folder"
            />
            <Button onClick={openAddModal} size="small" type="link">Add Folder</Button>

            <FolderInputModal
                isVisible={isRenameModalVisible}
                handleClose={closeRenameModal}
                handleSubmit={handleEditFolder}
                setFolderTitle={setFolderTitle}
                parentFolderId={folder.id}
                title="Rename Folder"
            />
            <Button onClick={openRenameFolder} size="small" type="link">Rename</Button>

            <DeleteFolderModal
                isVisible={isDeleteModalVisible}
                handleClose={closeDelModal}
                folderId={folder.id}
            />
            <Button onClick={openDeleteFolder} size="small" type="link">Delete</Button>
        </div>
    );
};

export default FolderActionsModal;