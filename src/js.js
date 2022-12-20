console.log(document.styleSheets[0].cssRules[12])
setInterval(function(){
    document.styleSheets[0].cssRules[12].style.removeProperty('display')},2000)