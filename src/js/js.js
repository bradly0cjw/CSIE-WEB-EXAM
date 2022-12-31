document.addEventListener("DOMContentLoaded",menu())
function menu(){
    console.log(document.styleSheets[0].cssRules[1],"removed")
    document.styleSheets[0].cssRules[1].style.removeProperty('display')
}