const inputTodo = document.getElementById("input-todo");
const listTodos = document.getElementById("list-todos");

function addTodo() {
  listTodos.innerHTML += `<li>
    <span>${inputTodo.value}</span>
    <button class="delete-todo">x</button>
  </li>`;
  inputTodo.value = "";
  inputTodo.focus();
  listenDeleteTodoBtn();
}

function addTodo2() {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.textContent = inputTodo.value;
    button.textContent = "x";
    button.onclick = deleteTodo;
    li.appendChild(span);
    li.appendChild(button);
    listTodos.appendChild(li);
}

function deleteTodo(evt) {
  console.log(evt, evt.target);
  const clickedButton = evt.target; // the clicked button
  clickedButton.parentElement.remove();
}

function listenDeleteTodoBtn() {
  const btns = document.querySelectorAll(".delete-todo");
  btns.forEach(function (btn) {
    btn.onclick = deleteTodo;
  });
}

function resetTodos() {
  listTodos.innerHTML = "";
}

document.getElementById("btn-add-todo").onclick = addTodo2;
document.getElementById("btn-reset-todos").onclick = resetTodos;
