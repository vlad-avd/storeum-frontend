import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button, Popover} from "antd";
import './TreeElement.css'
import '../../../styles/antd-override.scss'
import FolderActionsModal from "../FolderActionsModal/FolderActionsModal";
import {useDispatch, useSelector} from "react-redux";
import {getNotesAction} from "../../../redux/actions/notes";
import {CLOSE_FOLDER_ACTIONS_MODAL, OPEN_FOLDER_ACTIONS_MODAL} from "../../../redux/actions/types";
import {useHistory, useLocation} from "react-router-dom";
import {CONTENT} from "../../../routes/routes";

const TreeElement = ({folder}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {isOpened} = useSelector(state => state.folderActionsModal)
    const [isFolderActionsModalVisible, setIsFolderActionsModalVisible] = useState(false);
    const router = useHistory();
    const location = useLocation();
    const {folderId} = useSelector(state => state.notes)

    const handleOpenActions = (e) => {
        e.stopPropagation()
        // setIsFolderActionsModalVisible(true);
        // dispatch({type: OPEN_FOLDER_ACTIONS_MODAL});
    }

    const handleCloseActions = () => {
        setIsFolderActionsModalVisible(false);
        dispatch({type: CLOSE_FOLDER_ACTIONS_MODAL});
    }

    const handleFolderClick = (e) => {
        if (folderId === folder.id) {
            e.stopPropagation();
            return
        }
        if (isOpened) {
            e.stopPropagation();
        } else {
            dispatch(getNotesAction(user.id, folder.id)).then(() => {
                if (location.pathname === "/" || location.pathname === "/home") {
                    router.push(CONTENT)
                }
            })
        }
    }

    // console.log("Render TreeElement")

    const content = (
        <div>
            <a>Add Folder</a>
            <br/>
            <a>Rename</a>
            <br/>
            <a>Delete</a>
        </div>
    );

    return (
        <span
            className={folderId === folder.id ? "selected-node title" : "title"}
            onClick={handleFolderClick}
            style={{display: "block", /*paddingLeft: "20px"*/}}
        >
            <FolderActionsModal
                isVisible={isFolderActionsModalVisible}
                handleClose={handleCloseActions}
                folder={folder}
            />
            {folder.title}
            <Popover placement="right" title={null} content={content} trigger="click">
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
            </Popover>
        </span>
    );
}

export default TreeElement;