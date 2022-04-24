import React from 'react';
import {Divider, Row} from "antd";
import Note from "../Note/Note";
import NoteFilters from "../NoteFilters/NoteFilters";

const NoteList = ({notes, tags}) => {

    //TODO: to render multi rows with N cols in each row
/*    const N = 3;
    const rows = [...Array(Math.ceil(notes.length / N))];
    const notesRows = rows.map((row, idx) => notes.slice(idx * N, idx * N + N));*/

    // console.log("Render NoteList")

    return (
        notes.length
            ?
            <>
                <NoteFilters tags={tags}/>
                <Divider style={{margin: "0 auto", marginBottom: "20px", width: "100%"}} />
                <Row gutter={[16, 16]} justify="start">
                    {notes.map(note =><Note note={note} />)}
                </Row>
            </>
            :
            <h3>There are no notes in this folder, wanna to create?</h3>
    );
}

export default NoteList;