let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    nameErrorMsg2.textContent = "Email already exists!!";
                }
            }
        });
}

let workingStatusEl = document.getElementById("status");
workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

let genderMaleEl = document.getElementById("genderMale");
genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

let genderFemaleEl = document.getElementById("genderFemale");
genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitFormData(formData);
});

let nameEl = document.getElementById("name");
let nameErrorMsg = document.getElementById("nameErrorMsg");
nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrorMsg.textContent = "Required*";
    } else {
        nameErrorMsg.textContent = "";
    }
    formData.name = event.target.value;
});

let emailEl = document.getElementById("email");
let nameErrorMsg2 = document.getElementById("nameErrorMsg2");
emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrorMsg2.textContent = "Required*";
    } else {
        nameErrorMsg2.textContent = "";
    }
    formData.email = event.target.value;
});
