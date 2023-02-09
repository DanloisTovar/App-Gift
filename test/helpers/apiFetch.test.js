import { getGifts } from '../../src/helpers';

describe('Pruebas en getGifts', () => {
    test('debe de rtornar un arreglo de gits ', async () => {
        const gifts = await getGifts('Goku');

        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
