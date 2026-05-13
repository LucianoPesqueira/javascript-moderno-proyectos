//----Detener la ejecucion de un if con una funcion----

let autenticado = true;


if(autenticado) {
    console.log('El usuario esta autenticado')
}

puntaje = 500;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente');
        return;
    } 

    if(puntaje > 300) {
        console.log('Buen puntaje, felicidades');
        return;
    }
}


revisarPuntaje();
