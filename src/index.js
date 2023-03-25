document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const newTask = document.createElement("li");
  newTask.innerText = event.target["new-task-description"].value;
  //added the delete function
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
  newTask.remove();
  });
  //return
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  });
  });
  
