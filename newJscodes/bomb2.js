let inputEl = document.getElementById("defuser");
let paraEl = document.getElementById("timer");
let interval;
let count = 10;

function bombDefuse() {
    interval = setInterval(function() {
        count--; // Decrement count first
        paraEl.textContent = count; // Update text content

        if (inputEl.value === "defuse") {
            paraEl.textContent = "You did it!";
            clearInterval(interval);
        } else {
            if (count <= 0) {
                clearInterval(interval);
                paraEl.textContent = "Boom";
            }
        }
    }, 1000);
}

inputEl.addEventListener("keydown", bombDefuse);
