//----Buenas practicas a la hora de evaluar Booleans

const autenticado = false;

if (autenticado) {
    console.log("Puedes ver Netflix");
} else {
    console.log("No puedes ver Netflix");
}


//operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No es autenticado');