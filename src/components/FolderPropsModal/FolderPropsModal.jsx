import React from 'react';
import {Button, Modal} from "antd";
import '../../styles/antd-override.scss'

const FolderPropsModal = ({isVisible, handleClose}) => {
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
            <Button
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