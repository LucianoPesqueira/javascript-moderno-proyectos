//---- Evento submit a un formulario ----
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e);
});

//para evitar que ejecuta la accion por default del boton submit(action=/buscador, method=post),
//se usa preventDefault();

//e.target.method: para conocer el metodo del boton
//e.target.action: para saber la accion

//usando la declaracion de funcion en vez de func anonima
//con preventDefault(): me permite que no envie los datos mediante POST o GET y poder realizar las validaciones correspondientes
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  console.log("Consultar una API");

  console.log(e.target.action); //http://127.0.0.1:5500/buscador
}
