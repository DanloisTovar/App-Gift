import React from 'react';
// ! Hooks:
import { useState } from 'react';

function App() {
    const [categorias, setCategorias] = useState(['One Punch', 'Dragon Ball']);
    console.log(categorias);

    const agragarCategoria = () => {
        /* setCategorias([...categorias, 'Dragon Slayer']); */

        /* ultimo elemento en entrar primero en mostrar: */
        setCategorias(['Dragon Slayer', ...categorias]);
        /* setCategorias((categorias) => [...categorias, 'Dragon Slayer']); */
    };
    return (
        <div className="App">
            {/* titulo */}
            <h1>App Gift</h1>
            {/* metodo de entrada (input) */}

            {/* lista de items */}

            <button onClick={agragarCategoria}>Agregar</button>

            <ol>
                {categorias.map((categoria, i) => {
                    return (
                        <div key={i}>
                            <li>{categoria}</li>
                            <br />
                        </div>
                    );
                })}
            </ol>

            {/* item */}

            {/* footer */}
        </div>
    );
}

export default App;
