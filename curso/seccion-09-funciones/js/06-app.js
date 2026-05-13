//----Como se comunican las funciones----

iniciarApp();


function iniciarApp() {
    console.log('Iniciando App....');

    segundaApp();
}

function segundaApp() {
    console.log('Desde la seguna funcion');

    usuarioAuth('Matias');
}

function usuarioAuth(usuario) {
    console.log('Autenticano usuario, espere...');
    console.log(`Usuario autenticao correctamente, ${usuario}`);
}