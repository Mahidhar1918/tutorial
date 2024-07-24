let message=document.getElementById("msg");
let saveButton=document.getElementById("saveBtn");
let clearButtonn=document.getElementById("clearBtn");

function savee(){
    localStorage.setItem("userInput",msg.value);

}
saveButton.addEventListener("click",savee);

function remove(){
    localStorage.removeItem("userInput");
}

clearButtonn.addEventListener("click",remove);