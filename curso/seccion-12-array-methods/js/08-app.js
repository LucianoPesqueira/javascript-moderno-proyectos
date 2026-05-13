//---- Spread Operator ----

meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio"];

carrito = [
  { nombre: "Monitor 27 pulgadas", precio: 500 },
  { nombre: "Television", precio: 250 },
  { nombre: "Monitor 24 pulgadas", precio: 380 },
  { nombre: "Celular", precio: 700 },
  { nombre: "Teclado", precio: 200 },
  { nombre: "Mouse", precio: 160 },
];

//Spread Operator: crea una copia del array original
const meses8 = [...meses, "Agosto"];

console.log(meses8);

//Spread Operator con array de objetos
const carritoSpread = [...carrito, { nombre: "Webcam", precio: 230 }];

console.log(carritoSpread);
