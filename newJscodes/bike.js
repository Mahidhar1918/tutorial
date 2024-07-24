let inputEl=document.getElementById("searchInput");
let resultDiv=document.getElementById("searchResults");
let bikes="";
function fetchResults(bikes){
    console.log(bikes);
    resultDiv.textContent="";
    for (let bike of bikes){
        let bikenameEl=document.createElement("p");
        bikenameEl.textContent="bikename"+bike.name;
        resultDiv.appendChild(bikenameEl);
        let bikeCityel=document.createElement("p");
        bikeCityel.textContent="city"+bike.city;
        resultDiv.appendChild(bikeCityel);
    }
}
inputEl.addEventListener("keydown",function(event){
    let inputELi=event.target.value;
   if(event.key==="Enter"){
          event.preventDefault();
          let options={
           method:"GET"
       };
      let url="https://apis.ccbp.in/city-bikes?bike_name="+inputELi;
      fetch(url,options)
      .then(function(response){
          return response.json();
      })
      .then(function(jsonData){
          let bikes=jsonData;
          console.log(bikes);
          fetchResults(bikes);
    
      });
   }
});
function onPageLoad(){
 
    resultDiv.textContent="";
     let options={
          method:"GET"
      };
        fetch(url,options)
      .then(function(response){
          return response.json();
      })
      .then(function(jsonData){
          let bikes=jsonData;
          fetchResults(bikes);
      });
  }
onPageLoad();