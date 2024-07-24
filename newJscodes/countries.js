let inputEl=document.getElementById("searchInput");
let resultEl=document.getElementById("resultCountries");
let spinnerEl=document.getElementById("spinner");

let inputElVal="";
let countriesList=[];

function creatAndAppendSearchResult(result){

}

function displayResults(countries_List){
    
    for(let countries of countries_List){
        createAndAppendSearch(result);
    }
}


function getCountries(event){
   if(event.key==="Enter"){
    let searchInput=inputEl.value;
    let url="https://apis.ccbp.in/countries-data";
    let options={
        method:"GET"
    };
    spinnerEl.classList.toggle("d-none");
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        let {countries_List}=jsonData;
        displayResults(countries_List);
    });
}
  
}
 
inputEl.addEventListener("keydown",getCountries);