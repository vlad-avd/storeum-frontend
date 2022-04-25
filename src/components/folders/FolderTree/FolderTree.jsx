import React, {useState} from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";
import FolderInputModal from "../FolderInputModal/FolderInputModal";
import {DownOutlined, PlusOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import './FolderTree.scss'

const FolderTree = ({folders}) => {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const {folderId} = useSelector(state => state.notes)

    const handleAddFolder = () => {
        setIsAddModalVisible(true);
    }

    const closeAddModal = () => {
        setIsAddModalVisible(false)
    }

    const renderTreeNodes = (data) => {
        if(!data) return [];
        return data.map(folder => {
            if (folder.subFolders.length) {
                return ({
                    className: folderId === folder.id ? "ant-tree-treenode-selected" : "",
                    key: folder.id,
                    title: <TreeElement folder={folder} />,
                    children: renderTreeNodes(folder.subFolders)})
            }
            return ({
                className: folderId === folder.id ? "ant-tree-treenode-selected" : "",
                key: folder.id,
                title: <TreeElement folder={folder} />,
                children: []})
        });
    }

    // console.log("Render FolderTree")

    return (
        <Layout>
            <Tree
                switcherIcon={<DownOutlined className="tree-switcher-icon" />}
                treeData={renderTreeNodes(folders)}
            />
            <FolderInputModal
                isVisible={isAddModalVisible}
                handleClose={closeAddModal}
                title="Create Folder"
            />
            <Button
                type={"text"}
                onClick={handleAddFolder}
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