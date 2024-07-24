let counterEliment=document.getElementById("counterValue");
function onIncriment(){
    let previousCounterValue=counterEliment.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)+1;
    counterEliment.textContent=updatedCounterValue

if(updatedCounterValue>0){
    counterEliment.style.color="Green";

}
else if (updatedCounterValue<0){
    counterEliment.style.color="Red";

}
else{
    counterEliment.style.color="Black";
}

}
function onDecriment(){
    let previousCounterValue=counterEliment.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)-1
    counterEliment.textContent=updatedCounterValue
    if(updatedCounterValue>0){
        counterEliment.style.color="Green";
    
    }
    else if (updatedCounterValue<0){
        counterEliment.style.color="Red";
    
    }
    else{
        counterEliment.style.color="Black";
    }
}
function onReset(){

    updatedCounterValue=0;
    counterEliment.textContent=updatedCounterValue
    if(updatedCounterValue>0){
        counterEliment.style.color="Green";
    
    }
    else if (updatedCounterValue<0){
        counterEliment.style.color="Red";
    
    }
    else{
        counterEliment.style.color="Black";
    }
}