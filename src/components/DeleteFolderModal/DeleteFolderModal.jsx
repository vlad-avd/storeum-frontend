import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteFolderAction} from "../../redux/actions/folders";
import {Modal} from "antd";

const DeleteFolderModal = ({isVisible, handleClose, handleCloseWithParent, folderId}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)

    const handleFolderDelete = () => {
        //TODO
        dispatch(deleteFolderAction(user.id, folderId))
        handleCloseWithParent();
    }

    return (
        <Modal
            okText="Delete"
            width={"200px"}
            visible={isVisible}
            closable={false}
            onOk={handleFolderDelete}
            onCancel={handleClose}
            destroyOnClose={true}
        >
        </Modal>
    );
};

export default DeleteFolderModal;