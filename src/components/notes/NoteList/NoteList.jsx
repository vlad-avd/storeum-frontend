import React from 'react';
import {Divider, Row} from "antd";
import Note from "../Note/Note";
import NoteFilters from "../NoteFilters/NoteFilters";
import './NoteList.scss'

const NoteList = ({notes, tags}) => {

    //TODO: to render multi rows with N cols in each row
    /*    const N = 3;
        const rows = [...Array(Math.ceil(notes.length / N))];
        const notesRows = rows.map((row, idx) => notes.slice(idx * N, idx * N + N));*/

    return (
        notes.length
            ?
            <>
                <NoteFilters tags={tags}/>
                <Divider className="filters-bottom-divider" />
                <Row gutter={[16, 16]} justify="start">
                    {notes.map(note =><Note key={note.id} note={note} />)}
                </Row>
            </>
            :
            //TODO: create separate page
            <h3>There are no notes in this folder, wanna to create?</h3>
    );
}

export default NoteList;