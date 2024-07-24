// Get the background container
let backgroundContainer = document.getElementById("backgroundContainer");

// Create and append a heading element to the background container
let headingEl = document.createElement("h1");
headingEl.textContent = "Add To Cart";
backgroundContainer.appendChild(headingEl);

// Get the cart item text input container
let cartItemTextInput = document.getElementById("hello");

// Create and append an input element to the cart item text input container
let textContainer = document.createElement("input");
textContainer.type = "text";
textContainer.classList.add("hello");
textContainer.id = "cartItemTextInput";
cartItemTextInput.appendChild(textContainer);

// Create and append a button element to the cart item text input container
let btnEl = document.createElement("button");
btnEl.textContent = "Add";
btnEl.id = "addBtn";
btnEl.classList.add("btn", "btn-primary");
cartItemTextInput.appendChild(btnEl);

// Create and append a heading element to the list items container
let headEl = document.createElement("h1");
headEl.textContent = "MY cart items";
cartItemTextInput.appendChild(headEl);


btnEl.onclick = function() {
    let content = document.createElement("li");
    content.textContent = textContainer.value;
    cartItemTextInput.appendChild(content);

    textContainer.value="";
}

