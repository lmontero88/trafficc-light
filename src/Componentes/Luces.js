import React, {useState} from 'react'


function Luces(props) {
   
    return (
        <div className={`circle ${props.color} ${props.active && 'selected'}`} onClick={() => props.handleClick(props.pos)}>
        </div>
    )
}

export default Luces
