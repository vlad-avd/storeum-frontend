import React, {useState} from 'react';
import {Button, Col, Row, Tag} from "antd";
import {PlusSquareOutlined} from "@ant-design/icons";
import './NoteFilters.scss'

const NoteFilters = ({tags}) => {

    const {CheckableTag} = Tag;
    const [selectedTags, setSelectedTags] = useState([])

    const handleChange = (tag, checked) => {
        const newSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter(t => t !== tag);
        setSelectedTags(newSelectedTags);
    }

    return (
        <Row className="filters-wrapper">
            <Col span={11}>
                {tags.map(tag => (
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
                    {/*//TODO: add hover*/}
                    <Button
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