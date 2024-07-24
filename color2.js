let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];
let lengthArray=bgColorsArray.length;
let button=document.getElementById("button");
let containerElement=document.getElementById("bgContainer");

function clickAction(){
    let randomArray= Math.ceil(Math.random()*lengthArray);
    let backgroundColor=bgColorsArray[randomArray];
   containerElement.style.backgroundColor=backgroundColor;




}