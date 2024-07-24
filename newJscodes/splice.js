let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndex=document.getElementById("startIndexInput");
let deleteCount=document.getElementById("deleteCountInput");
let iteamAdd=document.getElementById("itemToAddInput");
let updatedArray=document.getElementById("updatedArray");
function SpliceButton(){
let spliceIndex=arr.splice(parseInt(startIndex.value),parseInt(deleteCount.value),iteamAdd.value);
updatedArray.textContent=arr;
}