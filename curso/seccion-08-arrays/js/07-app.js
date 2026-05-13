//----Destructuring de Arrays----

const producto7 = {
    nombre : "Monitor 32 pulgadas",
    precio : 400,
    disponible : true
}


//destructuring
const { nombre } = producto7;

console.log(nombre);


//destructuring : crear la variable y extraer el valor con arreglos
//con arreglos puedo ponerle el nombre que yo quiera en objetos no!
const numeros = [10, 20, 30, 40, 50];

const [ , , num3 ] = numeros; //les coloco coma y elijo que valor sacar
//con spread operator:
const [ , num2, ...resto] = numeros;

console.log(num3);
console.log(resto);