import React, { Fragment, useState, useEffect } from "react"
import Boton from '../../components/Boton/Boton'
import Personas from "../../components/Personas/Personas";
import { getPersonas } from "../../services/personasServices";
import './Form.scss';

const Form = () => {
    const TITULO = "Formulario Personas"
    const BOTONBUSCAR = "Buscar"
    const BOTONBORRAR = "Borrar"
    const MENSAJEFINAL = "No hay data para mostrar"

    const [personas, setPersonas] = useState([])
    const [mensaje, setMensaje] = useState("")

    useEffect(() => {
        personas.length == 0 ? setMensaje(MENSAJEFINAL) : setMensaje("")

    }, [personas])

    const traerListadoPersonas = () => {
        getPersonas().then(persona => setPersonas(persona.data))
    }

    const limpiarPersonas = () => {
        setPersonas([])
    }

    return (
        <div className="contenedor-form">
            <div className="title">{TITULO}</div>
            {personas.length > 7 && personas.map(p => <Personas persona={p} />)}
            {mensaje}
            <div className="boton">
                <Boton
                    titulo={BOTONBUSCAR}
                    onClick={traerListadoPersonas}
                />
            </div>

            <div className="boton">
                <Boton
                    titulo={BOTONBORRAR}
                    onClick={limpiarPersonas}
                    type="error"
                />
            </div>
        </div>
    );
};

export default Form
