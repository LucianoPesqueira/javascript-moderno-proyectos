// ---- getElementById ----

const formulario = document.getElementById("formulario");

console.log(formulario);

const noExiste2 = document.getElementById("existe");

console.log(noExiste2); //retorna null

//si busco un id y hay mas de 1, me retorna el primero que encuentra, ya que a diferencia de las clases los id son unicos
