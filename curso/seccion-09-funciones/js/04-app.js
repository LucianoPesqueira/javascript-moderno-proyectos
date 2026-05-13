//----Diferencia entre Funcion y Metodo----

const num1 = 20;
const num2 = "20";

console.log(parseInt(num2)); //funcion

console.log(num1.toString()); //metodo

function sumar(){
    console.log(2 + 2);
};

sumar();