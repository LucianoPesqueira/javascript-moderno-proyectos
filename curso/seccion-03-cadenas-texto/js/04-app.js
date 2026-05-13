//---- Cortar espacios en blanco de un String ----

const product4 = '                       Monitor de 20 Pulgadas                 ';

console.log(product4);
console.log(product4.length);

//eliminar los espacios
//al principio
console.log(product4.trimStart());

//al final
console.log(product4.trimEnd());

//forma de eliminar los espacios de forma clasica
console.log(product4.trim());

//utilizar los metodos en forma encadenada "chainning"
console.log(product4.trimStart().trimEnd());