let twentySecondTimer = document.getElementById("twentySecondsBtn");
let thirtySecondTimer = document.getElementById("thirtySecondsBtn");
let fortySecondTimer = document.getElementById("fortySecondsBtn");
let oneMinuteTimer = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let counter = 0;
let interval; // Declare interval outside the function

function cutCode() {
    clearInterval(interval);
    interval = setInterval(function() {
        console.log(counter);
        counter--;
        timerText.textContent = counter + " Seconds left";

        if (counter <= 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(interval);
        }
    }, 1000);
}

function startTimer(duration) {
    counter = duration;
    timerText.textContent = counter + " Seconds left"; // Update timer display with initial count
    cutCode();
}

twentySecondTimer.addEventListener("click", function() {
    startTimer(20);
});

thirtySecondTimer.addEventListener("click", function() {
    startTimer(30);
});

fortySecondTimer.addEventListener("click", function() {
    startTimer(40);
});

oneMinuteTimer.addEventListener("click", function() {
    startTimer(60);
});
