//----Crear strings----

const producto = 'Monitor de 20 pulgadas"'; //primera forma de crear un string
const producto2 = "Monitor de 20 pulgadas\"";//se conoce como escapar comillas con la barra invertida

//segunda forma, utiliza el constructor String(), que se usa para convertir otros tipos de datos
const producto3 = String('Monitor de 24"'); 

//tercer forma, utilizando el constructor new String(), crea un objeto string
const producto4 = new String("Monitor de 27 pulgadas"); //tercer forma

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);