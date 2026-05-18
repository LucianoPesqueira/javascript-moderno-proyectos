document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    emailCc: "",
    asunto: "",
    mensaje: "",
  };

  //1-seleccion los elementos del html
  const inputEmail = document.querySelector("#email");
  const inputEmailCc = document.querySelector("#email-cc");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  //asignar evento
  //2-evento blur: cuando sale del input
  //input: para no tener que salir del input para validar
  inputEmail.addEventListener("input", validar);
  inputEmailCc.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);
  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault(); //prevengo la accion por default que es limpiar el form sin preguntar
    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      resetFormulario();

      //crear alerta
      const alertaExito = document.createElement("p");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase",
      );
      alertaExito.textContent = "Mensaje enviado correctamente";

      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  //----------------------------funcion para validar campos---------------------------
  //3-funcion reutilizable para obtener los valores de los campos
  function validar(e) {
    //console.log(e.target.id) -> 6-obtengo el id de cada campo
    //4-trim: elimina espacios en blanco y si esta vacio
    if (e.target.value.trim() === "" && e.target.id !== "email-cc") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement,
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }
    //6-validar el email con una funcion que se encargue de validar el formato del email
    //agrego e.target.id para validar solo el campo email
    if (e.target.id === "email-cc" || e.target.id === "email") {
      if (!validarEmail(e.target.value)) {
        mostrarAlerta("El email no es valido", e.target.parentElement);

        email[e.target.name] = "";
        comprobarEmail();
        return;
      }
    }

    limpiarAlerta(e.target.parentElement);

    //asignar los valores que pasan las validaciones
    //puedo del html usar el id o el name de cada uno
    email[e.target.name] = e.target.value.trim().toLowerCase();

    //comprobar el objeto email
    comprobarEmail();
  }

  //----------------------------funcion para mostrar mensaje de error----------------------------
  //5-funcion para mostrar mensaje
  function mostrarAlerta(mensaje, referencia) {
    //comprobar si existe la alerta
    limpiarAlerta(referencia);

    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //inyerctar el error al formulario, appendChild lo agrega al final del elemento
    referencia.appendChild(error);
  }

  //----------------------------funcion para limpiar mensaje de error si existe----------------------------
  function limpiarAlerta(referencia) {
    //comprobar si existe una alerta, si existe la elimina
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  //----------------------------funcion para validar email con regex----------------------------
  function validarEmail(email) {
    //expresion regular para validar el email
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);

    return resultado;
  }

  function comprobarEmail() {
    //solo habilito el boton enviar si los campos email, asunto y mensaje tienen algo escrito, el campo emailCc es opcional
    if (email.email === "" || email.asunto === "" || email.mensaje === "") {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    //reiniciar el objeto
    email.email = "";
    email.emailCc = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }
});
