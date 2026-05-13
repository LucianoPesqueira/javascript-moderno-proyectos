//----Parametros por defecto y argumentos en Funciones----

function sumar5(a, b) {
    console.log(a + b);
};

sumar5(2, 3);

sumar5(200, 85);

function saludar(nombre = 'Juan', apellido = 'Perez') {
    console.log(`Hola ${nombre} ${apellido}`);
}


saludar('Luciano', 'Pesqueira');