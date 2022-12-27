console.log(document.styleSheets[0].cssRules[1])
setInterval(function () {
    document.styleSheets[0].cssRules[1].style.removeProperty('display')
}, 2000)