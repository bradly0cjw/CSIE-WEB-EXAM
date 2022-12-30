var x = setInterval(function () {
    var nowtime = new Date().getHours();
    // var hours = (Math.floor((nowtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) * (1);
    var hours = parseInt(nowtime)
    var menu = document.getElementById("title");
    if (hours >= 6 && hours < 16) {
        menu.style.backgroundImage="url(src/img/Day.jpg)";
    } else if (hours >= 16 && hours < 19) {
        menu.style.backgroundImage="url(src/img/Evening.jpg)";
    } else if (hours < 6 || hours >= 19) {
        menu.style.backgroundImage="url(src/img/Night.jpg)";
    }

}, 1000);