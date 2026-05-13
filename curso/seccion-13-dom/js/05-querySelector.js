// ---- query selector ----

//forma mas nueva y mas utilizada
let card = document.querySelector(".card");

console.log(card);

//podemos tener selectores especificos como en class
let info = document.querySelector(".premium .info");

console.log(info);

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)",
);

console.log(segundoCard);

//seleccionar el formulario que tiene id
const formulario2 = document.querySelector(".contenido-hero #formulario");
console.log(formulario2);

//seleccionar elementos HTML
let navegacion = document.querySelector("nav");

console.log(navegacion);
