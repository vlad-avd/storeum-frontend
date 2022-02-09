import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button} from "antd";
import './TreeElement.css'
import '../../styles/antd-override.scss'
import FolderActionsModal from "../FolderActionsModal/FolderActionsModal";
import {useDispatch, useSelector} from "react-redux";
import {getNotesAction} from "../../redux/actions/notes";

const TreeElement = ({folder}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const [isFolderActionsModalVisible, setIsFolderActionsModalVisible] = useState(false);

    const handleOpenActions = e => {
        e.stopPropagation();
        setIsFolderActionsModalVisible(true);
    }

    const handleCloseActions = (e) => {
        e.stopPropagation()
        setIsFolderActionsModalVisible(false);
    }

    //TODO: add redux modal state and delete all other stop propagation
    const handleFolderClick = (e) => {
        if (isFolderActionsModalVisible) {
            e.stopPropagation();
        }
        dispatch(getNotesAction(user.id, folder.id))
    }

    return (
        <span
            onClick={handleFolderClick}
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