let jokeText=document.getElementById("jokeText");
let jokeBtnEl=document.getElementById("jokeBtn");
let spinner=document.getElementById("spinner");
function  joke(){
spinner.classList.toggle("d-none");
jokeText.textContent="";    
let url="https://apis.ccbp.in/jokes/random"
let options={
    method:"GET"
};
fetch(url,options)
.then(function(response){
 
    return response.json();
})
.then(function(jsonData){
    spinner.classList.toggle("d-none");
    jokeText.textContent=jsonData.value;

})

}

jokeBtnEl.addEventListener("click",joke);