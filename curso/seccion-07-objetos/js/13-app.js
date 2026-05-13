//----Object .keys, .values y .entries----

const producto13 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//obtener las llaves de un objeto
console.log(Object.keys( producto13 ));

//obtener values
console.log(Object.values( producto13 ));

//retorna pares llaves-valor
console.log(Object.entries( producto13 ));