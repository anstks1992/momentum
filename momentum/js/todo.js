const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const liDelete = event.target.parentElement;
  liDelete.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(liDelete.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const liCreate = document.createElement("li");
  liCreate.id = newTodo.id;
  const spanCreate = document.createElement("span");
  spanCreate.innerHTML = newTodo.text;
  const buttonCreate = document.createElement("button");
  buttonCreate.innerHTML = "❌";
  buttonCreate.addEventListener("click", deleteTodo);
  liCreate.appendChild(spanCreate);
  liCreate.appendChild(buttonCreate);
  toDoList.appendChild(liCreate);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
