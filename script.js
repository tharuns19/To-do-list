// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");

  // Add task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  li.appendChild(deleteBtn);

  // Mark task as completed
  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Add task to the list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Event Listener for Add Task Button
addTaskBtn.addEventListener("click", addTask);

// Add Task on Enter Key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
