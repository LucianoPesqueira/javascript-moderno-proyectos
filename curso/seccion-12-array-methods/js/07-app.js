//---- .concat ----

meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio'];

meses2 = ['Agosto', 'Septiembre'];
let meses3 = ['Octubre', 'Noviembre', 'Diciembre']


//.concat
const resultMeses = meses.concat(meses2).concat(meses3);

console.log(resultMeses);


//spread operator

const resultMeses2 = [...meses, ...meses2, ...meses3];

console.log(resultMeses2);