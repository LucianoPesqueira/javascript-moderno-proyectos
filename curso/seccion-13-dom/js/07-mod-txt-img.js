// ---- Modificar textos o imagenes con js ----
let encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//innerText no va a mostrar el texto si tiene la propiedad visibility:hidden en cambio textContent si
console.log(encabezado.innerText); //Encuentra hospedaje para tus próximas vacaciones
console.log(encabezado.textContent); //Encuentra  hospedaje para tus próximas vacaciones
console.log(encabezado.innerHTML); //Encuentra <span> hospedaje </span>para tus próximas vacaciones

//de esta forma me trae el contenido del texto directamente
encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

//cambiar el texto
document.querySelector(".contenido-hero h1").textContent = "Nuevo Heading";

//acceder a una imagen
let imagen = document.querySelector(".card img");
console.log(imagen);

imagen.src = "img/hacer2.jpg"; //cambio la imagen
