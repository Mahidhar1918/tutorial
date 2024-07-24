function switchOff(){
    const bulb= document.getElementById("bulbImage")
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    const catImage=document.getElementById("catImage")
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("SwitchStatus").innerHTML=("SwitchON")
    document.getElementById("switchColorr ").style.backgroundColor="#cbd2d9"
    document.getElementById("")
}
function switchOn(){
    const bulb=document.getElementById("bulbImage") 
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("SwitchStatus").innerHTML=("OFF THE SWITCH")
}
