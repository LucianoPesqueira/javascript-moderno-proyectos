// ----Que es el Event Bubbling----

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

// cardDiv.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en card");
// });

// infoDiv.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en info");
// });

// titulo.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click en titulo");
// });

//es cuando hago click en info y se ejecuta tambien card, que es el elemento padre
//si hago click en el titulo se disparan los 3 eventos

//con e.stopPropagation(); evito esa propagacion hacia los otros elementos
