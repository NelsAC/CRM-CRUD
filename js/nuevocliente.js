import { mostrarMensaje } from "./funciones.js";
import { nuevoCliente } from "./API.js";
(() => {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };
    if (Object.values(cliente).every((valor) => valor != "")) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Cliente Registrado Correctamente",
        showConfirmButton: false,
      });
      setTimeout(() => {
        nuevoCliente(cliente);
      }, 2000);
      return;
    }
    mostrarMensaje("Todos Los Campos Son Obligatorios");
  }
})();
