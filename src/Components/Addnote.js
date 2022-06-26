import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext'

export const Addnote = () => {

    const context = useContext(noteContext)
    const { addnote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "" })

    const handlechange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
    }

    return (
        <div className='container my-3 '>
            <h2>Add a note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="text" name='tag' onChange={handlechange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
