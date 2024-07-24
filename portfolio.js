let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let indexContainer = document.getElementById("imgContainer");

// Create an image element and set its source to the imgSrc from profileDetails
let imageEl = document.createElement("img");
imageEl.src = profileDetails.imgSrc;
indexContainer.appendChild(imageEl);

// Create an h1 element and set its text content to the name from profileDetails
let nameEl = document.createElement("h1");
nameEl.textContent = profileDetails.name;
indexContainer.appendChild(nameEl);

// Create a paragraph element and set its text content to display "Age"
let ageTextEl = document.createElement("p");
ageTextEl.textContent = "Age: ";
nameEl.appendChild(ageTextEl);

// Create a span element to display the age value
let ageEl = document.createElement("span");
ageEl.textContent = profileDetails.age;
ageTextEl.appendChild(ageEl);
