let userInput = document.getElementById("userInput");
let sendBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");

function deleteEL() {
    let data = userInput.value;
    let options = {
        method: "DELETE",
 headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
    }
        // body: JSON.stringify(data)
    };
    let url = "https://gorest.co.in/public-api/users/" + data;
    console.log(data);
    fetch(url, options)
        .then(function(response) {
            requestStatus.textContent = response.status
            return response.json();
        })
        .then(function(jsonData) {

            httpResponse.textContent = JSON.stringify(jsonData.data)
            requestStatus.textContent = jsonData.code;
        });
}
sendBtnEl.addEventListener("click", deleteEL);