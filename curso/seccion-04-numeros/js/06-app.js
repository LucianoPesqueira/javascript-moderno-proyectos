//----Convertir strings a numeros----

const numero6_1 = "20";
const numero6_2 = "20.2";
const numero6_3 = "Uno";
const numero6_4 = 20;

console.log(Number.parseInt(numero6_1)); //si no puede convertir arroja NaN
console.log(Number(numero6_1)); //si no puede convertir arroja 0
console.log(Number.parseFloat(numero6_2));
console.log(Number.parseInt(numero6_3));

//revisar si es un numero entero
console.log(Number.isInteger(numero6_3));