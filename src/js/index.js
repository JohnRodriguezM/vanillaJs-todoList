const d = document;
const form = d.getElementById("todoForm");
const ul = d.getElementById("todoList");
const agregarTarea = () => {
  const input = d.getElementById("tarea").value;
  ul.innerHTML += `
  <li>${input}
  <button
  class =" btnEliminar">
        Eliminar
  </button>
  </li>
  
  `;
  crearEliminador();
  form.reset();
};






function crearEliminador() {
  const li = d.getElementsByTagName("li");
  const lista = [...li];
  const btns = document.querySelectorAll(".btnEliminar");
  lista.forEach((item, index) => {
    btns[index].addEventListener("click", () => {
      item.remove();
      /* btns[index].remove(); */
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarTarea();
});
