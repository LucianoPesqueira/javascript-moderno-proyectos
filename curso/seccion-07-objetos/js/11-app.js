//----Funciones en Objetos y Acceder a sus valores

const producto11 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        //this: hace referencia al objeto actual
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto11_1 = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        //this: hace referencia al objeto actual
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}


producto11.mostrarInfo();
producto11_1.mostrarInfo();