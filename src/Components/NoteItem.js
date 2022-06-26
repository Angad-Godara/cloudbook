import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'

function NoteItem({ note }) {

    const context = useContext(noteContext);
    const { deletenote } = context;

    return (
        <div className='col-md-3 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can mx-2" onClick={() => { deletenote(note._id) }}></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem