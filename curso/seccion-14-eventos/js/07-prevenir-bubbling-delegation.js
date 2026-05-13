// ----Prevenir Event Bubbling con Delegation----

const cardDiv2 = document.querySelector(".card");

cardDiv2.addEventListener("click", (e) => {
  //console.log(e.target);
  //console.log(e.target.classList);

  if (e.target.classList.contains("titulo")) {
    console.log("click en el titulo");
  }
  if (e.target.classList.contains("precio")) {
    console.log("click en el precio");
  }
  if (e.target.classList.contains("card")) {
    console.log("click en el card");
  }
});

//al mostrar e.target:
//si hago click en la imagen: <img src="img/hacer1.jpg">
//si hago click en un parrafo: <p class="categoria concierto">concierto</p>

//e.target.classList: saber cuales son las clases de los elementos al hacer click
