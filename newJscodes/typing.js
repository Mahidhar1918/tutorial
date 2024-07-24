let speedTypingTest = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEL = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let typeCard = document.getElementById("typeCard");
var quote = "";
console.log(quote);
document.addEventListener("paste",function(event){

event.preventDefault();
alert="copy is not allowed";
});

console.log();

let count = 0;
function fetchRandomeQuote() {
  spinner.classList.remove("d-none");
  typeCard.classList.add("d-none");

  let options = {
    method: "GET",
  };
  let url = "https://apis.ccbp.in/random-quote";
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      quote = jsonData.content;
      quoteDisplayEl.textContent = quote;
      console.log(quote);
    })
    .finally(() => {
      spinner.classList.add("d-none");
      typeCard.classList.remove("d-none");
    });
}
// startTimer();
setup("restart");
// fetchRandomeQuote();

function reset() {
  // spinner.classList.toggle("d-none");
  // fetchRandomeQuote();
  // startTimer();
  spinner.classList;
  setup("restart");
  count = 0;
  resultEL.textContent = "";
  quoteDisplayEl.textContent = "";
}
function submit() {
  setup("Submit");
  console.log(quote);
  console.log(quoteInputEl.value);
  if (quote === quoteInputEl.value) {
    resultEL.textContent = "you typed in " + count + " seconds";
  } else {
    resultEL.textContent = "you typed in incorrect sentence";
  }
}
var interval;
function setup(type) {
  console.log(type, count);
  if (type === "restart") {
    clearInterval(interval);
    count = 0;

    fetchRandomeQuote();

    interval = setInterval(function () {
      timerEl.textContent = count + " Seconds";
      count = count + 1;
    }, 1000);
  }
  if (type === "Submit") {
    console.log("Submit", count);
    clearInterval(interval);
    count = 0;
  }
}
submitBtn.addEventListener("click", submit);
resetBtn.addEventListener("click", reset);
