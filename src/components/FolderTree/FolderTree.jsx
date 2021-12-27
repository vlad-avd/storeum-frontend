import React from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";

const TreeNode = Tree.TreeNode;
const {DirectoryTree} = Tree;

const FolderTree = ({folders}) => {

    const renderTreeNodes = (data) => {
        if(!data) return [];
        return data.map(folder => {
            if (folder.subFolders) {
                return (
                    <TreeNode
                        title={<TreeElement title={folder.title} />}
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
            <Button
                /*TODO: add folder styles*/
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