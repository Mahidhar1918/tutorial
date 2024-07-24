let colorPickerContainerElement=document.getElementById("colorPickerContainerElement");
let colorIdElement=document.getElementById("colorIdElement");
console.log(colorIdElement);
function ButtonOne(){
    colorPickerContainerElement.style.backgroundColor="#e0e0e0";
    colorIdElement.textContent="#e0e0e0";
}
function ButtonTwo(){
    colorPickerContainerElement.style.backgroundColor="#6fcf97";
    colorIdElement.textContent="#6fcf97";

}
function ButtonThree(){

    colorPickerContainerElement.style.backgroundColor="#56ccf2";
    colorIdElement.textContent="#56ccf2";
}

function ButtonFour(){
    console.log("ButtonFour");

    colorPickerContainerElement.style.backgroundColor="#bb6bd9";
    colorIdElement.textContent="#bb6bd9";
}
