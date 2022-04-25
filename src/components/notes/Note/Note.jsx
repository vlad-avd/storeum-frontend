import React from 'react';
import {Card, Col} from "antd";
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
        <a className="tag-content" key={tag.id}> #{tag.title} </a>
    )

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
            {note.title}
            <span className="card-buttons">
                <LinkOutlined key="ellipsis" onClick={() => openInNewTab(note.link)}/>
                <EditOutlined className="card-edit-second-button" key="options" />
            </span>
        </div>
        : <div>
            {note.title}
            <span className="card-buttons">
                <EditOutlined key="options" />
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