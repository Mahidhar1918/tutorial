let textAreaEl=document.getElementById("requestBody");
let sendButtonEl=document.getElementById("sendPostRequestBtn");
let requestStatus=document.getElementById("requestStatus");
let httpResponse=document.getElementById("httpResponse");

function requeststatus(){
    console.log(textAreaEl.value);
    let data=JSON.parse(textAreaEl.value);
  
    let options={
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
           "Authorization":"Bearer YOUR_ACCESS_TOKEN"
         },
         body:JSON.stringify(data)
    };
    let url="https://gorest.co.in/public-api/users";
    fetch(url,options)
    .then(function(response){
    
        console.log(requestStatus);
        return response.json();
    })
  .then(function(jsonData){
    httpResponse.textContent=JSON.stringify(jsonData.data);
       requestStatus.textContent=jsonData.code;
})
}


sendButtonEl.addEventListener("click",requeststatus);