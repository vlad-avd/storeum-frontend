import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button} from "antd";
import './TreeElement.css'
import '../../../styles/antd-override.scss'
import FolderActionsModal from "../FolderActionsModal/FolderActionsModal";
import {useDispatch, useSelector} from "react-redux";
import {getNotesAction} from "../../../redux/actions/notes";
import {CLOSE_FOLDER_ACTIONS_MODAL, OPEN_FOLDER_ACTIONS_MODAL} from "../../../redux/actions/types";

const TreeElement = ({folder, selected, setSelected}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {isOpened} = useSelector(state => state.folderActionsModal)
    const [isFolderActionsModalVisible, setIsFolderActionsModalVisible] = useState(false);

    const handleOpenActions = (e) => {
        e.stopPropagation()
        setIsFolderActionsModalVisible(true);
        dispatch({type: OPEN_FOLDER_ACTIONS_MODAL});
    }

    const handleCloseActions = () => {
        setIsFolderActionsModalVisible(false);
        dispatch({type: CLOSE_FOLDER_ACTIONS_MODAL});
    }

    const handleFolderClick = (e) => {
        if (selected === folder.id) {
            e.stopPropagation();
            return
        } else {
            setSelected(folder.id)
        }
        if (isOpened) {
            e.stopPropagation();
        } else {
            dispatch(getNotesAction(user.id, folder.id))
        }
    }

    return (
        <span
            onClick={handleFolderClick}
            className="title"
            style={{display: "block", /*paddingLeft: "20px"*/}}
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
                icon={<EllipsisOutlined className={"folder-options"} rotate={90} style={{verticalAlign: "middle"}}/>}
            />
        </span>
    );
}

export default TreeElement;