let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let indexContainer = document.getElementById("recipeTitle");
let ingredientsContinar=document.getElementById("hello")


let headingEl = document.createElement("h1");
headingEl.classList.add("recipe-title");
headingEl.textContent = recipeObj.title; // Set textContent to recipe title
indexContainer.appendChild(headingEl); // Append headingEl to indexContainer

let imageEl=document.createElement("img");
imageEl.classList.add("image-content")
imageEl.src=recipeObj.imgSrc;
indexContainer.appendChild(imageEl);

let listEl=document.createElement("ul");

recipeObj.ingredients.forEach(function(ingredient){
    let listItemEl=document.createElement("li");
    listItemEl.classList.add("ingredients-title");
    listItemEl.textContent=ingredient;
    listEl.appendChild(listItemEl);

});
ingredientsContinar.appendChild(listEl);