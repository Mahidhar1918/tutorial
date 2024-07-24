let timerEl=document.getElementById("timer");
let inputEl=document.getElementById("defuser");
let countdown=10;

let intervalId=setInterval(function(){
    countdown=countdown-1;
    timerEl.textContent=countdown;

    if(countdown===0){
        timerEl.textContent="Boom";
        clearInterval(intervalId);
    }

},1000)
inputEl.addEventListener("keydown",function(event){
    console.log(event.type);
    let bombDefuserText=inputEl.value;
    if(event.key==="Enter" && bombDefuserText =="defuse" && countdown!==0){
        timerEl.textContent="You did it"
        clearInterval(intervalId);
    }
})
