let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrorEl = document.getElementById("nameErrMsg");
let emailErrorEl = document.getElementById("emailErrMsg");
let formId = document.getElementById("subscribeForm");

formId.addEventListener("submit", function(event) {
    event.preventDefault();
});


nameEl.addEventListener("blur",function(event) {
   
    if (event.target.value === "") {
        nameErrorEl.textContent = "Required*";
        console.log(nameErrorEl);
    } else {
        nameErrorEl.textContent = "";
    }
});


emailEl.addEventListener("blur",function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = "Required*";
    } else {
        emailErrorEl.textContent = "";
    }
});

