let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100)
console.log(randomNumber)
 

function checkGuess(){
    let guessedNumber=parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent="Too High try again";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent="Too low try again";
        gameResult.style.backgroundColor="#1e217c";
        
    }
    else if(guessedNumber===randomNumber){
        gameResult.textContent="Congratualtions you got it right"
        gameResult.style.backgroundColor="green"
    }
    else{
        gameResult.textContent="please provide a valid input"
        gameResult.style.backgroundColor="Red"
    }
}