let formEl=document.getElementById("questionForm");
let hydEl=document.getElementById("cityHyderabad");
let tnEl=document.getElementById("cityChennai");
let delhiEl=document.getElementById("cityDelhi");
let mumbaiEl=document.getElementById("cityMumbai");
let resultMsg=document.getElementById("resultMsg");
let capitalCity="Delhi";
let selectedCity="";

hydEl.addEventListener("change",function(event){
   selectedCity=event.target.value; 
});
tnEl.addEventListener("change",function(event){
   selectedCity=event.target.value; 
});
delhiEl.addEventListener("change",function(event){
   selectedCity=event.target.value; 
});
mumbaiEl.addEventListener("change",function(event){
   selectedCity=event.target.value; 
});


formEl.addEventListener("submit",function(event){
    event.preventDefault();
    if(selectedCity===capitalCity){
       resultMsg.textContent="Correct Answer!";
    }else if(selectedCity===""){
        resultMsg.textContent="Please select option";
        console.log(selectedCity);
    }else{
        resultMsg.textContent="Wrong Answer!"
    }
});