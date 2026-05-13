//----String Methods - Repeat y Split

const product6 = 'Monitor de 20 Pulgadas';

// .repeat permite repetir una cadena de texto
const texto = ' en Promoción'.repeat(3);

console.log(texto);

console.log(`${product6} ${texto} !!!`);

//.split permite dividir un string, especificando un separador, que me retorna un array de los elementos de ese string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = 'Aprendiendo JavaScript #JSModernoConJuan';
console.log(tweet.split('#'));