import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifts } from '../../src/hooks';

describe('Pruebas en el hook useFetchGifts', () => {
    test('Debe regresar el estado inicial ', () => {
        const { result } = renderHook(() => useFetchGifts('Dragon ball'));
        const { newImages, isLoading } = result.current;

        expect(newImages.length).toBe(0);
        expect(newImages).toEqual([]);
        expect(isLoading).toBeTruthy();
    });

    test('Debe regresar arreglo de imagenes y  el isLoading en fasle ', async () => {
        const { result } = renderHook(() => useFetchGifts('Dragon ball'));

        await waitFor(() => {
            () => expect(result.current.newImages.length).toBeGreaterThan(0);
            () => expect(result.current.isLoading).toBeFalsy();

            // !otra forma:
            const { newImages, isLoading } = result.current;
            expect(newImages.length).toBeGreaterThan(0);
            expect(isLoading).toBeFalsy();
        });
    });
});
