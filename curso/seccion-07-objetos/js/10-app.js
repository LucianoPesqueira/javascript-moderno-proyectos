//----Copiar 2 objetos----

const producto10 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas10 = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto10);
console.log(medidas10);

//copiar 2 objetos
const resultado = Object.assign(producto10, medidas10);

//Spread Operator o Rest Operator
const resultado2 = { ...producto10, ...medidas10 }

console.log(resultado);
console.log(resultado2);