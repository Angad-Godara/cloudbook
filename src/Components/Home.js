import React from 'react'
import { Addnote } from './Addnote'
import Notes from './Notes'

function Home() {

    return (
        <div>
            <Addnote />
            <Notes />
        </div>
    )
}

export default Home