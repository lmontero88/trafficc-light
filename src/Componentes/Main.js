import React, { useState } from 'react'
import Luces from './Luces'

function Main() {

    const [selected, setSelected] = useState([false, false, false]);

    const handleClick = (position) => {
        let newSelected = [false, false, false]
        newSelected[position] = true
        setSelected(newSelected)
    }


    return (
        <>
            <div className="contenedor">
                <div className="sosten-sema">
                </div>
                <div className="cuerpo-sema">
                    <Luces pos={0} color="red" active={selected[0]} handleClick={handleClick} />
                    <Luces pos={1} color="yellow" active={selected[1]} handleClick={handleClick} />
                    <Luces pos={2} color="green" active={selected[2]} handleClick={handleClick} />
                </div>
            </div>

        </>
    )
}

export default Main
