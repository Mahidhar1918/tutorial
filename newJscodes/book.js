let searchInputEl=document.getElementById("searchInput");
let resultContainerEl=document.getElementById("searchResults");
let spinner=document.getElementById("spinner");

 
searchInputEl.addEventListener("keydown",function(event){
    if(searchInputEl.value!=="" && event.key==="Enter"){
      
        let options={
            method:"GET"
    
        };
        let url="https://apis.ccbp.in/book-store?title="+searchInputEl.value;
        fetch(url,options)
        .then(function(response){
            return response.json();

        })
        .then(function(jsonData){
            displayResults(jsonData);;
        })
    }
}); 


function displayResults(jsonData){
  
 
    if(jsonData.search_results.length===0){
        resultContainerEl="";
        spinner.classList.toggle("d-none")
        resultContainerEl.textContent="No results found";
        return;
    }else{
        let headingEl=document.createElement("h1");
        headingEl.textContent="Popular Books";
        headingEl.style.color="#323f4b";
        resultContainerEl.appendChild(headingEl);

       
    }
    for(let result of jsonData.search_results){

        let imageEl=document.createElement("img");
        imageEl.src=result.imageLink;
  
        resultContainerEl.appendChild(imageEl);
        

        let authorEl=document.createElement("p");
        authorEl.textContent=result.author;
     
        resultContainerEl.appendChild(authorEl);

    }
    
}