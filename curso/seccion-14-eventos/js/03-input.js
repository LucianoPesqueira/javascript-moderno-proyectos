//---- Eventos sobre inputs ----
const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("keydown", () => {
  console.log("escribiendo...");
});

//keydown: se activa inmediatamente al presionar la tecla, (incluso si se mantiene presionada)
//keyup: se activa al soltar la tecla

//copy: se activa cuando realizo la accion de copiar(ctrl + c)
//paste: cuando pego algo
//cut: cuando corto

//input: es como si fuera un todo en uno(escucha todo lo que sucede en el input)

//saber que es lo que esta escribiendo el usuario:
//me muestra todo sobre el input al momento de interactuar con el
busqueda.addEventListener("input", (e) => {
  console.log(e);
});
//e.type: me muestra que tipo de elemento es
//e.target: me muestra todo sobre el elemento en cuestion
//e.target.value: lo que el usuario esta escribiendo
