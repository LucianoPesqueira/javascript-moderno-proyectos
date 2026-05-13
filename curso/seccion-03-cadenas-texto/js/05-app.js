//----String Methods-Replace, Slice y Substring

const product5 = 'Monitor de 20 Pulgadas';

//replace
console.log(product5.replace('Pulgadas', '"'));
console.log(product5.replace('Monitor', 'Monitor Curvo'));


//slice: cortar cadena de texto
console.log(product5.slice(0, 10));
console.log(product5.slice(8));
console.log(product5.slice(2, 1));//si el primer numero es mayor no muestra nada

//alternativa a slice
console.log(product5.substring(0, 10));
console.log(product5.substring(2, 1));//a diferencia de slice, invierte los numeros para mostrar un valor


//mostrar solo la primera letra, como ej: hace google al mostrar el usuario
const usuario = 'Juan';

console.log(usuario.substring(0,1));//retorna la letra dentro de rango ingresado
console.log(usuario.charAt(0)); //retorna la letra pasando el indice exacto donde se encuentra