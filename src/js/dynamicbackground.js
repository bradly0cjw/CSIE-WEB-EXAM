var x = setInterval(function () {
    var nowtime = new Date().getHours();
    // var hours = (Math.floor((nowtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) * (1);
    var hours = parseInt(nowtime)
    var background = document.getElementById("hero");
    if (hours >= 6 && hours < 16) {
        background.classList.add("day");
        background.classList.remove("evening");
        background.classList.remove("night");
    } else if (hours >= 16 && hours < 19) {
        background.classList.remove("day");
        background.classList.add("evening");
        background.classList.remove("night");
    } else if (hours < 6 || hours >= 19) {
        background.classList.remove("day");
        background.classList.remove("evening");
        background.classList.add("night");
    }

}, 1000);