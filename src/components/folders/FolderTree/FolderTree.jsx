import React, {useState} from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";
import FolderInputModal from "../AddFolderModal/FolderInputModal";
import {DownOutlined, PlusOutlined} from "@ant-design/icons";
import './FolderTree.css'
import {useSelector} from "react-redux";

const FolderTree = ({folders}) => {

    const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);
    const {folderId} = useSelector(state => state.notes)

    const handleAddFolder = () => {
        setIsAddFolderModalVisible(true);
    }

    const closeAddFolderModal = () => {
        setIsAddFolderModalVisible(false)
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

    console.log("Render FolderTree")

    return (
        <Layout>
            <Tree
                switcherIcon={<DownOutlined style={{marginRight: "10px"}} />}
                treeData={renderTreeNodes(folders)}
            />
            <FolderInputModal
                isVisible={isAddFolderModalVisible}
                handleClose={closeAddFolderModal}
                title="Create Folder"
            />
            <Button
                type={"text"}
                /*TODO: add folder styles*/
                onClick={handleAddFolder}
                className="add-folder"
                block
                htmlType="submit"
                size={"small"}
            >
                    <PlusOutlined style={{color: "rgba(44, 146, 239, 0.75)", fontSize: "16px"}} />
                Add folder
            </Button>
        </Layout>
    );
};

export default FolderTree;