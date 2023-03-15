import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function EntryForm() {

    const navigate = useNavigate()
    const [races, setRaces] = useState([])
    const [classes, setClasses] = useState([])
    const [subclasses, setSubclasses] = useState([])

    // API Retrival  
    const getOptions = () => {
        axios.get(`https://api.open5e.com/races`) 
            .then(res => {
                setRaces(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.open5e.com/classes`) 
            .then(res => {
                setClasses(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.open5e.com/classes`) 
            .then(res => {
                setSubclasses(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(()=>{
        getOptions()
    },[])
    // Selector options
    const allRaces = races.map(item => [
        <option value={item.index} name={item.name}>{item.name}</option>
    ])
    const allClasses = classes.map(item => [
        <option value={item.index} name={item.name}>{item.name}</option>
    ])
    const allSubclasses = subclasses.map(item => [
        <option value={item.index} name={item.name}>{item.name}</option>
    ])
    
    
    
    
    
    

    return(
        <div>
            <form className="Inputs">
                <select id="race" name="race">
                    <option value="" >--Select your Race--</option>
                    {allRaces}
                </select>
                <select id="class" name="class">
                    <option value="">--Select your Class--</option>
                    {allClasses}
                </select>
                <select id="subclasses" name="subclasses">
                    <option value="">--Select your Subclass--</option>
                    {allSubclasses}
                </select>
                <button>Submit</button>
            </form>
                <h1>this is the entry form</h1>
            <button onClick={()=> navigate("/")}>Start Over</button>
        </div>
    )
}