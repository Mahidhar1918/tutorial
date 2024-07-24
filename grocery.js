let shoppingList = {
    ingredients: ["apple", "Boost Drink", "Butterscotch ice Cream", "tomato Ketchup", "Dairy Milk Chocolates", "Pasta"]
};

let groceryContainer = document.getElementById("groceryListContainer");

let containerDiv = document.createElement("div"); // Create a container div

let headingEl = document.createElement("h1");
headingEl.classList.add("hello");
headingEl.textContent = "Grocery List";
containerDiv.appendChild(headingEl); // Append the heading to the container div

let listEl = document.createElement("ul");

shoppingList.ingredients.forEach(function(item) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = item; // Set text content to each item in the ingredients array
    listEl.appendChild(listItemEl);
});

containerDiv.appendChild(listEl); // Append the list to the container div

groceryContainer.appendChild(containerDiv); // Append the container div to the groceryListContainer