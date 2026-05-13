// ---Generar HTML----
const enlace = document.createElement("A"); //creo un enlace

//agregandole el texto
enlace.textContent = "Nuevo Enlace";

//añadiendo href
enlace.href = "/nuevo-enlace";

//agregarle un target
enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace");

enlace.classList.add("alguna-clase");

enlace.onclick = miFuncion;

console.log(enlace);

//selecciono la navegacion donde voy a querer agregar el enlace creado
navegacion = document.querySelector(".navegacion");

//navegacion.appendChild(enlace); //agrega el nuevo enlace al final

//agregar el elemento despues de otro enlace
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]); //inserto enlace entre vender y ayuda

function miFuncion() {
  alert("click");
}

//crear un nuevo card

const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("P");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//crear div con la clase info
info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.classList.add("img-fluid");
imagen.alt = "Texto alternativo";

//crear el card
card = document.createElement("div");
card.classList.add("card");

//asignar la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");

contenedor.appendChild(card); //lo inserto al final
//contenedor.insertBefore(card, contenedor.children[0]); lo inserto al inicio

console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);
console.log(info);
console.log(imagen);
console.log(card);
