let checkboxEl = document.getElementById("checkboxWithLabelContainer");

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
checkboxEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Click Me!";
labelEl.id="checkboxLabel";
labelEl.setAttribute("for", "checkbox");
checkboxEl.appendChild(labelEl);

let checkbox = document.getElementById("checkbox");
let label=document.getElementById("checkboxLabel");

checkbox.addEventListener("click", function() {
    //console.log("hello",checkbox.checked);
    checkbox.checked
   
});

labelEl.addEventListener("click", function() {
    checkbox.checked
});