function switchOff(){
    const bulb= document.getElementById("bulbImage")
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    const catImage=document.getElementById("catImage")
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").innerHTML=("switchOff");
    document.getElementById("onSwitch").style.backgroundColor="#22c55e";
    document.getElementById("offSwitch").style.backgroundColor="#cbd2d9";
}                                                           

function switchOn(){
    const bulb=document.getElementById("bulbImage") 
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    const catImage=document.getElementById("catImage")
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").innerHTML=("switchON");
    document.getElementById("offSwitch").style.backgroundColor="#e12d39";
    document.getElementById("onSwitch").style.backgroundColor="#cbd2d9";
}
