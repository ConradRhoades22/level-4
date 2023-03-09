import React, {useContext}from "react";
import axios from 'axios'
import { UglyContext } from "./Uglycontext";

export default function Inputs(props) {
    const {setThingsArray} = useContext(UglyContext)
    const url = 'https://api.vschool.io/conradrhoades/thing/'
    const [uglyInput, setUglyInput] = React.useState({
        title:"",
        description:"",
        imgUrl: ""
    })
    

    function eChange(event) {
        setUglyInput((prevInput) => {
        return {
            ...prevInput,
            [event.target.name]: event.target.value,
        };
        });
    }

    function handleSubmit(event) {
        event.preventDefault()
        let newThing = {
            title: uglyInput.title,
            imgUrl: uglyInput.imgUrl,
            description: uglyInput.description
        }
        axios.post(`${url}`, newThing)
        .then(response => {
            console.log(response.data)
            setThingsArray(prev => (
            [
            ...prev, response.data
            ]))
        })
        .catch(error => console.log(error.response.data))
        setUglyInput ({
            title:"",
            description:"",
            imgUrl: ""
        })
    }
    return(
        <div className="head">
            <header>
                <h1>Ugly Things API</h1>
                <h2>Submit some ugly things here:</h2>
            </header>
            <form className="thing">
                <input type="text" placeholder="Title" name="title" value={uglyInput.title} onChange={eChange}/>
                <input type="text" placeholder="Img URL" name="imgUrl" value={uglyInput.imgUrl} onChange={eChange}/>
                <input type="text" placeholder="Description" name="description" value={uglyInput.description} onChange={eChange}/>
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}