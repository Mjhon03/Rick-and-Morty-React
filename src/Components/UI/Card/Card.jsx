import './Card.css'
import React from 'react'

export const Card = ({data})=>{
    
    
    return(
        <>
        {
            data.map(element => (
                <>
                    <div className='cards'>
                    <img src={element.image} alt={element.name} className="cardImg" />
                    <h2 className="cardName">{element.name}</h2>
                    </div>
                </>
            ))
        }
        </>
    )
}