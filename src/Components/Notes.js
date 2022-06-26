import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';

function Notes() {

    const context = useContext(noteContext);
    const { notes, getnotes } = context

    useEffect(() => {
        getnotes();
        // eslint-disable-next-line
    }, [])


    return (
        <div className='container my-2'>
            <h2>Your Notes</h2>
            <div className='row'>
                {notes.map(note => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes