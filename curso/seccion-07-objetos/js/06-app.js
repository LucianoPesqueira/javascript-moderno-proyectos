//----Destructuring de Objetos Anidados----

const producto6 = {
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

console.log(producto6);

//obtener las propiedades del objeto medidas del objeto anidado
const { peso, medida } = producto6.informacion.medidas;

console.log(medida);

const { disponible, informacion, informacion: { medidas } } = producto6;

console.log(informacion);
console.log(medidas);