let userInput=document.getElementById("userInput");
let findBtn=document.getElementById("findBtn");
let index=document.getElementById("indexOfNumber");
let arr=[17,31,77,20,63];

function findIndexOfNumber(){
    
    let numberToFind=parseInt(userInput.value);
   let findIndex=arr.findIndex(checkEL);
   index.textContent=findIndex;
   function checkEL(number){
    return number===numberToFind;
    

}

}
