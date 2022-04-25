import React, {useState} from 'react';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button, Popover} from "antd";
import './TreeElement.scss'
import FolderOptions from "../FolderActionsModal/FolderOptions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {CONTENT} from "../../../routes/routes";
import {CLOSE_MODAL, SET_FOLDER_ID} from "../../../redux/actions/types";

const TreeElement = ({folder}) => {

    const dispatch = useDispatch();
    const {isOpened} = useSelector(state => state.folderActionsModal)
    const router = useHistory();
    const location = useLocation();
    const {selectedId} = useSelector(state => state.folders)
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)

    const handleOpenActions = (e) => {
        e.stopPropagation()
        setIsOptionsVisible(true)
    }

    const handleVisibleChange = (visible) => {
        if (isOptionsVisible === false && isOpened === true) {
            dispatch({type: CLOSE_MODAL});
        }
        setIsOptionsVisible(visible);
    }

    const handleFolderClick = (e) => {
        if (selectedId === folder.id) {
            e.stopPropagation();
            return
        }
        if (isOpened) {
            e.stopPropagation();
        } else {
            dispatch({type: SET_FOLDER_ID, payload: {selectedId: folder.id}})
            if (location.pathname === "/" || location.pathname === "/home") {
                router.push(CONTENT)
            }
        }
    }

    const folderOptions = (
        <FolderOptions
            handleCloseOptions={() => setIsOptionsVisible(false)}
            folder={folder}
        />
    );

    return (
        <span
            className={selectedId === folder.id ? "selected-node tree-folder-title" : "tree-folder-title"}
            onClick={handleFolderClick}
        >
            {folder.title}
            <Popover
                onVisibleChange={handleVisibleChange}
                visible={isOptionsVisible}
                placement="right"
                title={null}
                content={folderOptions}
                trigger="click"
            >
                <Button
                    onClick={handleOpenActions}
                    className="folder-options-button"
                    block
                    type="text"
                    htmlType="submit"
                    size={"small"}
                    icon={<EllipsisOutlined className="folder-options-icon" rotate={90}/>}
                />
            </Popover>
        </span>
    );
}

export default TreeElement;