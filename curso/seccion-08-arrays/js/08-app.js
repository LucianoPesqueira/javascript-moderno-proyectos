//----forEach para iterar un array----


const carrito8 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


console.log("---------------carrito8 con for---------------");
for (let i = 0; i < carrito8.length; i++) {
    console.log(`${carrito8[i].nombre} - precio: ${carrito8[i].precio}`);
}

//para evitar tener que usar literales e indicarle para cada objeto el nombre y precio
//se usa array methods: forEach

console.log("---------------carrito8 con forEach---------------");
carrito8.forEach( function (producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})