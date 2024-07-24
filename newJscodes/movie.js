let reviewContainer = document.getElementById("movieReviewsContainer");

let headingEl = document.createElement("h1");
headingEl.textContent = "Movie Reviews";
reviewContainer.appendChild(headingEl);

let headingEle = document.createElement("h4");
headingEle.classList.add("hello");
headingEle.textContent = "MOVIE TITLE";
reviewContainer.appendChild(headingEle);

let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.placeholder = "Enter movie title";
inputEl.classList.add("hello_2");
inputEl.id = "titleInput"; 
reviewContainer.appendChild(inputEl);



let headingElee = document.createElement("h5");
headingElee.classList.add("hello");
headingElee.textContent = "MOVIE REVIEW";
reviewContainer.appendChild(headingElee);

let breakEL=document.createElement("br");
reviewContainer.appendChild(breakEL);


let textArea=document.createElement("textarea");
textArea.id="reviewTextarea";
textArea.rows=5;
textArea.cols=33;
textArea.placeholder="Enter your review here";
reviewContainer.appendChild(textArea);

let breakELe=document.createElement("br");
reviewContainer.appendChild(breakELe);

let buttonEl=document.createElement("button");
buttonEl.id="addBtn";
buttonEl.classList.add("btn","btn-primary");
buttonEl.textContent="Add";
reviewContainer.appendChild(buttonEl);

let titleInput=document.getElementById("titleInput");
let reviewTextarea=document.getElementById("reviewTextarea");
let addButton=document.getElementById("addBtn");

const reviewsContainer=document.getElementById("reviewsContainer");


function onAddButtonClick() {
    let title=titleInput.value;
    let review=reviewTextarea.value;

    let reviewDiv=document.createElement("div");
    //reviewDiv.id="reviewsContainer";
    reviewDiv.classList.add("review");

    let titlePara=document.createElement("p");
    titlePara.textContent="Title: "+title;
    reviewDiv.appendChild(titlePara);

    let reviewPara=document.createElement("p");
    reviewPara.textContent="Review: "+review;
    reviewDiv.appendChild(reviewPara);

    reviewsContainer.appendChild(reviewDiv);
    titleInput.value="";
    reviewTextarea.value="";

}
addButton.addEventListener("click",onAddButtonClick);
