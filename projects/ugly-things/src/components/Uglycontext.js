import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UglyContext = React.createContext()

function UglyContextProvider(props){
    const [uglyEditInputs, setUglyEditInputs] = useState({title:"", description:""})
    const [thingsArray, setThingsArray] = useState([]);
    const url = 'https://api.vschool.io/conradrhoades/thing'

    //get function
    useEffect(()=>{
        axios.get(`${url}`)
        .then(res => {
            setThingsArray(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const updateContent = () => {
        axios.get(`${url}`)
        .then(res => {
            setThingsArray(res.data)
        })
        .catch(err => console.log(err))
    }

    //delele function
    const uglyDelete = (id)=> {
        axios.delete(`${url}/${id}`)
            .then(response => setThingsArray(prevThingsArray => {
                return prevThingsArray.filter(thing => thing._id !== id)
            })
        )
        .catch(error => console.log(error.response.data))
    }

    //edit function

    function editChange(event) {
        setUglyEditInputs((prevInput) => {
        return {
            ...prevInput,
            [event.target.name]: event.target.value,
        };
        });
    }
    const uglyEdit = (id)=> {
        const updates = {
            title: uglyEditInputs.title,
            description: uglyEditInputs.description
        }
        console.log("uglyEdit updates", `${url}/${id}`)
        axios.put(`${url}/${id}`, updates)
        .then(response => {
            console.log(response.data)
            updateContent()
        })
        .catch(err => console.log(err))
        setUglyEditInputs({
            title:"",
            description:"",
    })
    }

    return(
        <UglyContext.Provider value={{
            //this is the infromation we are providing from our context
            thingsArray, setThingsArray, uglyDelete, uglyEdit, uglyEditInputs, editChange
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}