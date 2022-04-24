import React, {useState} from 'react';
import {Button, Col, Row, Tag} from "antd";
import {PlusSquareOutlined} from "@ant-design/icons";

const NoteFilters = ({tags}) => {

    const { CheckableTag } = Tag;
    const tagsData = tags;

    const [selectedTags, setSelectedTags] = useState(['#go'])

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    }

    // console.log("Render NoteFilters")

    return (
        <Row style={{marginBottom: "20px", width: "100%", display: "flex", justifyContent: "start", alignItems: "center"}}>
            <Col span={11}>
                {tagsData.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1 }
                        onChange={checked => handleChange(tag, checked)}
                    >
                        #{tag}
                    </CheckableTag>
                ))}
            </Col>
            <Col span={2} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "30px"}}>
                    {/*//TODO: add hove*/}
                    <Button
                        icon={<PlusSquareOutlined style={{color: "rgba(44, 146, 239, 0.75)", fontSize: "30px"}} />}
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