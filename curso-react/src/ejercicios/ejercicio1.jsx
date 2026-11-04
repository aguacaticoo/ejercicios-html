import React from 'react'


function realizarOperacion(e) {
    e.preventDefault();

    const v1 = parseInt(e.target.v1.value);
    const v2 = parseInt(e.target.v2.value);

    const suma = v1 + v2;

    alert(`El resultado de la suma es: ${suma}`);
}

function Ejercicio1() {
    return (
        <div>
            <form onSubmit={realizarOperacion}>
                <p>Ingrese el primer valor:</p>
                <input type="number" name="v1" required />

                <p>Ingrese el segundo valor:</p>
                <input type="number" name="v2" required />

                <button type="submit">Sumar</button>
            </form>
        </div>
    );
}

export default Ejercicio1;

