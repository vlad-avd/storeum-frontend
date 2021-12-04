import React from 'react';
import {Button, Layout, Tree} from "antd";
import {DownOutlined, EllipsisOutlined} from "@ant-design/icons";
import TreeElement from "./TreeElement";

const TreeNode = Tree.TreeNode;

const FolderTree = ({folders}) => {

    const renderTreeNodes = (data) => {
        if(!data) return [];
        return data.map(folder => {
            if (folder.subFolders) {
                return (
                    <TreeNode title={<TreeElement title={folder.title} />} key={folder.id}>
                        {renderTreeNodes(folder.subFolders)}
                        {/*TODO*/}
                        {/*{[...renderTreeNodes(folder.subFolders), <TreeNode title="Add new" />]}*/}
                    </TreeNode>
                );
            }
            return (<TreeNode {...folder} />);
        });
    }

    return (
        <Layout>
            <Tree switcherIcon={<DownOutlined />}>
                {renderTreeNodes(folders)}
            </Tree>
            <Button
                block
                type="text"
                htmlType="submit"
                size={"small"}
            >
                Add folder
            </Button>
        </Layout>
    );
};

export default FolderTree;