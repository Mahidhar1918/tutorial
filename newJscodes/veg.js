let backgroundContainer=document.getElementById("orderedItemsContainer");

let orderItems = [{
    orderName: "Veg Biryani",
    uniqueNo: 1,
},
{
    orderName: "Chicken 65",
    uniqueNo: 2,
},
{
    orderName: "paratha",
    uniqueNo: 3,
}
];

let headingEl=document.createElement("h1");
headingEl.textContent="Your Ordered Items";
let ul=document.createElement("ul");

backgroundContainer.appendChild(headingEl);
backgroundContainer.append(ul);



function createList(order){
    let firstDiv=document.createElement("li");
   firstDiv.classList.add("orderedItem");
   firstDiv.id="item"+order.uniqueNo;

   let spanEliment=document.createElement("span");
   spanEliment.textContent=order.orderName;
   firstDiv.appendChild(spanEliment);

    let cancelBtn=document.createElement("button");
    cancelBtn.id="button"+order.uniqueNo;
    cancelBtn.classList.add("btn","btn-danger");
    cancelBtn.textContent="Cancel";
 

    let breakButton=document.createElement("br");
   ul.appendChild(firstDiv);


    cancelBtn.addEventListener("click",function(){
        firstDiv.remove();


    });

    firstDiv.appendChild(cancelBtn);
}



for(let order of orderItems){
    createList(order);
}