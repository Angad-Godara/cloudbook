import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = "http://localhost:5000/api"

    const initialNotes = []

    const [notes, setnotes] = useState(initialNotes)

    // Getting all notes
    const getnotes = async () => {
        // API call
        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWFlZjQ5YzRmM2M0ZTkyMjVhNGQ0In0sImlhdCI6MTY1NjA3NDE5MX0.V9vLrupvjZVszfBX4kaCN9w5XEb9gRm7TTwmp5fDigc"
            }
        });
        const json = await response.json();
        setnotes(json);
    }

    // Adding a note
    const addnote = async (title, description, tag = "default") => {
        // API Call
        const response = await fetch(`${host}/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWFlZjQ5YzRmM2M0ZTkyMjVhNGQ0In0sImlhdCI6MTY1NjA3NDE5MX0.V9vLrupvjZVszfBX4kaCN9w5XEb9gRm7TTwmp5fDigc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        if (json.user) {

            // for frontend
            const newnote = {
                _id: json._id,
                title: json.title,
                description: json.description,
                tag: json.tag
            }
            setnotes(notes.concat(newnote))
        }
        else {
            console.log("unable to add notes")
        }
        // getnotes();
    }

    // Deleting a note
    const deletenote = async (id) => {
        // API Call
        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWFlZjQ5YzRmM2M0ZTkyMjVhNGQ0In0sImlhdCI6MTY1NjA3NDE5MX0.V9vLrupvjZVszfBX4kaCN9w5XEb9gRm7TTwmp5fDigc"
            }
        });
        const json = await response.json();
        // getnotes();

        // For frontend
        const newnotes = notes.filter(note => {
            return note._id !== id
        })

        setnotes(newnotes)
    }

    // Editing a note
    const editnote = async (title, description, tag, id) => {
        // API Call
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiNWFlZjQ5YzRmM2M0ZTkyMjVhNGQ0In0sImlhdCI6MTY1NjA3NDE5MX0.V9vLrupvjZVszfBX4kaCN9w5XEb9gRm7TTwmp5fDigc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        // getnotes();

        // for frontend
        const newnotes = JSON.parse(JSON.stringify(notes));
        for (let i = 0; i < newnotes.length; i++) {
            const element = newnotes[i];
            if (element._id === id) {
                newnotes[i].title = title;
                newnotes[i].description = description;
                newnotes[i].tag = tag;
            }
        }
        setnotes(newnotes)
    }

    return (
        <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState