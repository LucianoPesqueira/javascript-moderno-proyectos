//----Objetos dentro de Objetos----

const producto5 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}


console.log(producto5);

//acceder a las propiedades del objeto informacion dentro del objeto producto5:

console.log(producto5.informacion.medidas.peso);

//acceder a pais
console.log(producto5.informacion.fabricacion.pais);