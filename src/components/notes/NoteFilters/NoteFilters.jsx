import React, {useState} from 'react';
import {Col, Input, Row, Tag} from "antd";

const NoteFilters = () => {

    const { CheckableTag } = Tag;
    const { Search } = Input;
    const tagsData = ['#java', '#python', '#watched', '#go'];
    
    const [selectedTags, setSelectedTags] = useState(['#go'])
    
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    }

    return (
        <Row style={{marginBottom: "20px"}}>
                        <Col>
                {tagsData.map(tag => (
                    <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => handleChange(tag, checked)}
                    >
                    {tag}
                    </CheckableTag>
                ))}    
            </Col>
            {/* <Col>
                <Search
                    placeholder="input search text"
                    allowClear
                />
            </Col> */}
        
            {/* <Button type="primary" icon={<PlusOutlined/>}/> */}
        </Row>
        // <div></div>
    );
};

export default NoteFilters;