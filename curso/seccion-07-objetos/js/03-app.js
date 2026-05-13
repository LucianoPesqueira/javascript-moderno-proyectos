//----Agregar o Eliminar Propiedades de un objeto----

const producto3 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//agregar una propiedad luego de creado el objeto
producto3.imagen = "imagen.jpg";

//eliminar una propiedad del objeto
delete producto3.disponible;


console.log(producto3);


