import React from "react";
import InputColor from 'react-input-color'

export default function Options(props) {
    return(
        <div className="option">
            <InputColor
                id="opt1"
                initialValue="#FF0000"
                onChange={props.setColor1}
                placement="right"
            />

            <InputColor
                id="opt2"
                initialValue="#FFFF00"
                onChange={props.setColor2}
                placement="right"
            />
            <input className="angle" type="number" onChange={props.setAngle}></input>
        </div>
    )
}