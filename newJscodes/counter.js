let containerEl = document.getElementById("clickCounterContainer");
let headingEl=document.getElementById("headindEl");
let spanEl=document.getElementById("counterValue");

let paraEl = document.createElement("p");
paraEl.textContent = "Click the button to increase the count!";
containerEl.appendChild(paraEl);

let buttonDiv = document.createElement("div");
buttonDiv.classList.add("Custom-div"); 
containerEl.appendChild(buttonDiv);

let buttonEl = document.createElement("button");
buttonEl.textContent = "Click Me!";
buttonEl.id="incrementBtn";
buttonEl.classList.add("btn", "btn-primary");
buttonDiv.appendChild(buttonEl);

let clickCount=0;

let harsha=localStorage.getItem("clickCount");
if (harsha)clickCount=harsha
spanEl.textContent=clickCount;

function increment(){
    clickCount++;
    spanEl.textContent=clickCount;
    spanEl.style.color="#c20a72";
    localStorage.setItem("clickCount",clickCount);
}

buttonEl.addEventListener("click",increment);

