import React from 'react';
import PropTypes from 'prop-types';
// !hooks:
import { useState } from 'react';

export const InputAddCategorias = ({ onAddCategorias }) => {
    // hooks:
    const [inputValue, setInputValue] = useState('');

    // !Funciones:
    const handleOnchange = ({ target }) => {
        // desestructura el event para que solo traiga el target " { target } "!!
        setInputValue(target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onAddCategorias(inputValue.trim());

        setInputValue('');
    };

    return (
        <form onSubmit={handleOnSubmit} aria-label="formulario">
            <br></br>
            <input
                type="text"
                value={inputValue}
                onChange={handleOnchange}
                onSubmit={handleOnSubmit}
                placeholder="Agregue la categoría a buscar..."
            />
            <br></br>
        </form>
    );
};

InputAddCategorias.propTypes = {
    onAddCategorias: PropTypes.func.isRequired,
};
