//---- Crear Funciones - funciones expression y Function Declaration ----


//declaracion de funcion - function declaration
function sumar(){
    console.log(2 + 2);
}
//Histing: "Eleva" la declaracion de la funcion a la parte superior del codigo, por lo que se puede llamar antes de ser declarada
//se define de forma global o local
sumar();

//expresion de funcion - function expression
const sumar1 = function(){
    console.log("expresion de funcion");
}
//no se puede llamar antes de ser declarada
//la funcion no tiene nombre propio, utiliza el de la variable
//se usa mucho en funciones anonimas, callbacks, ya que se puede pasar como argumento de otras funciones

sumar1();






