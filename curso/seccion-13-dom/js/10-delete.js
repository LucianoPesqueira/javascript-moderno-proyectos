// ----Eliminar elementos en el DOM----
const primerEnlace = document.querySelector("a");

console.log(primerEnlace);

//eliminar elemento
//primerEnlace.remove();

//desde el padre
navegacion = document.querySelector(".navegacion");

console.log(navegacion.children);

//eliminar un elemento hijo desde el padre
//navegacion.removeChild(navegacion.children[2]);
