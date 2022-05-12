import React, {useState} from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";
import FolderInputModal from "../FolderInputModal/FolderInputModal";
import {DownOutlined, PlusOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import './FolderTree.scss'
import {addFolderAction} from "../../../redux/actions/folders";
import {SET_EXPANDED_IDS} from "../../../redux/actions/types";

const FolderTree = ({folders}) => {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [folderTitle, setFolderTitle] = useState("");
    const {selectedId, expandedIds} = useSelector(state => state.folders)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const openAddModal = () => {
        setIsAddModalVisible(true);
    }

    const closeAddModal = () => {
        setIsAddModalVisible(false)
    }

    const handleAddFolder = () => {
        dispatch(addFolderAction(user.id, null, folderTitle));
        closeAddModal();
    }

    const onExpand = (keys) => {
        dispatch({type: SET_EXPANDED_IDS, payload: {expandedIds: keys}})
    }

    const renderTreeNodes = (data) => {
        if(!data) return [];
        return data.sort((a, b) => a.id - b.id).
        map(folder => {
            if (folder.subFolders.length) {
                return ({
                    className: selectedId === folder.id ? "ant-tree-treenode-selected" : "",
                    key: folder.id,
                    title: <TreeElement folder={folder} />,
                    children: renderTreeNodes(folder.subFolders)})
            }
            return ({
                className: selectedId === folder.id ? "ant-tree-treenode-selected" : "",
                key: folder.id,
                title: <TreeElement folder={folder} />,
                children: []})
        });
    }

    return (
        <Layout>
            <Tree
                switcherIcon={<DownOutlined className="tree-switcher-icon" />}
                treeData={renderTreeNodes(folders)}
                selectedKeys={[selectedId]}
                expandedKeys={expandedIds}
                onExpand={onExpand}
            />
            <FolderInputModal
                isVisible={isAddModalVisible}
                handleClose={closeAddModal}
                handleSubmit={handleAddFolder}
                setFolderTitle={setFolderTitle}
                title="Create Folder"
            />
            <Button
                type={"text"}
                onClick={openAddModal}
                className="add-folder-button"
                block
                htmlType="submit"
                size={"small"}
            >
                <PlusOutlined className="add-folder-icon" />
                Add folder
            </Button>
        </Layout>
    );
};

export default FolderTree;