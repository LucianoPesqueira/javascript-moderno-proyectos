//variables
const carrito = document.querySelector("#carrito"),
  contenedorCarrito = document.querySelector("#lista-carrito tbody"),
  vaciarCarritoBtn = document.querySelector("#vaciar-carrito"),
  listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  //cuando agrego un curso presionando el boton "agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  //elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //vaciar carrito
  carrito.addEventListener("click", () => {
    //se resetea el arreglo que contiene los productos del carrito
    articulosCarrito = [];

    //limpiar el html para que deje de mostrar los productos del carrito
    limpiarHTML();
  });
}

//funciones
function agregarCurso(e) {
  //evito que se valla hacia arriba
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    //para acceder al nombre del producto, precio, debo realizar
    // TraversingDom(ir del elemento hijo al elemento padre) ya que el boton esta despues de esos datos

    const cursoSeleccionado = e.target.parentElement.parentElement; //acceder a todo el card padre del elemento

    leetDatosCurso(cursoSeleccionado);
  }
}

//eliminar un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //eliminar del arreglo articulosCarrito con filter
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML();
  }
}

//leer el contenido del elemento html que se hace click para extraer la informacion necesaria(nombre, precio)
function leetDatosCurso(curso) {
  //crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //comprobar si el producto ya existe o no en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  //agrega elementos al arreglo del carrito
  //articulosCarrito = [...articulosCarrito, infoCurso];
  if (existe) {
    //si existe, actualizo la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  console.log(articulosCarrito);

  carritoHTML();
}

//muestra el carrito de compras
function carritoHTML() {
  //limpiar html
  limpiarHTML();

  //recorre el carrito y genera html
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
    `;
    //agrega el html del carrito en el tbody
    //el problema que no limpia el html con los elementos existentes y se van agregando de mas
    contenedorCarrito.appendChild(row);
  });
}

//eliminar los cursos del tbody
function limpiarHTML() {
  //forma lenta de limpiar
  //contenedorCarrito.innerHTML = "";

  //va a ir comprobando que no queden elementos hijos
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
