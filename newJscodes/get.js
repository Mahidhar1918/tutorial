let reqBtnEl=document.getElementById("sendGetRequestBtn");
let reqStatus=document.getElementById("requestStatus");
let httpResponse=document.getElementById("http-response");
console.log(httpResponse);
function sendButton(){
    // console.log("sendButton");
    let options = {
        method: "GET"
    };

    let url="https://gorest.co.in/public-api/users";
    fetch(url,options)
        .then(function(response){
            // console.log(response);
            reqStatus.textContent=response.status;
    return response .json();
    
})
.then (function(jsonData){
// console.log(jsonData.data);
httpResponse.textContent=JSON.stringify(jsonData.data);
})
   
}



reqBtnEl.addEventListener("click",sendButton);