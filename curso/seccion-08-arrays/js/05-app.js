//----Crear un nuevo arreglo con spread operator----

const carrito5 = [];


//definir producto
const product = {
    nombre : "Monitor 32 pulgadas",
    precio : 400
}

const product2 = {
    nombre : "Celular Motorola",
    precio : 750
}

const product3 = {
    nombre : "teclado",
    precio : 150
}

let resultado;
//realiza una "copia" del carrito y añade los productos
resultado = [...carrito5, product, product2, product3];



console.table(resultado);