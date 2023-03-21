import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from "axios"

export default function Character(props) {
    const navigate = useNavigate()
    const {characterList} = props

    const characters = characterList.map(ind => {
        return(<div>
            <h1>Your Character:</h1>
            <h3>Race: {ind.races}</h3>
            <h3>Class: {ind.classes}</h3>
            <h3>Subclass: {ind.subclasses}</h3>
            <h3>Strength: {ind.strength}</h3>
            <h4>Modifier:</h4>
            <h3>Dexterity: {ind.dexterity}</h3>
            <h4>Modifier:</h4>
            <h3>Constitution: {ind.constitution}</h3>
            <h4>Modifier:</h4>
            <h3>Intelligence: {ind.intelligence}</h3>
            <h4>Modifier:</h4>
            <h3>Wisdom: {ind.wisdom}</h3>
            <h4>Modifier:</h4>
            <h3>Charisma: {ind.charisma}</h3>
            <h4>Modifier:</h4>
        </div>)
    })
console.log(characters)
    return(
        <div>
            {characters}
            <button onClick={()=> navigate("/")}>Start Over</button>
        </div>
    )
}