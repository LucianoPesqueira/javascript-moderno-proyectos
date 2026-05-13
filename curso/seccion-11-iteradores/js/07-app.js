//----for ...of----


const pendientes2 = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];


pendientes2.forEach( (pendiente, indice) => {
    console.log(indice, pendiente);
})


const carrito7 = [
    { nombre : "Monitor 27 pulgadas", precio : 500},
    { nombre : "Television", precio : 250},
    { nombre : "Tablet", precio : 380, descuento: true},
    { nombre : "Celular", precio : 700},
    { nombre : "Teclado", precio : 200},
    { nombre : "Mouse", precio : 160}
];


for(let pendiente of pendientes2) {
    console.log(pendiente);
}

for (let producto of carrito7) {
    console.log(producto.nombre);
}

///----for ...in----

const automovil = {
    modelo : 'Camaro',
    year : 1969,
    motor : '6.0'
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
}