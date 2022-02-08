import React, {useState} from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";
import AddFolderModal from "../AddFolderModal/AddFolderModal";

const {DirectoryTree} = Tree;

const FolderTree = ({folders}) => {

    const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);

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
                        key: folder.id,
                        title: <TreeElement folder={folder}/>,
                        children: renderTreeNodes(folder.subFolders)})
            }
            return ({
                key: folder.id,
                title: <TreeElement folder={folder}/>,
                children: []})
        });
    }

    return (
        <Layout>
            <DirectoryTree
                treeData={renderTreeNodes(folders)}
            />
            <AddFolderModal
                isVisible={isAddFolderModalVisible}
                handleClose={closeAddFolderModal}
            />
            <Button
                /*TODO: add folder styles*/
                onClick={handleAddFolder}
                className="add-folder"
                block
                htmlType="submit"
                size={"small"}
            >
                Add folder
            </Button>
        </Layout>
    );
};

export default FolderTree;