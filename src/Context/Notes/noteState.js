import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const state = {
        name: "John",
        class: "middle"
    }

    const [s1, sets1] = useState(state)

    const update = () => {
        setTimeout(() => {
            sets1({
                name: "Don",
                class: "upper"
            })
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{ state, s1, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState