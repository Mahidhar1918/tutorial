let fromUserInput=document.getElementById("fromUserInput");
let toUserInput=document.getElementById("toUserInput");
let counterText=document.getElementById("counterText");
let startButton=document.getElementById("startBtn");

function start(){
    if(fromUserInput.value!="" && toUserInput.value!=""){
        let counter=parseInt(fromUserInput.value);
        let target=parseInt(toUserInput.value);
        counterText.textContent=counter;

        let interval=setInterval(function(){
            if(counter<=target){
                counterText.textContent=counter;
                counter++;
            }else{
                clearInterval(interval);
            }
           
        },1000);

    }else{
        alert("Enter the Input value");

    }
}

startButton.addEventListener("click",start);