import React, {useState} from 'react';
import {Button, Col, Row, Tag} from "antd";
import {PlusSquareOutlined} from "@ant-design/icons";
import './NoteFilters.scss'
import CreateNoteModal from "../CreateNoteModal/CreateNoteModal";

const NoteFilters = ({tags}) => {

    const {CheckableTag} = Tag;
    const [selectedTags, setSelectedTags] = useState([])
    const [isAddNoteModalVisible, setIsAddNoteModalVisible] = useState(false)

    const handleCloseModal = () => {
        setIsAddNoteModalVisible(false);
    }

    const handleChange = (tag, checked) => {
        const newSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag);
        setSelectedTags(newSelectedTags);
    }

    console.log(tags.sort((tag1, tag2) => tag1.localeCompare(tag2)))

    return (
        <Row className="filters-wrapper">
            <Col span={11}>
                {tags.sort((tag1, tag2) => tag1.localeCompare(tag2)).map(tag => (
                    //TODO: block text copying
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1 }
                        onChange={checked => handleChange(tag, checked)}
                    >
                        #{tag}
                    </CheckableTag>
                ))}
            </Col>
            <Col span={2} className="add-note-container">
                <div className="add-note-wrapper">
                    <CreateNoteModal
                        isVisible={isAddNoteModalVisible}
                        handleClose={handleCloseModal}
                    />
                    {/*//TODO: add hover*/}
                    <Button
                        onClick={() => setIsAddNoteModalVisible(true)}
                        icon={<PlusSquareOutlined className="add-note-icon" />}
                        type={"text"}
                        // onClick={handleAddFolder}
                        // className="add-folder"
                        block
                        htmlType="submit"
                    >
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default NoteFilters;