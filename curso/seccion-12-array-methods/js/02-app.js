//---- .findIndex para encontrar la posicion en un array ----

let meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio'];

const carrito2 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];

//con forEach agregando otro parametro obtengo el indice
meses2.forEach( (mes, i) => {
    if (mes == 'Abril') {
        console.log(`El mes ${mes}, existe en el indice: ${i}`);
    }
});

//obtener el indice con findIndex()

const indice = meses2.findIndex( mes => mes == 'Abril');

console.log(indice);


//encontrar el indice de un arreglo de objetos

const indice2 = carrito2.findIndex( producto => producto.precio == 160);

console.log(indice2);