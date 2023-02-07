import React from "react";

const Formulario = (props) => {
    const {inputs, setInputs} = props;

    const mensajeNombre = () => {
        if (inputs.firstName.length < 2 && inputs.firstName.length > 0) {
            return (
                <p className="error">
                    El Nombre debe tener al menos 2 caracteres
                </p>
            );
        }
    };

    const mensajeApellido = () => {
        if (inputs.lastName.length < 2 && inputs.lastName.length > 0) {
            return (
                <p className="error">
                    El Apellido debe tener al menos 2 caracteres
                </p>
            );
        }
    };

    const mensajeCorreo = () => {
        if (inputs.email.length < 5 && inputs.email.length > 0) {
            return (
                <p className="error">
                    El correo debe tener al menos 5 caracteres
                </p>
            );
        }
    };

    const mensajeLargoContra = () => {
        if (inputs.password.length < 8 && inputs.password.length > 0) {
            return (
                <p className="error">
                    La Contraseña debe tener al menos 8 caracteres
                </p>
            );
        }
    };

    const mensajeCoincidencia = () => {
        if (inputs.password !== inputs.confirmPassword) {
            return (
                <p className="error">
                    Las contraseñas deben coincidir
                </p>
            );
        }
    };

    


    const onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    return (
        
            <form className="formulario">
                <fieldset className="campo">
                    <label htmlFor="first-name">Nombre:</label>
                    <input type="text" name="firstName" onChange={onChange} /> 
                </fieldset>
                {mensajeNombre()}
                <fieldset className="campo">
                    <label htmlFor="last-name">Apellido: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                </fieldset>
                {mensajeApellido()}
                <fieldset className="campo">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name="email" onChange={onChange} />
                </fieldset>
                {mensajeCorreo()}
                <fieldset className="campo">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" onChange={onChange} />
                </fieldset>
                {mensajeLargoContra()}
                <fieldset className="campo">
                    <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                    <input type="password" name="confirmPassword" onChange={onChange} />
                </fieldset>
                {mensajeCoincidencia()}
            </form>
            
    );
};

export default Formulario;