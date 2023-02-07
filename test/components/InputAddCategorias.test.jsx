import { render, screen, fireEvent } from '@testing-library/react';
import { InputAddCategorias } from '../../src/components/InputAddCategorias';

describe('Pruebas sobre imputAddCategory', () => {
    test('Debe cambiar el valor de la caja de texto ', () => {
        render(<InputAddCategorias onAddCategorias={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Goku' } });
        expect(input.value).toBe('Goku');
    });
});
