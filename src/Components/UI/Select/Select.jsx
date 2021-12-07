import './Select.css'
import React from "react";
export const Select = ({data}) => {

    return(
        <>
        <select name="option" id="select">
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