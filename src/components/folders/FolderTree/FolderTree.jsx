import React, {useState} from 'react';
import {Button, Layout, Tree} from "antd";
import TreeElement from "../TreeElement/TreeElement";
import AddFolderModal from "../AddFolderModal/AddFolderModal";
import {DownOutlined, PlusOutlined} from "@ant-design/icons";
import './FolderTree.css'

const FolderTree = ({folders}) => {

    const [isAddFolderModalVisible, setIsAddFolderModalVisible] = useState(false);
    const [selectedFolderId, setSelectedFolderId] = useState(0)

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
                        title: <TreeElement
                            folder={folder}
                            selected={selectedFolderId}
                            setSelected={setSelectedFolderId} />,
                        children: renderTreeNodes(folder.subFolders)})
            }
            return ({
                key: folder.id,
                title: <TreeElement
                    folder={folder}
                    selected={selectedFolderId}
                    setSelected={setSelectedFolderId} />,
                children: []})
        });
    }

    return (
        <Layout>
            <Tree
                switcherIcon={<DownOutlined style={{marginRight: "10px"}} />}
                treeData={renderTreeNodes(folders)}
            />
            <AddFolderModal
                isVisible={isAddFolderModalVisible}
                handleClose={closeAddFolderModal}
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