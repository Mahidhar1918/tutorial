let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let checkingButton = document.getElementById("checkButton");
let restartbutton = document.getElementById("restartButton");
let gameResult = document.getElementById("gameResult");

let userInput=document.getElementById("userInput");

let randomFirstNumber = Math.ceil(Math.random() * 100);
let randomSecondNumber = Math.ceil(Math.random() * 100);
firstNumberElement.innerHTML= randomFirstNumber ;
secondNumberElement.innerHTML=randomSecondNumber;
function checkButton() {
    addNumber=randomFirstNumber+randomSecondNumber;
    console.log(randomFirstNumber);
    console.log(randomSecondNumber);
  
    if(addNumber==userInput.value){
        gameResult.textContent="Congratulations! You got it right";
        gameResult.style.color="#028a0f";

    }
    else{
        gameResult.textContent="Please Try Again";
        gameResult.style.color="#1e217c";
    }
    
    
    
}

function restartButton(){
    userInput.value="";
    gameResult.textContent="";
     randomFirstNumber = Math.ceil(Math.random() * 100);
    randomSecondNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.innerHTML= randomFirstNumber;
    secondNumberElement.innerHTML=randomSecondNumber   
}
