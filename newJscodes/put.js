let userInputEl=document.getElementById("userInput");
let requestBodyEl=document.getElementById("requestBody");
let sendBtnEl=document.getElementById("sendPutRequestBtn");
let reqStatus=document.getElementById("requestStatus");
let httpResponse=document.getElementById("httpResponse");

function putMethod(){
    let data=JSON.parse(userInputEl.value);
    let options={
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Accept":"Application/json",
            "Authorization":"Bearer YOUR_ACCESS_TOKEN"

        },
        body:JSON.stringify(data)
    };
    let url="https://gorest.co.in/public-api/users";
    fetch(url,options)
    .then(function(response){
    reqStatus.textContent=response.status
    return response.json();
    })
    .then(function(jsonData){
        
    httpResponse.textContent=JSON.stringify(jsonData.data)
    });

}


sendBtnEl.addEventListener("click",putMethod);