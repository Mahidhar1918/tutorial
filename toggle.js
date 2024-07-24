let backgroundContainer=document.getElementById("checkBoxWithLabelContainer");
let inputEl=document.createElement("input");
inputEl.id="checkbox";
inputEl.type="checkbox";
backgroundContainer.appendChild(inputEl);
inputEl.onclick=function(){
    onstatusChange();
}

let labeEl=document.createElement("label");
labeEl.textContent="Iam a label";
labeEl.id="checkboxLabel";
backgroundContainer.appendChild(labeEl);

function onstatusChange(){
    labeEl.classList.toggle("checked");

}