
import { useState } from 'react';
import './App.css';

import Ejercicio1 from './ejercicios/ejercicio1';
import Ejercicio2 from './ejercicios/ejercicio2';
import Ejercicio3 from './ejercicios/ejercicio3';
import Ejercicio5 from './ejercicios/ejercicio5';
import Ejercicio6 from './ejercicios/ejercicio6';
import Ejercicio7 from './ejercicios/ejercicio7';
import Ejercicio8 from './ejercicios/ejercicio8';
import Ejercicio9 from './ejercicios/ejercicio9';
import Ejercicio10 from './ejercicios/ejercicio10';
import Ejercicio11 from './ejercicios/ejercicio11';
import Ejercicio12 from './ejercicios/ejercicio12';
import Ejercicio13 from './ejercicios/ejercicio13';

function App() {

    const [ejercicio, setEjercicio] = useState(0);

    const ejercicios = {
        1: Ejercicio1,
        2: Ejercicio2,
        3: Ejercicio3,
        5: Ejercicio5,
        6: Ejercicio6,
        7: Ejercicio7,
        8: Ejercicio8,
        9: Ejercicio9,
        10: Ejercicio10,
        11: Ejercicio11,
        12: Ejercicio12,
        13: Ejercicio13
    };

    const ComponenteActual = ejercicios[ejercicio];

    return (
        <div>
            <h1>Mis ejercicios de React</h1>

            <button onClick={() => setEjercicio(0)}>
                Inicio
            </button>

            {Object.keys(ejercicios).map((numero) => (
                <button
                    key={numero}
                    onClick={() => setEjercicio(Number(numero))}
                >
                    Ejercicio {numero}
                </button>
            ))}

            <hr />

            {ejercicio === 0 ? (
                <h2>Selecciona un ejercicio</h2>
            ) : (
                ComponenteActual && <ComponenteActual />
            )}

        </div>
    );
}

export default App;
