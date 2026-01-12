const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const container = document.querySelector(".container");

let todos = [];

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return alert("Enter a task");

  todos.push(value);
  input.value = "";
  renderTodos();
});

function renderTodos() {
  list.innerHTML = "";
  container.classList.toggle("empty", todos.length === 0);

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = todo;

    const btnDiv = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "editBtn";

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.className = "delBtn";

    editBtn.onclick = () => {
      const editInput = document.createElement("input");
      editInput.value = todo;
      editInput.className = "editInput";

      const saveBtn = document.createElement("button");
      saveBtn.innerText = "Save";

      saveBtn.onclick = () => {
        todos[index] = editInput.value;
        renderTodos();
      };

      li.innerHTML = "";
      li.append(editInput, saveBtn);
    };

    delBtn.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    btnDiv.append(editBtn, delBtn);
    li.append(span, btnDiv);
    list.appendChild(li);
  });
}

renderTodos();
