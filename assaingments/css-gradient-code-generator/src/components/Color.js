import React from "react"


export default function Color(props){

    // Color Canvas
    
    
    return(
    <div className="color">
        <img id="colorImg"></img> 
        <textarea className="cssCode" readOnly value={`background-image: linear-gradient(${props.angle.target.value}deg, ${props.color1}, ${props.color2})`}/>
    </div>
)
}