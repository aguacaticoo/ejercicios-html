
import { useState } from 'react';

function Ejercicio3() {

    const [articulos, setArticulos] = useState([
        {
            nombre: 'Camiseta',
            precio: 20,
            cantidad: 2
        },
        {
            nombre: 'Pantalón',
            precio: 40,
            cantidad: 1
        },
        {
            nombre: 'Zapatos',
            precio: 60,
            cantidad: 1
        }
    ]);

    function eliminarultimafila() {
        if (articulos.length > 0) {
            const temp = Array.from(articulos);
            temp.pop();
            setArticulos(temp);
        }
    }

    return (
        <div>
            <h2>Lista de artículos</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    {articulos.map((articulo, index) => (
                        <tr key={index}>
                            <td>{articulo.nombre}</td>
                            <td>${articulo.precio}</td>
                            <td>{articulo.cantidad}</td>
                            <td>${articulo.precio * articulo.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <button onClick={eliminarultimafila}>
                Eliminar última fila
            </button>

        </div>
    );
}

export default Ejercicio3;
