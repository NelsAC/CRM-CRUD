export const mostrarMensaje = (mensaje) => {
  const mensajeClass = document.querySelector(".err");
  if (!mensajeClass) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("my-8");
    divMensaje.innerHTML = `
        <p class="text-center text-red-800 rounded py-4 px-4 bg-red-200 err">${mensaje}</p>   
        `;
    formulario.appendChild(divMensaje);
    setTimeout(() => {
      divMensaje.remove();
    }, 2500);
  }
};
