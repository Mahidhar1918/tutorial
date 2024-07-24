let billAmount=document.getElementById("billAmount");
let percentageTip=document.getElementById("percentageTip");
let tipAmount=document.getElementById("tipAmount");
let totalAmount =document.getElementById("totalAmount");
let errorMessage=document.getElementById("errorMessage");

function calculateButton(){
   
    if (billAmount.value===""){
        errorMessage.textContent="Please Enter a Valid Input";

    }
    else if(percentageTip.value===""){
        errorMessage.textContent="Please Enter a Valid Input";
    }
    else{
       errorMessage.textContent="";
       let percentageTtip=parseInt(percentageTip.value);
       let billAmountt=parseInt(billAmount.value);
   
       let calculatedTip=(percentageTtip/100)*billAmountt
       
       
       totalAmount.value=calculatedTip+billAmountt;
       tipAmount.value=calculatedTip

        
    }

}