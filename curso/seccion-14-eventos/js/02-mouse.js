//---- Eventos que ocurren con el mouse ----

const nav = document.querySelector(".navegacion");

//registrar un evento
nav.addEventListener("click", () => {
  console.log("click");
});

//cuando me coloco sobre la navegacion
nav.addEventListener("mouseenter", () => {
  console.log("entrando a la navegacion");
  //nav.style.backgroundColor = "white";
});

//saliendo de la navegacion
// nav.addEventListener("mouseout", () => {
//   console.log("saliendo a la navegacion");
//   nav.style.backgroundColor = "transparent";
// });

//mousedown: parecido a click
//dblclick: doble click
