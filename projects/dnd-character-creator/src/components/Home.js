import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return(
        <div>
            <h1>Create your own character here.</h1>
            <button onClick={()=> navigate("/entryform")}>Get Started</button>
        </div>
    )
}