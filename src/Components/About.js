import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'

function About() {

    const a = useContext(noteContext)

    useEffect(() => {
        a.update()
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            his name is {a.state.name} and he belongs from {a.s1.class}
        </div>
    )
}

export default About