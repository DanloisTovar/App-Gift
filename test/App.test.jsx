import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Pruebas en el componente', () => {
    test('Prueba 1 ', () => {
        render(<App />);
    });

    test('Prueba 2 ', () => {
        render(<App />);

        const title = screen.getByText('App Gift');
        expect(title).toBe(title);
    });

    test('Prueba 3 ', () => {
        render(<App />);

        const title = screen.getByText('App Gift');
        expect(title).toBe(title);

        const input = screen.getByRole('textbox');
        expect(input).toBe(input);
    });
});
