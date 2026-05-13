//----Comparar 2 valores

const numero2_1 = 20;
const numero2_2 = "20";
const numero2_3 = 30;

//igual 
console.log(numero2_1 == numero2_3);
console.log(numero2_1 == numero2_2);//true

//comparador estricto igual
console.log(numero2_1 === numero2_2);
console.log(typeof(numero2_1));
console.log(typeof(numero2_2));

//parsear el string si da true, ya que son numero y entero
console.log(numero2_1 === parseInt(numero2_2));

//diferente
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);
console.log(numero2_1 !== numero2_2);