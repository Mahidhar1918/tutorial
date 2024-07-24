let stopLight = document.getElementById("stopButton")
let readyLight = document.getElementById("readyButton")
let goLight = document.getElementById("goButton")
let stopBulb = document.getElementById("StopBulb")
let readyBulb = document.getElementById("ReadyBulb")
let goBulb = document.getElementById("GoBulb")



function stopButtonLight() {
    stopLight.style.backgroundColor = "#cf1124";
    stopBulb.style.backgroundColor = "#cf1124";

    readyLight.style.removeProperty("background-Color")
    readyBulb.style.removeProperty("background-Color")
   


    goLight.style.removeProperty("background-Color")
    goBulb.style.removeProperty("background-Color")
}



function readyButtonLight() {
    readyLight.style.backgroundColor = "#f7c948";
    readyBulb.style.backgroundColor = "#f7c948";

    stopLight.style.removeProperty("background-Color")
    stopBulb.style.removeProperty("background-Color")


    goLight.style.removeProperty("background-Color")
    goBulb.style.removeProperty("background-Color")
}

function goButtonLight() {

    goLight.style.backgroundColor = "#199473";
    goBulb.style.backgroundColor = "#199473";



    readyLight.style.removeProperty("background-Color")
    readyBulb.style.removeProperty("background-Color")



    stopLight.style.removeProperty("background-Color")
    stopBulb.style.removeProperty("background-Color")

}