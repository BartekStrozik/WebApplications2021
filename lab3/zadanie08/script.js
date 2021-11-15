document.addEventListener("keydown", e => {
    let baloon = document.getElementById("baloon");
    if(baloon.getAttribute("exploded")){
        return;
    }
    let fontSizeText = window.getComputedStyle(baloon).getPropertyValue("font-size");
    let fontSize = fontSizeText.slice(0, -2);
    if(e.code === "ArrowUp"){
        if(fontSize >= 300){
            baloon.innerText = String.fromCodePoint(0x1F4A5);
            baloon.setAttribute("exploded", true);
            return;
        }
        baloon.style.fontSize = Math.round(fontSize * 1.1) + "px";
    }
    else if (e.code === "ArrowDown"){
        if(fontSize <= 50) return;
        baloon.style.fontSize = Math.round(fontSize / 1.1) + "px";
    }

});

const contextMenu = document.querySelector(".context-menu");
const baloon = document.getElementById("baloon");

function showContextMenu (show = true) {
    let baloonSizeText = window.getComputedStyle(baloon).getPropertyValue("font-size");
    let baloonSize = baloonSizeText.slice(0, -2);
    //console.log(baloon_size);
    contextMenu.style.display = show ? "block" : "none";
    contextMenu.textContent = "Rozmiar balonika: " + baloonSizeText;
    setTimeout(() => {
        document.querySelector(".context-menu").style.setProperty("display", "none");
    }, 1500);
}

baloon.addEventListener("contextmenu", e => {
    if(baloon.getAttribute("exploded") || !e.ctrlKey) return;
    e.preventDefault();
    showContextMenu(true);
});

window.addEventListener("click", e => {
    showContextMenu(false);
});