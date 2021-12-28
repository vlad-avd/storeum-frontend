import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button} from "antd";
import './TreeElement.css'
import '../../styles/antd-override.scss'
import FolderPropsModal from "../FolderPropsModal/FolderPropsModal";

const TreeElement = ({folder}) => {

    const [isFolderPropsModalVisible, setIsFolderPropsModalVisible] = useState(false);

    const openProperties = e => {
        e.stopPropagation();
        setIsFolderPropsModalVisible(true);
    }

    const handleCloseProperties = () => {
        setIsFolderPropsModalVisible(false);
    }

    const handleOpenedModal = (e) => {
        if (isFolderPropsModalVisible) {
            e.stopPropagation();
        }
    }

    return (
        <span
            onClick={handleOpenedModal}
            className="title"
            style={{display: "block"}}
        >
            <FolderPropsModal
                isVisible={isFolderPropsModalVisible}
                handleClose={handleCloseProperties}
                folder={folder}
            />
            {folder.title}
            <Button
                onClick={openProperties}
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