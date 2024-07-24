let userInputEl=document.getElementById("userInput");
let resultEl=document.getElementById("fact");
let spinnerEl=document.getElementById("spinner");
function factTab(event){
    if(event.key==="Enter"){
        let inputEl=userInputEl.value
        spinnerEl.classList.toggle("d-none");
        resultEl.textContent="";

        if(inputEl===""){
            alert("enter a number");
        }else{
            let url="https://apis.ccbp.in/numbers-fact?number="+inputEl;
            let options={
                method:"GET"
            };
            fetch(url,options)
            .then(function(response){
                return response.json();
    
            })
            .then(function(jsonData) {
                spinnerEl.classList.toggle("d-none");
               resultEl.textContent=jsonData.fact; 
            });
        }

    }
}
userInputEl.addEventListener("keydown",factTab);