import { render, screen } from '@testing-library/react';
import { GiftGrid } from '../../src/components/GiftGrid';
import { useFetchGifts } from '../../src/hooks';

// !mockear el custom hook:
jest.mock('../../src/hooks/useFetchGifts');

describe('Testing a GiftGrid', () => {
    const categoria = 'Dragon ball';

    test('Debe de mostrear el loading ', () => {
        // !mockear el custom hook:
        useFetchGifts.mockReturnValue({
            newImages: [],
            isLoading: true,
        });

        render(<GiftGrid categoria={categoria} />);
        const loading = screen.getByText('Loading...');
        const categorias = screen.getByText(categoria);

        expect(categorias).toBeTruthy();
        expect(loading).toBeTruthy();
    });

    test('Debe mostrar items cuando se cargan las imagenes mediante el useFetch ', () => {
        const gifts = [
            {
                id: 'Wdaasass101222FFff0123',
                title: 'Goku',
                url: 'http://localhost/Goku.jpg',
            },
            {
                id: 'Wdaasass101222FFff01235',
                title: 'Vegeta',
                url: 'http://localhost/Vegeta.jpg',
            },
            {
                id: 'Wdaasass101222FFff01236',
                title: 'Gohan',
                url: 'http://localhost/Gohan.jpg',
            },
        ];
        // !mockear el custom hook:
        useFetchGifts.mockReturnValue({
            newImages: gifts,
            isLoading: false,
        });

        render(<GiftGrid categoria={categoria} />);

        expect(screen.getAllByRole('img').length).toBe(3);
    });
});
