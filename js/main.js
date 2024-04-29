emailjs.init('fNonciQZMH90FcxjL');

// Función para validar el nombre
function validarNombre() {
  const nombreInput = document.querySelector(".nombre_form");
  const errorNombre = document.querySelector(".e-nombre");

  if (nombreInput.value.trim().length < 3) {
      errorNombre.style.display = "block";
      return false; // Indica que la validación ha fallado
  } else {
      errorNombre.style.display = "none";
      return true; // Indica que la validación ha sido exitosa
  }
}

// Función para validar el correo
function validarCorreo() {
  const correoInput = document.querySelector(".correo");
  const errorCorreo = document.querySelector(".e-correo");
  const patronCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!patronCorreo.test(correoInput.value.trim())) {
      errorCorreo.style.display = "block";
      return false; // Indica que la validación ha fallado
  } else {
      errorCorreo.style.display = "none";
      return true; // Indica que la validación ha sido exitosa
  }
}

// Función para validar el mensaje
function validarMensaje() {
  const mensajeInput = document.querySelector(".mensaje");
  const errorMensaje = document.querySelector(".e-msg");

  if (mensajeInput.value.trim().length < 10) {
      errorMensaje.style.display = "block";
      return false; // Indica que la validación ha fallado
  } else {
      errorMensaje.style.display = "none";
      return true; // Indica que la validación ha sido exitosa
  }
}

// Validar campos al enviar el formulario
function validarFormulario(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

  // Validar cada campo
  const nombreValido = validarNombre();
  const correoValido = validarCorreo();
  const mensajeValido = validarMensaje();

  // Verificar si todos los campos son válidos antes de enviar el formulario
  if (nombreValido && correoValido && mensajeValido) {
      // Realizar el envío del formulario aquí
      document.querySelector("form button").textContent = "Enviando...";

      const serviceID = 'service_uhx2vfl';
      const templateID = 'template_br3ye2g';

      let form = document.querySelector(".form-contacto");
      emailjs.sendForm(serviceID, templateID, form)
          .then(() => {
              Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Gracias por tu mensaje, te responderé tan pronto como pueda",
                  showConfirmButton: false,
                  timer: 2000
              });
              setTimeout(() => {
                  document.querySelector("form button").textContent = "Enviar Mensaje";
              }, 2000);
          })
          .catch((err) => {
              alert(JSON.stringify(err));
          });
  } else {
      const errorGeneral = document.querySelector(".e-general");
      errorGeneral.style.display = "block";
      errorGeneral.style.textDecoration = "italic"
      document.querySelector(".e-msg").style.display = "none";
      document.querySelector(".e-correo").style.display = "none";
      document.querySelector(".e-nombre").style.display = "none";
      setTimeout(()=>{
        errorGeneral.style.display = "none";
      }, 4000)
  }
}

// Obtener el formulario y agregar el evento de envío
const formularioContacto = document.querySelector(".form-contacto");
formularioContacto.addEventListener('submit', validarFormulario);

// Agregar eventos de validación al desenfocar los campos
const nombreInput = document.querySelector(".nombre_form");
nombreInput.addEventListener("blur", validarNombre);

const correoInput = document.querySelector(".correo");
correoInput.addEventListener("blur", validarCorreo);

const mensajeInput = document.querySelector(".mensaje");
mensajeInput.addEventListener("blur", validarMensaje);