import React, {useEffect, useRef, useState} from 'react';
import {Input, Row, Tag, Tooltip} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import "./EditableTags.scss"

const EditableTags = ({tags, setTags}) => {

    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputVisible]);

    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }

        setInputVisible(false);
        setInputValue('');
    };

    return (
        <Row className="editable-tag-wrapper">
            {tags.map((tag, index) => {

                const isLongTag = tag.length > 20;
                const tagElement = (
                    <Tag
                        className="tag-element"
                        key={tag}
                        closable={true}
                        onClose={() => handleClose(tag)}
                    >
                          {isLongTag ? `# ${tag.slice(0, 20)}...` : `# ${tag}`}
                    </Tag>
                );
                return isLongTag
                    ?
                    <Tooltip title={tag} key={tag}>
                        {tagElement}
                    </Tooltip>
                    :
                    tagElement

            })}

            {inputVisible
                ?
                <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
                :
                <Tag className="add-tag-element" onClick={showInput}>
                    <PlusOutlined /> Add Tag
                </Tag>
            }
        </Row>
    );
}

export default EditableTags;