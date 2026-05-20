//selecciono el carrito
const carrito = document.querySelector(".carrito"); //clase contenedora del carrito
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const contenedorCarrito = document.querySelector("#lista-carrito"); //donde se muestran los productos del carrito
const productos = document.querySelector(".productos"); //clase que contiene todos los productos
let articulosCarrito = [];

eventosListeners();
//funcion donde voy a tener todos los eventos
function eventosListeners() {
  productos.addEventListener("click", agregarAlCarrito);

  carrito.addEventListener("click", sumarRestar);

  carrito.addEventListener("click", eliminarProducto);

  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function agregarAlCarrito(e) {
  //para evitar que se agrege si presiono en cada card del producto y solo cuando presiono el boton de "Agregar al carrito"
  if (e.target.classList.contains("agregar-carrito")) {
    //realizo TraversingDom para acceder al elemento padre:
    //si hago parentElement 1 vez accedo al elemento padre que contiene el nombre, precio y btn
    //si hago parentElement 2 veces accedo a todo el card, para la imagen
    const productoSeleccionado = e.target.parentElement.parentElement;

    datosProductoSeleccionado(productoSeleccionado); //le envio el elemento padre para acceder a los datos del producto
  }
}

function eliminarProducto(e) {
  //evito que me envie a la parte superior al borrar un producto
  e.preventDefault();

  if (e.target.classList.contains("borrar-producto")) {
    const productoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter(
      (prod) => prod.id !== productoId,
    );
    agregarAlHTML();
    actualizarTotal();
  }
}

function vaciarCarrito() {
  //llamo a la funcion para limpiar el carrito en el html
  limpiarCarritoHTML();
  //limpio el array del carrito
  articulosCarrito = [];
}

function sumarRestar(e) {
  const productId = e.target.dataset.id;

  if (e.target.classList.contains("sumar")) {
    articulosCarrito = articulosCarrito.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, cantidad: prod.cantidad + 1 };
      }

      return prod;
    });
  }
  if (e.target.classList.contains("restar")) {
    articulosCarrito = articulosCarrito
      .map((prod) => {
        if (prod.id === productId) {
          return { ...prod, cantidad: prod.cantidad - 1 };
        }

        return prod;
      })
      .filter((prod) => prod.cantidad > 0);
  }

  agregarAlHTML();
  actualizarTotal();
}

function datosProductoSeleccionado(producto) {
  const infoProducto = {
    id: producto.querySelector("button").dataset.id,
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector("h3").textContent,
    precio: producto.querySelector("p").textContent,
    cantidad: 1,
  };

  //consulto si existe el producto en el array por el id
  const existe = articulosCarrito.some((prod) => prod.id === infoProducto.id);

  //si existe, me devuelve un nuevo array con el producto modificado, sino me devuelve el mismo producto
  if (existe) {
    const producto = articulosCarrito.map((prod) => {
      if (prod.id === infoProducto.id) {
        return { ...prod, cantidad: prod.cantidad + 1 };
      } else {
        return prod;
      }
    });
    //almaceno en el array con Spread Operator el carrito y el producto modificado
    articulosCarrito = [...producto];
  } else {
    //si no existe, agrego el producto al carrito con Spread Operator
    articulosCarrito = [...articulosCarrito, infoProducto];
  }

  //funcion para agregar los productos del array en el html
  agregarAlHTML();
  actualizarTotal();
}

//agregar los productos al carrito en el html
function agregarAlHTML() {
  limpiarCarritoHTML();

  articulosCarrito.forEach((prod) => {
    //aplico destructuring donde tengo todos los datos del producto
    const { id, imagen, nombre, precio, cantidad } = prod;
    //creo un elemento de lista para mostrar los productos
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
          <img src="${imagen}" width="100">
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>
          <button class="sumar" data-id=${id}>+</button>
          ${cantidad}
          <button class="restar" data-id=${id}>-</button>
        </td>
        <td>
          <a href="#" class="borrar-producto" data-id="${id}">X</a>
        </td>`;

    contenedorCarrito.appendChild(row);
  });
}

function actualizarTotal() {
  const total = articulosCarrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  console.log(total);
  document.querySelector("#total-productos").textContent = total;
}

function limpiarCarritoHTML() {
  //mientras el contenedor del carrito tenga un hijo, lo va a ir eliminando, hasta que no quede ninguno
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
