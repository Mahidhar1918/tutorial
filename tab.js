let buttonAbout=document.getElementById("aboutButton");
let buttonVisit=document.getElementById("timeToVisitButton");
let attractions=document.getElementById("attractionsButton");
let aboutTab=document.getElementById("aboutTab");
let timeTab=document.getElementById("timeToVisitTab");
let attractTab=document.getElementById("attractionsTab");


function aboutButton(){
    aboutTab.style.display="block";
    timeTab.style.display="none";
    attractTab.style.display="none";
    
    

}
function visitButton(){
    aboutTab.style.display="none";
    timeTab.style.display="block";
    attractTab.style.display="none";
}
function attractButton(){
    aboutTab.style.display="none";
    timeTab.style.display="none";
    attractTab.style.display="block";
}