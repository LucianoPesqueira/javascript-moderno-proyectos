// ---- Cambiando el CSS con JavaScript ----

encabezado = document.querySelector("h1");

console.log(encabezado.style);

//ejemplo justify-content en css, en js es justifyContent
//background-color -> backgroundColor

encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase";

card = document.querySelector(".card");

console.log(card.classList);

//agregar una nueva clase
card.classList.add("nueva-clase", "segunda-clase");

card.classList.remove("card");
