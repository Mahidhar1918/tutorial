let formEl=document.getElementById("consoleForm");
let requestUrl=document.getElementById("requestUrl");
let responseStatus=document.getElementById("responseStatus");
let requestUrlErrMsg=document.getElementById("requestUrlErrMsg");
let requestSelect=document.getElementById("requestMethod");
let reqBodyEl=document.getElementById("requestBody");
let responseBodyEl=document.getElementById("responseBody");

formEl.addEventListener("submit",function(event){
    event.preventDefault();
    if( requestUrl.value===""){
        requestUrlErrMsg.textContent="Required*";
    }else{
        requestUrlErrMsg.textContent="";
    }
    if(requestSelect.value==="POST"){
       
        let options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
            
            Authorization:"Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
            }
        };
        if(method ==="POST"|| method ==="PUT"){
            options.body = reqBodyEl.value;
        }
        let url="https://gorest.co.in/public-api/users";
        fetch(url,options)
        .then(function(response){
            responseStatus.textContent=response.status
            return response.json();

        })
        .then(function(jsonData){
            responseBodyEl.value=JSON.stringify(jsonData.data);

        });
    

    }
});
requestSelect.addEventListener("change",function(event){

});
