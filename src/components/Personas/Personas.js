import React from 'react';
import '../Personas/Personas.scss'

const Personas = ({ persona }) => {
    const { name, email, phone } = persona

    return (
        <>
            <div className="personas-container">
                <div className="nombre">Nombre: {name}</div>
                <div>Email: {email}</div>
                <div>Teléfono: {phone}</div>
            </div>
        </>
    );
}

export default Personas;