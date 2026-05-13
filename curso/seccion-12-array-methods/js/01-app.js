//---- .some ----

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio'];

let carrito = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Monitor 24 pulgadas", precio : 380},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


//comprobar si un valor existe en un arreglo con forEach e includes

meses.forEach( mes => {
    if(mes == 'Enero') {
        console.log('Si existe');
    }
})

//includes: funciona en un array que solo tiene un indice o un valor basado en el indice
const resultado = meses.includes('Enero');

console.log(resultado);

//revisar si un valor existe en un arrays de objetos, includes no funciona, se usa some

const existe = carrito.some( producto => producto.nombre == 'Celular');


console.log(existe);

//en un arreglo tradicional

const existe2 = meses.some( mes => mes == 'Abril');

console.log(existe2);