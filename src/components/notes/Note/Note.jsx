import React, {useState} from 'react';
import {Card, Col, Popover} from "antd";
import {EditOutlined, LinkOutlined} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import NoteOptions from "../NoteOptions/NoteOptions";

const Note = ({note}) => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlePopupVisibility = (isVisible) => {
        setIsPopupVisible(isVisible)
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    // console.log("Render Note")

    const tags = note.tags.map((tag) =>
        <a style={{fontSize: "12px"}} key={tag.id}> #{tag.title} </a>
    )

    return (
        <Col span={6}>
            {note.link
                ?
                <Card>
                    <Meta
                        title={
                            <div>
                                {note.title}
                                <span style={{float: "right"}}>
                            <LinkOutlined key="ellipsis" onClick={() => openInNewTab(note.link)}/>
                            <Popover
                                placement="top"
                                content={<NoteOptions/>}
                                trigger="click"
                                visible={isPopupVisible}
                                onVisibleChange={handlePopupVisibility}
                            >
                                <EditOutlined style={{marginLeft: "20px"}} key="options" />
                            </Popover>
                            </span>
                            </div>}
                        description={
                            <div>
                                <div>
                                {note.description ? note.description : ''}
                                    </div>
                                <div style={{marginTop: "5px"}}>
                                    {tags}
                                </div>
                            </div>
                        }
                    />
                </Card>
                :
                <Card>
                    <Meta
                        title={
                            <div>
                                {note.title}
                                <span style={{float: "right"}}>
                                <Popover
                                    placement="top"
                                    content={<NoteOptions/>}
                                    trigger="click"
                                    visible={isPopupVisible}
                                    onVisibleChange={handlePopupVisibility}
                                >
                            <EditOutlined key="options" />
                        </Popover>
                                </span>
                            </div>}
                        description={
                            <div>
                                <div>
                                {note.description ? note.description : ''}
                                    </div>
                                <div style={{marginTop: "5px"}}>
                                    {tags}
                                </div>
                            </div>
                        }

                    />
                </Card>
            }
        </Col>
    );
};

export default Note;