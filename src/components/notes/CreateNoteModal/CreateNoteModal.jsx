import React from 'react';
import {Modal} from "antd";
import CreateNoteForm from "../CreateNoteForm/CreateNoteForm";

const CreateNoteModal = ({isVisible, handleClose}) => {

    return (
        <Modal
            className={"add-note-modal"}
            width={"30vw"}
            visible={isVisible}
            closable={false}
            onCancel={handleClose}
            destroyOnClose={true}
            footer={null}
        >
            <CreateNoteForm
                handleClose={handleClose}
            />
        </Modal>
    );
};

export default CreateNoteModal;