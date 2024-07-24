let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];


let wordsContainer=document.getElementById("wordsContainer");
let userInput=document.getElementById("userInput");
let errorMessage=document.getElementById("errorMsg");
let addBtn=document.getElementById("addBtn");
let count=0;
for(let wordCloud2 of wordCloud){
   let headingEl;
    if(count%2==0){
         headingEl=document.createElement("h1");

    }else{
        headingEl=document.createElement("p");
    }

    
    headingEl.textContent=wordCloud2;
    wordsContainer.appendChild(headingEl);  
    count=count+1   
    

}

                                                                     

function addButton(){
if(userInput.value==""){
    errorMessage.textContent="Please enter a word";
    
      
}else{
    let x = Math.floor((Math.random() * wordCloud.length))
    let word=wordCloud[x];
    let spanDiv=document.createElement("span");
    spanDiv.textContent=wordCloud[0];
    
    let randomSize=Math.floor((Math.random() * 40));
    spanDiv.style.fontSize=randomSize+"px";


    wordsContainer.appendChild(spanDiv);
    userInput.value="";
    errorMessage.textContent="";
}


}

addBtn.addEventListener("click",addButton);