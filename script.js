function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new task item
    let taskList = document.getElementById("task-list");
    let newTaskItem = document.createElement("li");
    newTaskItem.className = "task-item";
    newTaskItem.innerHTML = `<span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

    // Append the task item to the list
    taskList.appendChild(newTaskItem);

    // Clear the input field
    taskInput.value = "";
  }
}

function deleteTask(deleteButton) {
  // Find the parent task item and remove it
  let taskItem = deleteTask.parentElement;
  taskItem.remove();
   
}