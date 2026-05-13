//----.forEach y .map----


const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];


pendientes.forEach( (pendiente, indice) => {
    console.log(indice, pendiente);
})


const carrito6 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Tablet", precio : 380, descuento: true},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];

carrito6.forEach( producto =>  console.log(producto) )


