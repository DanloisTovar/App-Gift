import React from 'react';

// !proptypes:
import PropTypes from 'prop-types';

// !importar custom hooks:
import { useFetchGifts } from '../hooks';

// !importar componentes:
import { GiftItem } from './GiftItem';

export const GiftGrid = ({ categoria }) => {
    // !hooks:
    const { newImages, isLoading } = useFetchGifts(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {isLoading && (
                <p className="animate__animated animate__flash">Loading...</p>
            )}

            <div className="card-grid">
                {newImages.map((imagen) => (
                    <GiftItem key={imagen.id} {...imagen} />
                ))}
            </div>
        </>
    );
};

GiftGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
};
