import React from "react";

const Formulario = (props) => {
    const {inputs, setInputs} = props;
    const onChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <form className="formulario">
                <fieldset className="campo">
                    <label htmlFor="first-name">Nombre:</label>
                    <input type="text" name="firstName" onChange={onChange} />
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="last-name">Apellido: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" name="email" onChange={onChange} />
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" onChange={onChange} />
                </fieldset>
                <fieldset className="campo">
                    <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                    <input type="password" name="confirmPassword" onChange={onChange} />
                </fieldset>

            </form>
        </>
    );
};

export default Formulario;