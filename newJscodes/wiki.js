// Get references to the input and results elements from the DOM
let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl=document.getElementById("spinner");

// Function to create and append a search result to the results container
function creatAndAppendSearchResult(result) {
    // Destructure the result object to get title, link, and description
    let { title, link, description } = result;

    // 1. Create a div element to contain the result item and add a class to it
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    // 2. Create an anchor element for the result title, set its properties, and append it
    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title; // Set the anchor text to the title
    resultTitleEl.href = link; // Set the anchor href to the link
    resultTitleEl.target = "_blank"; // Open the link in a new tab
    resultItemEl.appendChild(resultTitleEl);

    // 3. Create a break element and append it to the result item
    let breakEl = document.createElement("br");
    resultItemEl.appendChild(breakEl);

    // 4. Create an anchor element for the URL, set its properties, and append it
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link; // Set the anchor text to the URL
    resultItemEl.appendChild(urlEl);

    // 5. Create another break element and append it to the result item
    let lineBrEl = document.createElement("br");
    resultItemEl.appendChild(lineBrEl);

    // 6. Create a paragraph element for the description, set its text, and append it
    let paraEl = document.createElement("p");
    paraEl.classList.add("line-description");
    paraEl.textContent = description; // Set the paragraph text to the description
    resultItemEl.appendChild(paraEl);
}

// Function to display search results
function displayResults(search_results) {
    spinner.classList.toggle("d-none");
    // Loop through each result in the search results and create an element for it
    for (let result of search_results) {
        creatAndAppendSearchResult(result);
    }
}

// Function to perform the Wikipedia search
function searchWikipedia(event) {
    // Check if the Enter key was pressed
    if (event.key === "Enter") {
        // Get the input value from the search input element
        let searchInput = searchInputEl.value;

        // Clear previous search results
        searchResultsEl.textContent = "";
        //for spinner
        spinner.classList.toggle("d-none");

        // Construct the API URL with the search input
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        // Define options for the fetch request
        let options = {
            method: "GET"
        };

        // Perform the fetch request to the API
        fetch(url, options)
            .then(function(response) {
                return response.json(); // Parse the JSON response
            })
            .then(function(jsonData) {
                let { search_results } = jsonData; // Extract search results from the response data
                displayResults(search_results); // Display the search results
            });
    }
}

// Add an event listener to the search input element to trigger search on keydown
searchInputEl.addEventListener("keydown", searchWikipedia);
