// !importar hooks:
import { useState, useEffect } from 'react';

// !import api-fetch:
import { getGifts } from '../helpers';

export const useFetchGifts = (categoria) => {
    const [newImages, setNewImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // tomar imagenes:
    const getImages = async () => {
        const newImages = await getGifts(categoria);
        setNewImages(newImages);
        setIsLoading(false);
    };

    // fetch: actualizar api con useEffect:

    useEffect(() => {
        getImages();
    }, []);
    return {
        newImages,
        isLoading,
    };
};
