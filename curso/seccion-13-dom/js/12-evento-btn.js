// ----Ejemplo mas avanzado de lo que se puede hacer con js----

const btnFlotante = document.querySelector(".btn-flotante");

const footer = document.querySelector(".footer");

//evento con arrow function
// btnFlotante.addEventListener("click", () => {
//   console.log("click en el boton, anonima");
// });

btnFlotante.addEventListener("click", mostrarOcultarFooter);

//evento con funcion declarada
// function mostrarOcultarFooter() {
//   console.log("click en el boton");
// }

function mostrarOcultarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    //hace referencia al boton, ya que es la funcion que se ejecuta cuando lo manda a llamar
    this.classList.remove("activo");
    this.textContent = "Idioma y Moneda";
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = "Cerrar";
  }
}
