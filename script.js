const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.textContent = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔️";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
