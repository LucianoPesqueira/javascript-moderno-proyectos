//---- .find ----

const carrito5 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 27 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


//con forEach
let resultado5 = 0;

carrito5.forEach( (producto, index) => {
    if (producto.nombre === 'Celular') {
        resultado5 = carrito5[index];
    }
})

console.log(resultado5);

//con find: crea un nuevo arreglo y trae el primer resultado

const resultado6 = carrito5.find( producto => producto.nombre === 'Monitor 27 pulgadas');

console.log(resultado6);