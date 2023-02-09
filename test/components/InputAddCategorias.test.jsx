import { render, screen, fireEvent } from '@testing-library/react';
import { InputAddCategorias } from '../../src/components/InputAddCategorias';

describe('Pruebas sobre imputAddCategory', () => {
    test('Debe cambiar el valor de la caja de texto ', () => {
        render(<InputAddCategorias onAddCategorias={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Goku' } });
        expect(input.value).toBe('Goku');
    });

    test('Debe de llamar a onAddCategorias y si el input tiene algun valor ', () => {
        const inputValue = 'Guku';
        const onAddCategorias = jest.fn();
        render(<InputAddCategorias onAddCategorias={onAddCategorias} />);
        const input = screen.getByRole('textbox');
        const formulario = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(formulario);

        expect(input.value).toBe('');

        expect(onAddCategorias).toHaveBeenCalled();
        expect(onAddCategorias).toHaveBeenCalledTimes(1);
        expect(onAddCategorias).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar a onAddCategorias si el input esta vacio ', () => {
        const inputValue = '';
        const onAddCategorias = jest.fn();
        render(<InputAddCategorias onAddCategorias={onAddCategorias} />);
        const input = screen.getByRole('textbox');
        const formulario = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(formulario);

        expect(input.value).toBe('');

        expect(onAddCategorias).toHaveBeenCalledTimes(0);
        expect(onAddCategorias).not.toHaveBeenCalled();
    });
});
