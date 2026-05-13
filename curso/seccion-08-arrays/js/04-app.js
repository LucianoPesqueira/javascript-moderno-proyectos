//----Agregar nuevos valores----

const meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//puedo agregarlo de esta forma, pero necesito saber la posicion para no sobreescribir ningun valor
//meses3[7] = "nuevo mes"


//forma correcta, siempre agrega al final
meses3.push("Julio");
meses3.push("Agosto");

console.table(meses3);

//ejemplo con carrito

const carrito = [];


//definir producto
const producto = {
    nombre : "Monitor 32 pulgadas",
    precio : 400
}

const producto2 = {
    nombre : "Celular Motorola",
    precio : 750
}

const producto3 = {
    nombre : "teclado",
    precio : 150
}

carrito.push(producto);
carrito.push(producto2);

//agregar un nuevo valor al principio
carrito.unshift(producto3);



console.table(carrito);