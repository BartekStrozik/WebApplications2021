document.addEventListener("keydown", e => {
    let baloon = document.getElementById("baloon");
    if(baloon.getAttribute("exploded")){
        return;
    }
    if(e.code === "ArrowUp"){
        let fontSizeText = window.getComputedStyle(baloon).getPropertyValue('font-size');
        let fontSize = fontSizeText.slice(0, -2);
        if(fontSize >= 700){
            baloon.innerText = String.fromCodePoint(0x1F4A5);
            baloon.setAttribute("exploded", true);
            return;
        }
        baloon.style.fontSize = Math.round(fontSize * 1.1) + "px";
    }
    else if (e.code === "ArrowDown"){
        let fontSizeText = window.getComputedStyle(baloon).getPropertyValue('font-size');
        let fontSize = fontSizeText.slice(0, -2);
        if(fontSize <= 50) return;
        baloon.style.fontSize = Math.round(fontSize / 1.1) + "px";
    }

});