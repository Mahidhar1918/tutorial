let colorInput=document.getElementById("bgColorInput");
let fontInput=document.getElementById("fontColorInput");
let fontSizeInput=document.getElementById("fontSizeInput");
let fontWeightInput=document.getElementById("fontWeightInput");
let paddingInput=document.getElementById("paddingInput");
let borderInput=document.getElementById("borderRadiusInput");
let ButtonCustom=document.getElementById("customButton");


function applyButton(){
    ButtonCustom.style.backgroundColor=colorInput.value;
    ButtonCustom.style.color=fontInput.value;
    ButtonCustom.style.fontSize=fontSizeInput.value;
    ButtonCustom.style.fontWeight=fontWeightInput.value;
    ButtonCustom.style.padding=paddingInput.value;
    ButtonCustom.style.borderRadius=borderInput.value;
    
    
}