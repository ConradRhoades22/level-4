import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function EntryForm(props) {

    const [races, setRaces] = useState([])
    const [raceDesc, setRaceDesc] = useState([])
    const [classes, setClasses] = useState([])
    const [subclasses, setSubclasses] = useState([])
    const {characterList, setCharacterList} = props
    const [character, setCharacter] = useState({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        races:"",
        classes:"",
        subclasses:"",
    })
    // API Retrival  
    const getOptions = () => {
        axios.get(`https://api.open5e.com/races`) 
            .then(res => {
                setRaces(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get(`https://api.open5e.com/races`) 
            .then(res => {
                setRaceDesc(res.data.results.desc)
                console.log(raceDesc)
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
                let type = []
                
                let results = res.data.results
                for(let i = 0; i < results.length; i++) {
                    let newItem =  {
                        name: results[i].name,
                        archetypes: results[i].archetypes
                    }
                    type.push(newItem)
                }
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
        <option value={item.id} name={item.archetypes[0].slug}>{item.archetypes[0].name}</option>
        
    ])
    
    let handleChange = (e) => {
        e.preventDefault()
        setCharacter(prevCharacter => {   
            return{
                ...prevCharacter,
                [e.target.name]:e.target.value
            }
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        const currentCharList = characterList
        currentCharList.push(character)
        setCharacterList(currentCharList)
    }

    return(
        <div>
            <form className="Inputs" onSubmit={handleSubmit}>
                <div>
                    <p>Race: </p>
                    <select onChange={handleChange} id="races" name="races">
                        <option value={character.races} >Select your Race</option>
                        {allRaces}
                    </select>
                </div>
                <div>
                    <p>Class: </p>
                    <select onChange={handleChange} id="classes" name="classes">
                        <option value={character.classes}>Select your Class</option>
                        {allClasses}
                    </select>
                </div>  
                <div>
                    <p>Subclass: </p>
                    <select onChange={handleChange} id="subclasses" name="subclasses">
                        <option value={character.subclasses}>Select your Subclass</option>
                        {allSubclasses}
                    </select>
                </div>
                <div id="stats">
                    <div>
                        <p>Strength: </p>
                        <input onChange ={handleChange} value={character.strength} name="strength" id="strength" type="number" placeholder="Strength" />
                    </div>
                    <div>
                        <p>Dexterity: </p>
                        <input onChange ={handleChange} value={character.dexterity} name="dexterity" id="dexterity" type="number" placeholder="Dexterity" />
                    </div>
                    <div>
                        <p>Constitution: </p>
                        <input onChange ={handleChange} value={character.constitution} name="constitution" id="constitution" type="number" placeholder="Constitution" />
                    </div>
                    <div>
                        <p>Intelligence: </p>
                        <input onChange ={handleChange} value={character.intelligence} name="intelligence" id="intelligence" type="number" placeholder="Intelligence" />
                    </div>
                    <div>
                        <p>Wisdom: </p>
                        <input onChange ={handleChange} value={character.wisdom} name="wisdom" id="wisdom" type="number" placeholder="Wisdom" />
                    </div>
                    <div>
                        <p>Charisma: </p>
                        <input onChange ={handleChange} value={character.charisma} name="charisma" id="charisma" type="number" placeholder="Charisma" />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}