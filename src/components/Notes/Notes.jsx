import React from 'react';
import {Button, Card, Col, Row} from "antd";
import {EditOutlined, LinkOutlined} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

const Notes = ({notes}) => {

    //TODO: to render multi rows with N cols in each row
/*    const N = 3;
    const rows = [...Array(Math.ceil(notes.length / N))];
    const notesRows = rows.map((row, idx) => notes.slice(idx * N, idx * N + N));*/

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Row gutter={[32, 16]} justify="start">
            {notes.map(note =>
                <Col span={6}>
                    {note.link
                        ?
                        <Card
                            actions={[
                                <LinkOutlined key="ellipsis" onClick={() => openInNewTab(note.link)}/>,
                                <EditOutlined key="edit" />,
                            ]}
                        >
                            <Meta
                                title={`${note.title}`}
                                description={note.description ? note.description : ''}
                            />
                        </Card>
                        :
                        <Card
                            actions={[
                                <EditOutlined key="edit" />,
                            ]}
                        >
                            <Meta
                                title={`${note.title}`}
                                description={`${note.description}`}
                            />
                        </Card>
                    }
                </Col>)}
        </Row>
    );
}

export default Notes;