let backgroundEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let inputEl = document.getElementById("themeUserinput");

function keyDown(event) {
    inputValue = inputEl.value.toLowerCase(); // Get the value of the input element

    if (inputValue === "dark") {
        backgroundEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        backgroundEl.style.color = "white";
    } else if (inputValue === "light") {
        backgroundEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        backgroundEl.style.color = "black";
    } else {
        alert("Enter a valid theme: 'dark' or 'light'");
    }
}

inputEl.addEventListener("click", keyDown);
