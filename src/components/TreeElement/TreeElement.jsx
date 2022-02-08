import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button} from "antd";
import './TreeElement.css'
import '../../styles/antd-override.scss'
import FolderActionsModal from "../FolderActionsModal/FolderActionsModal";

const TreeElement = ({folder}) => {

    const [isFolderActionsModalVisible, setIsFolderActionsModalVisible] = useState(false);

    const handleOpenActions = e => {
        e.stopPropagation();
        setIsFolderActionsModalVisible(true);
    }

    const handleCloseActions = () => {
        setIsFolderActionsModalVisible(false);
    }

    const handleOpenModal = (e) => {
        if (isFolderActionsModalVisible) {
            e.stopPropagation();
        }
    }

    return (
        <span
            onClick={handleOpenModal}
            className="title"
            style={{display: "block"}}
        >
            <FolderActionsModal
                isVisible={isFolderActionsModalVisible}
                handleClose={handleCloseActions}
                folder={folder}
            />
            {folder.title}
            <Button
                onClick={handleOpenActions}
                className="hide"
                block
                type="text"
                htmlType="submit"
                size={"small"}
                style={{float: "right", textShadow: "none", verticalAlign: "middle", border: "none"}}
                icon={<EllipsisOutlined style={{verticalAlign: "middle"}}/>}
            />
        </span>
    );
}

export default TreeElement;