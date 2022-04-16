import React from 'react';
import {Row} from "antd";
import NoteContent from "../NoteContent/NoteContent";
import NoteFilters from "../NoteFilters/NoteFilters";

const Notes = ({notes}) => {

    //TODO: to render multi rows with N cols in each row
/*    const N = 3;
    const rows = [...Array(Math.ceil(notes.length / N))];
    const notesRows = rows.map((row, idx) => notes.slice(idx * N, idx * N + N));*/

    return (
        notes.length
            ?
            <>
                <NoteFilters/>
                <Row gutter={[16, 16]} justify="start">
                    {notes.map(note =><NoteContent note={note} />)}
                </Row>
            </>
            :
            <h3>There are no notes in this folder, wanna to create?</h3>
    );
}

export default Notes;