//---- Eventos al dar scroll con el mouse ----

//saber en el eje Y cuanto scroll realizo en la pagina
window.addEventListener("scroll", () => {
  const scrollPX = window.scrollY;

  //console.log(scrollPX);
});

//selecciono un elemento y al hacer scrolling me va diciendo a cuanto estoy de el
window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect();

  //console.log(ubicacion);

  if (ubicacion.top < 100) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Falta mas scroll");
  }
});
