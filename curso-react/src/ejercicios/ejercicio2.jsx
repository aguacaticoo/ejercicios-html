
import { useState } from 'react';

export default function Ejercicio2() {

    const [numeros, setNumeros] = useState([]);

    function generaraleatorio() {
        const vector = new Array(10);

        for (let i = 0; i < vector.length; i++) {
            vector[i] = Math.floor(Math.random() * 100);
        }

        setNumeros(vector);
    }

    return (
        <div>
            <h2>Números aleatorios</h2>

            <p>Los números aleatorios son: {numeros.join(', ')}</p>

            <button onClick={generaraleatorio}>
                Generar números aleatorios
            </button>
        </div>
    );
}
