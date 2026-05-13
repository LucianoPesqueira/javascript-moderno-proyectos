// ---- Traversing the DOM ----

navegacion = document.querySelector(".navegacion");

console.log(navegacion);

//trae los elementos que si hay espacios en blanco tambien(saltos de linea)
console.log(navegacion.childNodes);

//solo lista los elementos reales, no los espacios en blanco
console.log(navegacion.children);

console.log(navegacion.children[0]);

console.log(navegacion.children[0].nodeName); //me indica que es una etiqueta A
console.log(navegacion.children[0].nodeType); // me retorna un 1 que es de tipo elemento

//Traversing en un card

card = document.querySelector(".card"); //<div class="card">

//cambio texto de la imagen 2
card.children[1].children[1].textContent =
  "Nuevo heading desde traversing de DOM";

console.log(card.children[1].children[1].textContent);

//cambiar la imagen
card.children[0].src = "img/hacer3.jpg";
console.log(card.children[0]);

//navegar desde los hijos hacia el padre
console.log(card.parentNode); //<div class="contenedor-cards">

//como los Node toman espacio en blanco, se recomienda usar parentElement verifica por elementos validos
console.log(card.parentElement);

//si hago otro parentElement se va hasta el section
console.log(card.parentElement.parentElement);

//si tengo varios cards se consideran hermanos y si quiero recorrer entre hermanos:
console.log(card.nextElementSibling);

//ir al elemento previo
const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard);

//seleccionar el primer elemento de la navegacion
console.log(navegacion.firstElementChild); //me trae el primer enlace
console.log(navegacion.lastElementChild); //ultimo enlace
