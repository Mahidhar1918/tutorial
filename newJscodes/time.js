let backgroundEl = document.getElementById("bgContainer")


let headingEl = document.createElement("h1");
headingEl.textContent = "Time Converter"; 
backgroundEl.appendChild(headingEl); 

let paraEl = document.createElement("p");
paraEl.textContent = "Enter hours and minutes values to convert into seconds";
backgroundEl.appendChild(paraEl);

let inputEl = document.createElement("input");
inputEl.setAttribute("type", "text");
inputEl.setAttribute("id", "hoursInput");
backgroundEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Hours";
labelEl.setAttribute("for", "hoursInput");
backgroundEl.appendChild(labelEl);

let inputEl2 = document.createElement("input");
inputEl2.setAttribute("type", "text");
inputEl2.setAttribute("id", "minutesInput");
backgroundEl.appendChild(inputEl2);

let labelEl2 = document.createElement("label");
labelEl2.textContent = "Minutes";
labelEl2.setAttribute("for", "minutesInput");
backgroundEl.appendChild(labelEl2);

let buttonEl = document.createElement("button");
buttonEl.textContent = "Convert to Seconds";
buttonEl.id = "convertBtn";
backgroundEl.appendChild(buttonEl);

let paraEl2 = document.createElement("p");
paraEl2.id = "timeInSeconds";
backgroundEl.appendChild(paraEl2);

let paraEl3 = document.createElement("p");
paraEl3.id = "errorMsg";
paraEl3.classList.add("hello"); // Adding class "hello"
backgroundEl.appendChild(paraEl3);

function convert() {
    let hoursEl = document.getElementById("hoursInput").value;
    let minutesEl = document.getElementById("minutesInput").value;
    let errormessage = document.getElementById("errorMsg");
    if (hoursEl === "") {
        errormessage.innerText = "Please enter valid number of hours";
    } else if (minutesEl === "") {
        errormessage.innerText = "Please enter valid number of minutes";
    }else{
        let timeInSeconds=parseInt(hoursEl)*3600+parseInt(minutesEl)*60
        paraEl2.textContent=timeInSeconds+" S";
    }
}

buttonEl.addEventListener("click", convert);
