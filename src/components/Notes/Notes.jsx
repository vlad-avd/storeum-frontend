import React from 'react';
import {Card, Col, Row} from "antd";

const Notes = ({notes}) => {

    const N = 3;
    const rows = [...Array(Math.ceil(notes.length / N))];
    const notesRows = rows.map((row, idx) => notes.slice(idx * N, idx * N + N));
    // console.log(notesRows)

    const content =
        <Row gutter={[32, 16]} justify="start">
            {notes.map(note =>
                <Col span={6}>
                    <Card title={`${note.title}`}>
                        {note.description}
                    </Card>
                </Col>)}
        </Row>

    return (
        <div>
            {content}
        </div>
    );
}

export default Notes;