import { mostrarMensaje } from "./funciones.js";
import { obtenerCliente, actualizarCliente } from "./API.js";
(() => {
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const empresaInput = document.getElementById("empresa");
  const idInput = document.getElementById("id");
  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(parametrosURL.get("id"));
    const cliente = await obtenerCliente(idCliente);
    mostrarCliente(cliente);

    //submit al formulario
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validarCliente);
  });
  function mostrarCliente(cliente) {
    const { nombre, email, telefono, empresa, id } = cliente;
    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
  }
  function validarCliente(e) {
    e.preventDefault();
    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: idInput.value,
    };
    if (Object.values(cliente).every((valor) => valor != "")) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Cliente Actualizado Correctamente",
        showConfirmButton: false,
      });
      setTimeout(() => {
        actualizarCliente(cliente);
      }, 2000);
      return;
    }
    mostrarMensaje("Todos Los Campos Son Obligatorios");
  }
})();
