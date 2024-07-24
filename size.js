
let decreaseButton=document.getElementById("decrementButton");
let increaseButton=document.getElementById("incrementButton");
let imageWidth=200;
let updatedWidth=document.getElementById("imageWidth")
let image=document.getElementById("image");
function decrementButton(){
   
    if(imageWidth<=100){
       
        warningMessage.textContent="To small.Increase the size off the image";

    }
    else{
        imageWidth-=5;
        image.style.width=imageWidth+"px";
        warningMessage.textContent="";
        updatedWidth.textContent=imageWidth+"px";

    }
    
}

function incrementButton(){
 
    if (imageWidth>=300){
        
        warningMessage.textContent="Too big.Decrease the size off the image";
        //console.log(warningMessage);

    }
    else {
        imageWidth+=5;
        image.style.width=imageWidth+"px";
        warningMessage.textContent="";
        updatedWidth.textContent=imageWidth+"px";

    }
}