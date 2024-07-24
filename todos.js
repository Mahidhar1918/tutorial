// Get references to HTML elements
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

// Function to retrieve todo list from localStorage
function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

// Initialize todo list from localStorage and get count of todos
let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

// Event listener for saving todos to localStorage
saveTodoButton.onclick = function() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// Function to handle adding new todo
function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  // Check if input is empty
  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  // Increment todos count
  todosCount = todosCount + 1;

  // Create new todo object
  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
    isChecked: false
  };

  // Add new todo to todo list and update UI
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

// Event listener for add todo button
addTodoButton.onclick = function() {
  onAddTodo();
};

// Function to handle checkbox click event
function onTodoStatusChange(checkboxId, labelId, todoId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObjectIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    return eachTodoId === todoId;
  });
  let todoObject = todoList[todoObjectIndex];

  todoObject.isChecked = !todoObject.isChecked;
}

// Function to handle delete todo
function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  // Find index of todo to delete in todoList array
  let deleteElementIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    return eachTodoId === todoId;
  });

  // Remove todo from todoList array
  todoList.splice(deleteElementIndex, 1);
}

// Function to create and append todo item to UI
function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  // Create todo item container element
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  // Create checkbox element
  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.checked = todo.isChecked;

  // Event listener for checkbox click event
  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId, todoId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  // Create label container element
  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  // Create label element
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;

  if (todo.isChecked) {
    labelElement.classList.add("checked");
  }

  labelContainer.appendChild(labelElement);

  // Create delete icon container element
  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  // Create delete icon element
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  // Event listener for delete icon click event
  deleteIcon.onclick = function() {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

// Initialize todo list on page load
for (let todo of todoList) {
  createAndAppendTodo(todo);
}
