import React from "react";

const Resultado = (props) => {
    const {data} = props;

    return (
        <>
            <h1>Datos del Formulario</h1>
            <p>Nombre: {data.firstName}</p>
            <p>Apellido: {data.lastName}</p>
            <p>Correo: {data.email}</p>
            <p>Contraseña: {data.password}</p>
            <p>Confirmar Contraseña: {data.confirmPassword}</p>
        </>
    );
}

export default Resultado;