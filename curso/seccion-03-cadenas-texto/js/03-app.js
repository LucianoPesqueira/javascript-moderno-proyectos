//----Concatenar String y Template String----

const product2 = 'Monitor de 20 Pulgadas';
const precio = '30 USD';

//concatenar variables o string
console.log(product2.concat(precio));
console.log(product2.concat('en descuento'));

//otra forma con +
console.log(product2 + precio);
console.log(product2 + 'con un precio de ' + precio);
console.log('El producto ' + product2 + 'tiene un precio de ' + precio);
//tambien se pueden concatenar con comas, pero resulta mas confuso
console.log('El producto ' , product2 , 'tiene un precio de ' , precio);

//la forma nueva y avanzada es con template ``(backtick) a partir de ES6
console.log(`El producto ${product2} tiene un precio de $${precio}`);