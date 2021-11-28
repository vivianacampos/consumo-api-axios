import React from 'react'
import './Boton.scss'

const Boton = ({ titulo, onClick, type = "success" }) => {
    const STYLE = type === "success" ? "boton boton__success" : "boton boton__error"
    return (
        <div className="boton-container">
            <button className={STYLE} type="button" onClick={onClick}>{titulo}</button>
        </div>
    )
}

export default Boton