import { obtenerClientes, eliminarCliente } from "./API.js";
(() => {
  const listado = document.getElementById("listado-clientes");
  document.addEventListener("DOMContentLoaded", listarClientes);
  listado.addEventListener("click", confirmarEliminar);
  async function listarClientes() {
    const clientes = await obtenerClientes();
    clientes.map((cliente) => {
      const { nombre, email, telefono, empresa, id } = cliente;
      const row = document.createElement("tr");
      row.innerHTML += `
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
          <p class="text-sm leading-10 text-gray-700"> ${email} </p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
          <p class="text-gray-700">${telefono}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
          <p class="text-gray-600">${empresa}</p>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
          <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
          <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
      </td>
  `;
      listado.appendChild(row);
    });
  }
  function confirmarEliminar(e) {
    if (e.target.classList.contains("eliminar")) {
      const clienteId = parseInt(e.target.dataset.cliente);
      Swal.fire({
        title: "¿Está seguro de eliminar?",
        text: "Si eliminas no podrás recuperar el registro",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Eliminado!",
            "El registro se eliminó satisfactoriamente",
            "success",
            { showConfirmButton: false }
          );
          setTimeout(() => {
            eliminarCliente(clienteId);
          }, 2000);
        }
      });
    }
  }
})();
