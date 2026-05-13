// 🧠 Ejercicio 1 (nivel inicial)

/*
Se tiene este array: 
const numeros = [3, 7, 2, 9, 4];

👉 Creá una función llamada sumarNumeros que:

Reciba un array como parámetro
Recorra el array
Devuelva la suma total de todos los números

📌 Ejemplo esperado:

sumarNumeros(numeros); // 25
 */

let numeros = [3, 7, 2, 9, 4];

function sumarNumeros(numeros) {
  let sumTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumTotal += numeros[i];
  }
  return sumTotal;
}

console.log(sumarNumeros(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 2 (nivel inicial 2)

/*
Tenés este array:

const numeros = [1, 2, 3, 4, 5, 6];

👉 Creá una función llamada obtenerPares que:

Reciba un array
Devuelva un nuevo array solo con los números pares
Usá el método .filter()

📌 Ejemplo esperado:

obtenerPares(numeros); // [2, 4, 6]
*/

numeros = [1, 2, 3, 4, 5, 6];

function obtenerPares(numeros) {
  return numeros.filter((num) => num % 2 === 0);
}

console.log(obtenerPares(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 3 (Combinar map + lógica:)

/*
const numeros = [1, 2, 3, 4];

👉 Creá una función duplicarNumeros que:

Reciba un array
Devuelva un nuevo array con cada número multiplicado por 2
Usá .map()

📌 Ejemplo:

duplicarNumeros(numeros); // [2, 4, 6, 8]
*/

numeros = [1, 2, 3, 4];

function duplicarNumeros(numeros) {
  return numeros.map((num) => num * 2);
}

console.log(duplicarNumeros(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 4 (un poco más lógico con filter + length)

/*
const edades = [12, 18, 25, 10, 30, 16];

👉 Creá una función contarMayores que:

Reciba un array de edades
Devuelva cuántas personas son mayores o iguales a 18
Usá .filter()

📌 Ejemplo:

contarMayores(edades); // 3
*/

const edades = [12, 18, 25, 10, 30, 16];

function contarMayores(edades) {
  return edades.filter((edad) => edad >= 18).length;
}

console.log(contarMayores(edades));

//--------------------------------------------------------------------
//🚀 Ejercicio 5 (integrador simple)

/*
const productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3000 },
  { nombre: "Monitor", precio: 20000 },
  { nombre: "USB", precio: 800 }
];

👉 Creá una función obtenerBaratos que:

Reciba el array
Devuelva un nuevo array con los productos que cuesten menos de 5000
Solo devolvé los nombres de esos productos
Usá .filter() y .map()

📌 Resultado esperado:

["Mouse", "Teclado", "USB"]
*/

let productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3000 },
  { nombre: "Monitor", precio: 20000 },
  { nombre: "USB", precio: 800 },
];

function obtenerBaratos(productos) {
  return productos
    .filter((producto) => producto.precio < 5000)
    .map((prod) => prod.nombre);
}

console.log(obtenerBaratos(productos));

//--------------------------------------------------------------------
//🚀Ejercicio 6 (subimos un poco la lógica)

/*
const numeros = [5, 10, 15, 20];

👉 Creá una función sumarMayoresA10 que:

Reciba un array
Sume solo los números mayores a 10
Use .reduce()

📌 Ejemplo:

sumarMayoresA10(numeros); // 35 (15 + 20)
*/

numeros = [5, 10, 15, 20];

function sumarMayoresA10(numeros) {
  return numeros.reduce((total, num) => {
    if (num > 10) {
      total += num;
    }
    return total;
  }, 0);
}
console.log(sumarMayoresA10(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 7 (mezcla de strings + arrays)

/*
const palabras = ["hola", "javascript", "sol", "programacion"];

👉 Creá una función palabrasLargas que:

Reciba un array de strings
Devuelva un nuevo array con las palabras que tengan más de 5 caracteres
Usá .filter()

📌 Ejemplo:

palabrasLargas(palabras); 
// ["javascript", "programacion"]
*/

let palabras = ["hola", "javascript", "sol", "programacion"];

function palabrasLargas(palabras) {
  return palabras.filter((palabra) => palabra.length > 5);
}

console.log(palabrasLargas(palabras));

//--------------------------------------------------------------------
//🚀 Ejercicio 8 (integrador)
/*
const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Lucia", edad: 30 }
];

👉 Creá una función nombresMayores que:

Reciba el array
Obtenga solo los usuarios mayores de edad (18 o más)
Devuelva un array solo con los nombres
Usá .filter() y .map()

📌 Resultado esperado:

["Ana", "Lucia"]
*/
let usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Lucia", edad: 30 },
];

function nombresMayores(usuarios) {
  return usuarios
    .filter((usuario) => usuario.edad >= 18)
    .map((usuario) => usuario.nombre);
}

console.log(nombresMayores(usuarios));

//--------------------------------------------------------------------
//🚀 Ejercicio 9 (combinar logica + reduce)
/*
const productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3000 },
  { nombre: "Monitor", precio: 20000 }
];

👉 Creá una función precioTotal que:

Reciba el array
Devuelva la suma de todos los precios
Use .reduce()

📌 Resultado esperado:

precioTotal(productos); // 24500
*/
productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3000 },
  { nombre: "Monitor", precio: 20000 },
];

function precioTotal(productos) {
  return productos.reduce((total, producto) => {
    total += producto.precio;
    return total;
  }, 0);
}

console.log(precioTotal(productos));

//--------------------------------------------------------------------
//🚀 Ejercicio 10 (integrador con filter y reduce)
/*
const productos = [
  { nombre: "Mouse", precio: 1500, categoria: "tecnologia" },
  { nombre: "Libro", precio: 2000, categoria: "educacion" },
  { nombre: "Teclado", precio: 3000, categoria: "tecnologia" },
  { nombre: "Cuaderno", precio: 800, categoria: "educacion" }
];

👉 Creá una función totalTecnologia que:

Reciba el array
Filtre solo los productos de categoría "tecnologia"
Devuelva la suma total de sus precios
Usá .filter() + .reduce()

📌 Resultado esperado:

totalTecnologia(productos); // 4500
*/
productos = [
  { nombre: "Mouse", precio: 1500, categoria: "tecnologia" },
  { nombre: "Libro", precio: 2000, categoria: "educacion" },
  { nombre: "Teclado", precio: 3000, categoria: "tecnologia" },
  { nombre: "Cuaderno", precio: 800, categoria: "educacion" },
];

function totalTecnologia(productos) {
  return productos
    .filter((producto) => producto.categoria === "tecnologia")
    .reduce((total, producto) => total + producto.precio, 0);
}

console.log(totalTecnologia(productos));

//--------------------------------------------------------------------
//🚀 Ejercicio 11 (buscar elemento con .find())
/*
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Pedro" }
];

👉 Creá una función buscarUsuario que:

Reciba el array y un id
Devuelva el objeto del usuario que tenga ese id
Usá .find()

📌 Ejemplo:

buscarUsuario(usuarios, 2);
// { id: 2, nombre: "Ana" }
*/
usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Pedro" },
];

function buscarUsuario(usuarios, id) {
  const usuario = usuarios.find((usuario) => usuario.id === id);
  return usuario ? usuario : "Usuario no encontrado";
}

console.log(buscarUsuario(usuarios, 2));

//--------------------------------------------------------------------
//🚀 Ejercicio 12 (.sume())
/*
 const numeros = [3, 7, 11, 18];

👉 Creá una función hayMayorA10 que:

Reciba un array
Devuelva true si al menos un número es mayor a 10
Devuelva false si ninguno lo es
Usá .some()

📌 Ejemplo:

hayMayorA10(numeros); // true
 */
numeros = [3, 7, 11, 18];

function hayMayorA10(numeros) {
  return numeros.some((numero) => numero > 10);
}

console.log(hayMayorA10(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 13 (.every())
/*
const numeros = [2, 4, 6, 8];

👉 Creá una función todosPares que:

Reciba un array
Devuelva true si todos los números son pares
Devuelva false si alguno no lo es
Usá .every()

📌 Ejemplo:

todosPares(numeros); // true
*/
numeros = [2, 4, 6, 8];

function todosPares(numeros) {
  return numeros.every((numero) => numero % 2 === 0);
}

console.log(todosPares(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 14 (integrador un poco más desafiante)
/*
const alumnos = [
  { nombre: "Juan", nota: 6 },
  { nombre: "Ana", nota: 9 },
  { nombre: "Pedro", nota: 4 },
  { nombre: "Lucia", nota: 8 }
];

👉 Creá una función aprobados que:

Reciba el array
Filtre los alumnos con nota mayor o igual a 6
Devuelva un array con solo los nombres de los aprobados
Además, devolvé cuántos aprobaron

📌 Resultado esperado:

{
  nombres: ["Juan", "Ana", "Lucia"],
  cantidad: 3
}
*/
let alumnos = [
  { nombre: "Juan", nota: 6 },
  { nombre: "Ana", nota: 9 },
  { nombre: "Pedro", nota: 4 },
  { nombre: "Lucia", nota: 8 },
];

function aprobados(alumnos) {
  const nombres = alumnos
    .filter((alumno) => alumno.nota >= 6)
    .map((alumno) => alumno.nombre);

  const cantidad = nombres.length;
  return { nombres, cantidad };
}

console.log(aprobados(alumnos));

//--------------------------------------------------------------------
//🚀 Ejercicio 15 (transformar objetos)
/*
const productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3000 }
];

👉 Creá una función agregarIVA que:

Reciba el array
Devuelva un nuevo array
A cada producto le agregue una propiedad nueva precioFinal
precioFinal = precio * 1.21
Usá .map()

📌 Resultado esperado:

[
  { nombre: "Mouse", precio: 1500, precioFinal: 1815 },
  { nombre: "Teclado", precio: 3000, precioFinal: 3630 }
] 
*/
productos = [
  { nombre: "Mouse", precio: 1500 },
  { nombre: "Teclado", precio: 3000 },
];

function agregarIVA(productos) {
  return productos.map((producto) => ({
    ...producto,
    precioFinal: Number((producto.precio * 1.21).toFixed(2)),
  }));
}

console.log(agregarIVA(productos));

//--------------------------------------------------------------------
//🚀 Ejercicio 16 (validacion + arrays)
/*
const usuarios = [
  { nombre: "Juan", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Pedro", activo: true }
];

👉 Creá una función hayInactivos que:

Reciba el array
Devuelva true si existe al menos un usuario inactivo
Devuelva false si todos están activos
Usá .some()

📌 Ejemplo:

hayInactivos(usuarios); // true
*/
usuarios = [
  { nombre: "Juan", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Pedro", activo: true },
];

function hayInactivos(usuarios) {
  return usuarios.some((usuario) => !usuario.activo);
}

console.log(hayInactivos(usuarios));

//--------------------------------------------------------------------
//🚀 Ejercicio 17 (integrador final de esta tanda)
/*
const ventas = [
  { producto: "Mouse", cantidad: 2, precio: 1500 },
  { producto: "Teclado", cantidad: 1, precio: 3000 },
  { producto: "Mouse", cantidad: 1, precio: 1500 }
];

👉 Creá una función totalVendido que:

Reciba el array
Calcule el total vendido por cada item (cantidad * precio)
Devuelva la suma total de todas las ventas
Usá .reduce()

📌 Resultado esperado:

totalVendido(ventas); // 7500
*/
console.log("-------------------------------------------------------------17");
let ventas = [
  { producto: "Mouse", cantidad: 2, precio: 1500 },
  { producto: "Teclado", cantidad: 1, precio: 3000 },
  { producto: "Mouse", cantidad: 1, precio: 1500 },
];

function totalVendido(ventas) {
  return ventas.reduce(
    (total, venta) => total + venta.cantidad * venta.precio,
    0,
  );
}

console.log(totalVendido(ventas));

//--------------------------------------------------------------------
//🚀 Ejercicio 18
/*
const numeros = [3, 7, 2, 9, 4, 6];

👉 Creá una función analizarNumeros que:

Reciba un array
Recorra el array (podés usar for)
Devuelva un objeto con:
pares: cantidad de números pares
impares: cantidad de números impares
mayor: el número más grande del array

📌 Resultado esperado:

{
  pares: 3,
  impares: 3,
  mayor: 9
}
*/
console.log("-------------------------------------------------------------18");
numeros = [3, 7, 2, 9, 4, 6];

function analizarNumeros(numeros) {
  let pares = 0;
  let impares = 0;
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return { pares, impares, mayor };
}

console.log(analizarNumeros(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 19
/*
const palabras = ["sol", "javascript", "luna", "code", "programacion"];

👉 Creá una función analizarPalabras que:

Reciba un array
Recorra el array
Devuelva un objeto con:
largas: cantidad de palabras con más de 5 letras
cortas: cantidad de palabras con 5 o menos letras
masLarga: la palabra más larga

📌 Resultado esperado:

{
  largas: 2,
  cortas: 3,
  masLarga: "programacion"
}
*/
console.log("-------------------------------------------------------------19");
palabras = ["sol", "javascript", "luna", "code", "programacion"];

function analizarPalabras(palabras) {
  let largas = 0;
  let cortas = 0;
  let masLarga = palabras[0];

  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];
    const longitud = palabra.length;

    if (longitud > 5) {
      largas++;
    } else {
      cortas++;
    }

    if (longitud > masLarga.length) {
      masLarga = palabra;
    }
  }

  return { largas, cortas, masLarga };
}

console.log(analizarPalabras(palabras));

//--------------------------------------------------------------------
//🚀 Ejercicio 20 (integrador con lógica)
/*
const ventas = [
  { producto: "Mouse", cantidad: 2, precio: 1500 },
  { producto: "Teclado", cantidad: 1, precio: 3000 },
  { producto: "Mouse", cantidad: 3, precio: 1500 },
  { producto: "Monitor", cantidad: 1, precio: 20000 }
];

👉 Creá una función resumenVentas que:

Recorra el array
Devuelva un objeto con:
total: suma total vendida (cantidad * precio)
productoMasVendido: el producto con mayor cantidad total acumulada

📌 Resultado esperado:

{
  total: 29000,
  productoMasVendido: "Mouse"
}
*/
console.log("-------------------------------------------------------------20");
ventas = [
  { producto: "Mouse", cantidad: 2, precio: 1500 },
  { producto: "Teclado", cantidad: 1, precio: 3000 },
  { producto: "Mouse", cantidad: 3, precio: 1500 },
  { producto: "Monitor", cantidad: 1, precio: 20000 },
];

function resumenVentas(ventas) {
  let longitud = ventas.length;
  let total = 0;
  const cantidadProductos = {};

  for (let i = 0; i < longitud; i++) {
    let venta = ventas[i];

    total += venta.cantidad * venta.precio;

    if (cantidadProductos[venta.producto]) {
      cantidadProductos[venta.producto] += venta.cantidad;
    } else {
      cantidadProductos[venta.producto] = venta.cantidad;
    }
  }

  let maximo = 0;
  let productoMasVendido = "";

  for (let producto in cantidadProductos) {
    let cantidad = cantidadProductos[producto];
    if (cantidad > maximo) {
      maximo = cantidad;
      productoMasVendido = producto;
    }
  }

  return { total, productoMasVendido };
}

console.log(resumenVentas(ventas));

//--------------------------------------------------------------------
//🚀 Ejercicio 21 (duplicados)
/*
const palabras = ["hola", "sol", "hola", "luna", "sol", "sol"];

👉 Creá una función contarRepeticiones que:

Reciba un array
Devuelva un objeto donde:
la clave sea la palabra
el valor sea cuántas veces aparece

📌 Resultado esperado:

{
  hola: 2,
  sol: 3,
  luna: 1
}
*/
console.log("-------------------------------------------------------------21");
palabras = ["hola", "sol", "hola", "luna", "sol", "sol"];

function contarRepeticiones(palabras) {
  const repetidos = {};

  palabras.forEach((palabra) => {
    repetidos[palabra] = (repetidos[palabra] || 0) + 1;
  });

  return repetidos;
}

console.log(contarRepeticiones(palabras));

//--------------------------------------------------------------------
//🚀 Ejercicio 22 (ordenamiento)
/*
const numeros = [10, 5, 8, 20, 3];

👉 Creá una función ordenadoAscendente que:

Reciba un array
Devuelva true si los números están ordenados de menor a mayor
Devuelva false si no lo están
NO uses .sort()
Usá un for

📌 Ejemplo:

ordenadoAscendente([1, 2, 3, 4]); // true
ordenadoAscendente([1, 3, 2, 4]); // false
*/
console.log("-------------------------------------------------------------22");
numeros = [10, 5, 8, 20, 3];

function ordenadoAscendente(numeros) {
  if (numeros.length < 2) return true;

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(ordenadoAscendente(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 22 (primer desorden)
/*
const numeros = [1, 2, 3, 2, 5];

👉 Creá una función primerDesorden que:

Reciba un array
Devuelva el índice donde se rompe el orden ascendente
Si todo está ordenado → devolver -1

📌 Ejemplo:

primerDesorden([1, 2, 3, 2, 5]); // 2  (porque 3 > 2)
primerDesorden([1, 2, 3, 4]);    // -1
*/
console.log("-------------------------------------------------------------23");
numeros = [1, 2, 3, 2, 5];

function primerDesorden(numeros) {
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      return i;
    }
  }
  return -1;
}

console.log(primerDesorden(numeros));

//--------------------------------------------------------------------
//🚀 Ejercicio 24 (más lógica + acumulación)
/* 
const temperaturas = [22, 25, 19, 30, 28, 18];

👉 Creá una función analizarTemperaturas que:

Reciba un array
Devuelva un objeto con:
promedio
mayor
menor
cantidadCalurosas

👉 Una temperatura es “calurosa” si es mayor o igual a 27

📌 Resultado esperado:

{
  promedio: 23.6,
  mayor: 30,
  menor: 18,
  cantidadCalurosas: 2
}
*/
console.log("-------------------------------------------------------------24");

let temperaturas = [22, 25, 19, 30, 28, 18];

function analizarTemperaturas(temperaturas) {
  let suma = 0;
  let promedio = 0;
  let mayor = temperaturas[0];
  let menor = temperaturas[0];
  let cantidadCalurosas = 0;

  for (let i = 0; i < temperaturas.length; i++) {
    if (mayor < temperaturas[i]) mayor = temperaturas[i];

    if (menor > temperaturas[i]) menor = temperaturas[i];

    if (temperaturas[i] >= 27) cantidadCalurosas++;

    suma += temperaturas[i];
  }

  promedio = Number((suma / temperaturas.length).toFixed(1));

  return { promedio, mayor, menor, cantidadCalurosas };
}

console.log(analizarTemperaturas(temperaturas));

//--------------------------------------------------------------------
//🚀 Ejercicio 25 (más lógica real)
/*
const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 30 },
  { nombre: "Lucia", edad: 15 }
];

👉 Creá una función estadisticasUsuarios que devuelva un objeto con:

mayores: cantidad de mayores de edad
menores: cantidad de menores de edad
promedioEdad
usuarioMayor: nombre del usuario con mayor edad

📌 Resultado esperado:

{
  mayores: 2,
  menores: 2,
  promedioEdad: 21.8,
  usuarioMayor: "Pedro"
}
*/
console.log("-------------------------------------------------------------25");
usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 30 },
  { nombre: "Lucia", edad: 15 },
];

function estadisticasUsuarios(usuarios) {
  let mayores = 0;
  let menores = 0;
  let promedioEdad = 0;
  let usuarioMayor = usuarios[0].nombre;
  let edades = 0;
  let mayor = usuarios[0].edad;

  for (let i = 1; i < usuarios.length; i++) {
    let usuario = usuarios[i];

    if (usuario.edad >= 18) {
      mayores++;
    } else {
      menores++;
    }

    edades += usuario.edad;

    if (usuario.edad > mayor) {
      mayor = usuario.edad;
      usuarioMayor = usuario.nombre;
    }
  }

  promedioEdad = Number((edades / usuarios.length).toFixed(1));

  return { mayores, menores, promedioEdad, usuarioMayor };
}

console.log(estadisticasUsuarios(usuarios));

//--------------------------------------------------------------------
//🚀 Ejercicio 26 (más lógica + validación)
/*
const passwords = [
  "abc123",
  "12345678",
  "hola",
  "javascript2024",
  "pass"
];

👉 Creá una función analizarPasswords que devuelva un objeto con:

validas: cantidad de passwords con 8 caracteres o más
invalidas: cantidad de passwords con menos de 8 caracteres
masLarga: la password más larga

📌 Resultado esperado:

{
  validas: 2,
  invalidas: 3,
  masLarga: "javascript2024"
}
*/
console.log("-------------------------------------------------------------26");
let passwords = ["abc123", "12345678", "hola", "javascript2024", "pass"];

function analizarPasswords(passwords) {
  let validas = 0;
  let invalidas = 0;
  let masLarga = passwords[0];

  for (let i = 0; i < passwords.length; i++) {
    let password = passwords[i];

    if (password.length >= 8) {
      validas++;
    } else {
      invalidas++;
    }

    if (masLarga.length < password.length) {
      masLarga = password;
    }
  }

  return { validas, invalidas, masLarga };
}

console.log(analizarPasswords(passwords));

//--------------------------------------------------------------------
//🚀 Ejercicio 27 (más desafiante)
/*
const movimientos = [
  { tipo: "ingreso", monto: 5000 },
  { tipo: "egreso", monto: 2000 },
  { tipo: "ingreso", monto: 3000 },
  { tipo: "egreso", monto: 1000 }
];

👉 Creá una función resumenFinanciero que devuelva un objeto con:

totalIngresos
totalEgresos
balance (ingresos - egresos)
mayorMovimiento → el movimiento con mayor monto (solo el monto)

📌 Resultado esperado:

{
  totalIngresos: 8000,
  totalEgresos: 3000,
  balance: 5000,
  mayorMovimiento: 5000
}
*/
console.log("-------------------------------------------------------------27");
let movimientos = [
  { tipo: "ingreso", monto: 5000 },
  { tipo: "egreso", monto: 2000 },
  { tipo: "ingreso", monto: 3000 },
  { tipo: "egreso", monto: 1000 },
];

function resumenFinanciero(movimientos) {
  let totalIngresos = 0;
  let totalEgresos = 0;
  //let balance = 0;
  let mayorMovimiento = movimientos[0].monto;

  for (let i = 0; i < movimientos.length; i++) {
    let movimiento = movimientos[i];

    if (movimiento.tipo === "ingreso") {
      totalIngresos += movimiento.monto;
    } else if (movimiento.tipo === "egreso") {
      totalEgresos += movimiento.monto;
    }

    if (mayorMovimiento < movimiento.monto) {
      mayorMovimiento = movimiento.monto;
    }
  }

  //balance = totalIngresos - totalEgresos;

  return {
    totalIngresos,
    totalEgresos,
    balance: totalIngresos - totalEgresos,
    mayorMovimiento,
  };
}

console.log(resumenFinanciero(movimientos));

//--------------------------------------------------------------------
//🚀 Ejercicio 28 (más lógica y un poco más desafiante)
/*
const notas = [
  [8, 7, 9],
  [6, 5, 7],
  [10, 9, 8]
];

👉 Cada array interno representa las notas de un alumno.

Creá una función analizarNotas que devuelva:

promedios → array con el promedio de cada alumno
mejorPromedio → el promedio más alto

📌 Resultado esperado:

{
  promedios: [8, 6, 9],
  mejorPromedio: 9
}
*/
console.log("-------------------------------------------------------------28");
let notas = [
  [8, 7, 9],
  [6, 5, 7],
  [10, 9, 8],
];

function analizarNotas(notas) {
  let promedios = [];
  let mejorPromedio = 0;

  for (let i = 0; i < notas.length; i++) {
    let subArray = notas[i];
    let suma = 0;

    for (let j = 0; j < subArray.length; j++) {
      suma += subArray[j];
    }

    let promedio = suma / subArray.length;
    promedios.push(promedio);

    if (promedio > mejorPromedio) {
      mejorPromedio = promedios[i];
    }
  }

  return { promedios, mejorPromedio };
}

console.log(analizarNotas(notas));
//--------------------------------------------------------------------
//🚀 Ejercicio 29 (integrador y más desafiante)
/*
const productos = [
  { nombre: "Mouse", stock: 4, precio: 1500 },
  { nombre: "Teclado", stock: 0, precio: 3000 },
  { nombre: "Monitor", stock: 3, precio: 20000 },
  { nombre: "USB", stock: 10, precio: 800 }
];

👉 Creá una función analizarInventario que devuelva:

sinStock → array con nombres de productos sin stock
stockTotal → suma total del stock
productoMasCaro → nombre del producto más caro
valorInventario → suma de (stock * precio) de todos los productos

📌 Resultado esperado:

{
  sinStock: ["Teclado"],
  stockTotal: 17,
  productoMasCaro: "Monitor",
  valorInventario: 74000
}
*/
console.log("-------------------------------------------------------------29");
productos = [
  { nombre: "Mouse", stock: 4, precio: 1500 },
  { nombre: "Teclado", stock: 0, precio: 3000 },
  { nombre: "Monitor", stock: 3, precio: 20000 },
  { nombre: "USB", stock: 10, precio: 800 },
];

function analizarInventario(productos) {
  let productoInicial = productos[0];
  let sinStock = [];
  let stockTotal = 0;
  let productoMasCaro = productoInicial.nombre;
  let mayor = productoInicial.precio;
  let valorInventario = 0;

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];

    if (producto.stock === 0) {
      sinStock.push(producto.nombre);
    }

    stockTotal += producto.stock;

    if (producto.precio > mayor) {
      productoMasCaro = producto.nombre;
      mayor = producto.precio;
    }

    valorInventario += producto.stock * producto.precio;
  }

  return { sinStock, stockTotal, productoMasCaro, valorInventario };
}

console.log(analizarInventario(productos));

//--------------------------------------------------------------------
//🚀 Ejercicio 30 (integrador)
/*
const estudiantes = [
  {
    nombre: "Juan",
    notas: [8, 7, 9]
  },
  {
    nombre: "Ana",
    notas: [10, 9, 10]
  },
  {
    nombre: "Pedro",
    notas: [6, 5, 7]
  }
];

👉 Creá una función reporteEstudiantes que devuelva:

promedioGeneral
mejorEstudiante → nombre del estudiante con mejor promedio
aprobados → array con nombres de estudiantes con promedio >= 7

📌 Resultado esperado:

{
  promedioGeneral: 7.9,
  mejorEstudiante: "Ana",
  aprobados: ["Juan", "Ana"]
}
*/
console.log("-------------------------------------------------------------30");
let estudiantes = [
  {
    nombre: "Juan",
    notas: [8, 7, 9],
  },
  {
    nombre: "Ana",
    notas: [10, 9, 10],
  },
  {
    nombre: "Pedro",
    notas: [6, 5, 7],
  },
];

function reporteEstudiantes(estudiantes) {
  let sumarPromedios = 0;
  let promedioMasAlto = 0;
  let cantidadNotas = 0;
  let promedioGeneral = 0;
  let mejorEstudiante = "";
  let aprobados = [];

  for (let i = 0; i < estudiantes.length; i++) {
    let notasAlumno = estudiantes[i].notas;
    let sumaNotasAlumno = 0;
    cantidadNotas = notasAlumno.length;

    for (let j = 0; j < notasAlumno.length; j++) {
      sumaNotasAlumno += notasAlumno[j]; // 8+7+9 = 24
    }

    let promedioAlumno = sumaNotasAlumno / cantidadNotas; // 24/3 -> 8

    if (promedioAlumno > promedioMasAlto) {
      mejorEstudiante = estudiantes[i].nombre;
      promedioMasAlto = promedioAlumno;
    }

    if (promedioAlumno >= 7) {
      aprobados.push(estudiantes[i].nombre);
    }

    sumarPromedios += promedioAlumno;
  }

  promedioGeneral = Number((sumarPromedios / estudiantes.length).toFixed(1));

  return { promedioGeneral, mejorEstudiante, aprobados };
}

console.log(reporteEstudiantes(estudiantes));

//--------------------------------------------------------------------
//🚀 Ejercicio 31 (más desafiante y muy real)
/*
const transacciones = [
  {
    usuario: "Juan",
    movimientos: [1000, -500, 200]
  },
  {
    usuario: "Ana",
    movimientos: [3000, -1000, -500]
  },
  {
    usuario: "Pedro",
    movimientos: [500, 500, -100]
  }
];

👉 Creá una función analizarTransacciones que devuelva:

usuarioMayorBalance → usuario con mayor balance final
balanceMayor → el balance más alto
usuariosPositivos → array con usuarios cuyo balance final sea positivo
balanceTotal → suma de todos los balances

📌 Resultado esperado:

{
  usuarioMayorBalance: "Ana",
  balanceMayor: 1500,
  usuariosPositivos: ["Juan", "Ana", "Pedro"],
  balanceTotal: 3100
}
*/
console.log("-------------------------------------------------------------31");

let transacciones = [
  {
    usuario: "Juan",
    movimientos: [1000, -500, 200],
  },
  {
    usuario: "Ana",
    movimientos: [3000, -1000, -500],
  },
  {
    usuario: "Pedro",
    movimientos: [500, 500, -100],
  },
];

function analizarTransacciones(transacciones) {
  let usuarioMayorBalance = "";
  let balanceMayor = 0;
  let usuariosPositivos = [];
  let balanceTotal = 0;

  for (let i = 0; i < transacciones.length; i++) {
    let balanceUsuario = 0;
    let subArray = transacciones[i].movimientos;
    let usuario = transacciones[i].usuario;

    for (let j = 0; j < subArray.length; j++) {
      balanceUsuario += subArray[j]; //almaceno los movimientos del usuario
    }

    if (balanceUsuario > balanceMayor) {
      balanceMayor = balanceUsuario; //almaceno el mayor balance
      usuarioMayorBalance = usuario; //almaceno el usuario de mayor balance
    }

    //usuarios con balance positivo
    if (balanceUsuario > 0) {
      usuariosPositivos.push(usuario);
    }

    //suma de todos los balances
    balanceTotal += balanceUsuario;
  }

  return { usuarioMayorBalance, balanceMayor, usuariosPositivos, balanceTotal };
}

console.log(analizarTransacciones(transacciones));

//--------------------------------------------------------------------
//🚀 Ejercicio 32 (más lógica + validaciones)
/*
const pedidos = [
  {
    cliente: "Juan",
    productos: [
      { nombre: "Mouse", cantidad: 2, precio: 1500 },
      { nombre: "Teclado", cantidad: 1, precio: 3000 }
    ]
  },
  {
    cliente: "Ana",
    productos: [
      { nombre: "Monitor", cantidad: 1, precio: 20000 }
    ]
  },
  {
    cliente: "Pedro",
    productos: []
  }
];

👉 Creá una función analizarPedidos que devuelva:

clienteMayorCompra → cliente que más gastó
montoMayorCompra
clientesSinPedidos → array de clientes sin productos
totalVendido → suma total vendida

📌 Resultado esperado:

{
  clienteMayorCompra: "Ana",
  montoMayorCompra: 20000,
  clientesSinPedidos: ["Pedro"],
  totalVendido: 26000
}
*/

console.log("-------------------------------------------------------------32");
let pedidos = [
  {
    cliente: "Juan",
    productos: [
      { nombre: "Mouse", cantidad: 2, precio: 1500 },
      { nombre: "Teclado", cantidad: 1, precio: 3000 },
    ],
  },
  {
    cliente: "Ana",
    productos: [{ nombre: "Monitor", cantidad: 1, precio: 20000 }],
  },
  {
    cliente: "Pedro",
    productos: [],
  },
];

//--------------------------------------------------------------------
//
/*

*/
console.log("-------------------------------------------------------------33");
