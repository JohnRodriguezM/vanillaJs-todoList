const d = document;
const form = d.getElementById("todoForm");
const ul = d.getElementById("todoList");
const agregarTarea = () => {
  let input = d.getElementById("tarea").value;
  let expacio = d.getElementById("tarea");
  expacio.setAttribute("autocomplete", "off");
  ul.innerHTML += `
  <li>${input}
  <button
  class =" btnEliminar">
        Eliminar
  </button>
  </li>
  
  `;
  form.reset()
  expacio.focus();
  crearEliminador();
};

function crearEliminador() {
  const li = d.getElementsByTagName("li");
  const lista = [...li];
  const btns = document.querySelectorAll(".btnEliminar");
  lista.forEach((item, index) => {
    btns[index].addEventListener("click", () => {
      item.remove();
     /*  let p = d.createElement("p");
      document.querySelector('header').append(p) */
      /* let confirm = confirm('quieres eliminar?')
        if(confirm) {
            alert(`Tarea Eliminada, te quedan ${--lista.length}`)} */
      /* btns[index].remove(); */
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  agregarTarea();
});
