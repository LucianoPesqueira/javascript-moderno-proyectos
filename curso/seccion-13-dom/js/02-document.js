// ---- Acceder a elementos del HTML con document ----
let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms; //accedo a los formularios del html que es un array
elemento = document.forms[0].id; //accedo al id del form
elemento = document.forms[0].method; //el metodo del form
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links; //me trae todos los a del html
elemento = document.links[4];
elemento = document.links[4].classList; //retorna como arreglo de DOMTokenList
elemento = document.links[4].className; //retorna el string

elemento = document.images; //cantidad de imagenes
elemento = document.scripts;

console.log(elemento);
