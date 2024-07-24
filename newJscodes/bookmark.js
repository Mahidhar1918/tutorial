let formId = document.getElementById("bookmarkForm");
let siteNameEl = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let btnEL = document.getElementById("submitBtn");
let listEL = document.getElementById("bookmarksList");

siteNameEl.addEventListener("change", function(event) {
    siteNameErrMsg.textContent = "";
});
siteUrlInput.addEventListener("change", function(event) {
    siteUrlErrMsg.textContent = "";
});

formId.addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    siteNameErrMsg.textContent = "";
    siteUrlErrMsg.textContent = "";

    // Validate inputs
    if (siteNameEl.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    }

    // If both inputs are valid, create and append the bookmark
    if (siteNameEl.value !== "" && siteUrlInput.value !== "") {
        let listItem = document.createElement("li");

        // Create heading element for site name
        let headingEl = document.createElement("h4");
        headingEl.textContent = siteNameEl.value;
        listItem.appendChild(headingEl);

        // Create link element for site URL
        let link = document.createElement("a");
        link.href = siteUrlInput.value;
        link.target = "_blank";
        link.textContent = siteUrlInput.value;
        listItem.appendChild(link);

        // Append list item to bookmarks list
        listEL.appendChild(listItem);

        // Clear input fields after submission
        siteNameEl.value = "";
        siteUrlInput.value = "";
    }
});