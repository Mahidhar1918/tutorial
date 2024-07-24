let userInput = document.getElementById("userInput");
let list = document.getElementById("keyCodeList");

function keyDownn(event) {
    let keycode = event.key;
    let listEl = document.createElement("li");
    listEl.textContent = keycode;
    list.appendChild(listEl); 
}

userInput.addEventListener("keydown", keyDownn); 
