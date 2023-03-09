import React, {useContext}from "react";
import { UglyContext } from "./Uglycontext";


export default function Uglylist(props) {
    const {uglyDelete, thingsArray, uglyEdit, uglyEditInputs, editChange} = useContext(UglyContext)


    const things = thingsArray.map((post) => {
    return(
        <div className="thing">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <img src={post.imgUrl} alt=""></img>
            <div className="editForm">
                <form className="editInputs"
                    onSubmit={(e) => {
                    e.preventDefault()
                    uglyEdit(post._id)
                    }}>
                    <input placeholder="Title" name="title" value={uglyEditInputs.title} onChange={editChange}></input>
                    <input placeholder="Description" name="description" value={uglyEditInputs.description} onChange={editChange}></input>
                    <button>Submit</button>
                </form>
                <button className="deleteBtn" onClick={() => uglyDelete(post._id)}>Delete</button>
            </div>
        </div>
    )})
    return(
        <div className="uList">
            <h2>Here are your ugly things:</h2>
            <ul>{things}</ul>
        </div>
    )
}