let skilEl=document.getElementById("skillsContainer");

let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}
];
function createList(skill){
    let checkboxId="checkbox"+skill.uniqueNo;
    let labelId="label"+skill.uniqueNo;
    let inputEl=document.createElement("input");
    inputEl.type="checkbox";
    inputEl.id=checkboxId;
    skilEl.appendChild(inputEl);

    let labelElement=document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.id=labelId;
    labelElement.textContent=skill.skillName;
    skilEl.appendChild(labelElement);

    let brEl=document.createElement("br");
    skilEl.appendChild(brEl);

    
    inputEl.addEventListener("click", function() {
        labelElement.classList.toggle("colorChange");
    
    
    });
}
for (let skill of skillList){
    createList(skill);
}

