import './Select.css'
import React from "react";
export const Select = ({data, event}) => {

    return(
        <>
        <select name="option" onChange={event}>
            <option key="one" value="one">Select a character</option>
            <option key="all" value="all">Select all characters</option>
            {
                data.map(element => (
                    <option key={element.id} value={element.name}>{element.name}</option>
                ))
            }
        </select>
        </>
    )
}