//----break y continue; en un for loop----


for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log('CINCO');
        continue;
    }
    console.log(`Numero ${i}`);
}


const carrito2 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Tablet", precio : 380, descuento: true},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];

for (let i = 0; i < carrito2.length; i++) {
    if (carrito2[i].descuento) {
        console.log(`El articulo ${carrito2[i].nombre} tiene descuento`);
    }
    console.log(carrito2[i]. nombre);
}