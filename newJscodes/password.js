let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let formId = document.getElementById("updatePasswordForm");

formId.addEventListener("submit",function(event){
      event.preventDefault();
      if (newPasswordEl.value===confirmPasswordEl.value){
        confirmPasswordErrMsgEl.textContent="";
      }else{
        confirmPasswordErrMsgEl.textContent="Password must be same";
      }

});
newPasswordEl.addEventListener("blur",function(event){
    
   if(event.target.value===""){
      newPasswordErrMsgEl.textContent="Required*";
       
   }else{
       newPasswordErrMsgEl.textContent="";
   }
   
});

confirmPasswordEl.addEventListener("blur",function(event){
    console.log(event.target.value);
   if(event.target.value===""){
       confirmPasswordErrMsgEl.textContent="Required*";
       
   }else{
     confirmPasswordErrMsgEl.textContent="";
   }
   
});