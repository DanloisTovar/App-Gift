import { render, screen } from '@testing-library/react';
import { GiftItem } from '../../src/components/GiftItem';

describe('Prueba de funcionamiento jest', () => {
    test(' verificar PropTypes y hacer snapshot ', () => {
        const title = 'Hola Mundo';
        const url = 'https://localhost:3000';
        const { container } = render(<GiftItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostar la imagen con el URL y el ALT indicado', () => {
        const title = 'Hola Mundo';
        const url = 'https://localhost:3000/';

        render(<GiftItem title={title} url={url} />);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(src);
        expect(alt).toBe(alt);
    });

    test('Debe de mostrar el titulo en el componente ', () => {
        const title = 'Hola Mundo';
        const url = 'https://localhost:3000/';

        render(<GiftItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});
