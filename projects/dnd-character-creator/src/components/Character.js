import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function CharacterList() {
    const navigate = useNavigate()
    
    return(
        <div>
            <h1>this is the character page</h1>
            <button onClick={()=> navigate("/")}>Start Over</button>
        </div>
    )
}