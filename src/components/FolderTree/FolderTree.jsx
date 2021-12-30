import React, {useState} from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";
import AddFolderModal from "../AddFolderModal/AddFolderModal";

const TreeNode = Tree.TreeNode;
const {DirectoryTree} = Tree;

const FolderTree = ({folders}) => {

    const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);

    const handleAddFolder = () => {
        setIsAddFolderModalVisible(true);
    }

    const closeAddFolderModal = async () => {
        setIsAddFolderModalVisible(false)
    }

    const renderTreeNodes = (data) => {
        if(!data) return [];
        return data.map(folder => {
            if (folder.subFolders) {
                return (
                    <TreeNode
                        title={<TreeElement folder={folder} />}
                        key={folder.id}
                    >
                        {renderTreeNodes(folder.subFolders)}
                    </TreeNode>
                );
            }
            return (<TreeNode {...folder} />);
        });
    }

    return (
        <Layout>
            <DirectoryTree>
                {renderTreeNodes(folders)}
            </DirectoryTree>
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