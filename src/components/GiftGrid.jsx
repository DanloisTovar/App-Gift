import React from 'react';

// import api:
import { getGifts } from '../helpers/apiFethc';

// llamando a la api:

export const GiftGrid = ({ categoria }) => {
    // fethc:
    getGifts(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            <p>Hola Mundo</p>
        </>
    );
};
