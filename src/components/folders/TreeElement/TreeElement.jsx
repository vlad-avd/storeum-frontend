import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button, Popover} from "antd";
import './TreeElement.css'
import '../../../styles/antd-override.scss'
import FolderOptions from "../FolderActionsModal/FolderOptions";
import {useDispatch, useSelector} from "react-redux";
import {getNotesAction} from "../../../redux/actions/notes";
import {useHistory, useLocation} from "react-router-dom";
import {CONTENT} from "../../../routes/routes";
import {CLOSE_MODAL, OPEN_MODAL} from "../../../redux/actions/types";

const TreeElement = ({folder}) => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const {isOpened} = useSelector(state => state.folderActionsModal)
    const router = useHistory();
    const location = useLocation();
    const {folderId} = useSelector(state => state.notes)
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)

    const handleOpenActions = (e) => {
        e.stopPropagation()
        setIsOptionsVisible(true)
        dispatch({type: OPEN_MODAL});
    }

    const handleVisibleChange = (visible) => {
        if (isOptionsVisible === false && isOpened === true) {
            dispatch({type: CLOSE_MODAL});
        }
        setIsOptionsVisible(visible);
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
        <FolderOptions
            handleCloseOptions={() => setIsOptionsVisible(false)}
            folder={folder}
        />
    );

    return (
        <span
            className={folderId === folder.id ? "selected-node title" : "title"}
            onClick={handleFolderClick}
            style={{display: "block", /*paddingLeft: "20px"*/}}
        >
            {folder.title}
            <Popover onVisibleChange={handleVisibleChange} visible={isOptionsVisible} placement="right" title={null} content={content} trigger="click">
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