import React from 'react';

// !componetes:
import { GiftGrid, InputAddCategorias } from './components';

// ! Hooks:
import { useState } from 'react';

function App() {
    // !hooks:
    const [categorias, setCategorias] = useState(['Nasa']); //img predeterminada al inicio

    const agragarCategoria = (nuevaCategoria) => {
        /* setCategorias([...categorias, 'Dragon Slayer']); */

        if (categorias.includes(nuevaCategoria)) return;
        /* ultimo elemento en entrar primero en mostrar: */
        setCategorias([nuevaCategoria, ...categorias]);
        /* setCategorias((categorias) => [...categorias, nuevaCategoria]); */
    };
    return (
        <div className="App">
            {/* titulo */}
            <h1>App Gift</h1>

            {/* metodo de entrada (input) */}
            <InputAddCategorias onAddCategorias={agragarCategoria} />

            {/* lista de items */}
            {categorias.map((categoria) => (
                <GiftGrid key={categoria} categoria={categoria} />
            ))}

            {/* footer */}
        </div>
    );
}

export default App;
