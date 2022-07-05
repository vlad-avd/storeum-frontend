import React from 'react';
import {Card, Col, Tooltip} from "antd";
import {EditOutlined, LinkOutlined} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import './Note.scss'

const Note = ({note}) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) {
            newWindow.opener = null
        }
    }

    const tags = note.tags.map((tag) =>
        <span className="tag-content" key={tag.id}> #{tag.title} </span>
    )

    const truncate = (str, id) => {
        return str.length > 18
            ?
            <Tooltip title={str} key={id}>
                {str.substring(0, 15) + ' ...'}
            </Tooltip>
            :
            str;
    }

    const cardContent =
        <div>
            <div>
                {note.description ? note.description : ''}
            </div>
            <div className="tag-wrapper">
                {tags}
            </div>
        </div>

    const cardTitle = note.link
        ? <div>
            {truncate(note.title, note.id)}
            <span className="card-buttons">
                {/*TODO: add hover effect*/}
                <LinkOutlined className="card-option-btn" key="ellipsis" onClick={() => openInNewTab(note.link)}/>
                <EditOutlined className="card-edit-second-button card-option-btn" key="options" />
            </span>
        </div>
        : <div>
            {truncate(note.title, note.id)}
            <span className="card-buttons">
                <EditOutlined className="card-option-btn" key="options" />
            </span>
        </div>

    return (
        <Col span={6}>
            <Card>
                <Meta title={cardTitle} description={cardContent}/>
            </Card>
        </Col>
    );
};

export default Note;