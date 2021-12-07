import './Select.css'
import React from "react";
export const Select = ({data, event}) => {

    return(
        <>
        <select name="option" id="select" onChange={event}>
            <option value="one">Select a character</option>
            <option value="all">Select all characters</option>
            {
                data.map(element => (
                    <option key={element.id} value={element.id}>{element.name}</option>
                ))
            }
        </select>
        </>
    )
}