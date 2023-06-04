const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector("ul");

button.addEventListener("click", createTask);

function createTask() {
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
}

list.addEventListener("click", checkTask);

function checkTask(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("check");
}
