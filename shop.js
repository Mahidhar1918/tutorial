// Create a div element for the background container
let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

// Create an h1 element for the heading
let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainerEl.appendChild(headingEl);

// Create a ul element for the list container
let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);


let checkboxEl=document.createElement("input");
checkboxEl.type="checkbox";
checkboxEl.id="deliveryMode"
bgContainerEl.appendChild(checkboxEl);

let labelEl=document.createElement("label");
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add("delvery-text");
labelEl.textContent="Need Home Delivery"
bgContainerEl.appendChild(labelEl);

let brEl=document.createElement("br");
bgContainerEl.appendChild(brEl);


let buttonEl=document.createElement("button");
buttonEl.classList.add("btn","btn-primary");
buttonEl.textContent="Proceed to pay";
bgContainerEl.appendChild(buttonEl);

// Array of grocery items
let groceryItems = ["Milk", "Chocolates", "Fruits", "Vegetables", "Biscuits"];
for(let groceryItem of groceryItems){
        let listItemEl=document.createElement("li");
        listItemEl.textContent=groceryItem;
        listContainerEl .appendChild(listItemEl);
}


