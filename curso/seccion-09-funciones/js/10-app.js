//----Las ventajas de arrow function----

const aprendiendo10 = function (lenguaje, lenguaje2) {
    console.log(`Aprendiendo ${lenguaje} y ${lenguaje2}`);
}
aprendiendo10("ReactJS", 'NodeJS');

//arrow function, si es de una sola linea no es necesaria las llaves y el return
//y si lleva solo un parametros no es necesario los parentesis
const aprendiendo11 = lenguaje => console.log(`Aprendiendo ${lenguaje}`);

//funcion flecha sin llaves y sin return
const aprendiendo12 = (lenguaje, lenguaje2) => `Aprendiendo ${lenguaje} y ${lenguaje2}`;


aprendiendo11("ReactJs");
console.log(aprendiendo12("ReactJs", "NodeJS"));



