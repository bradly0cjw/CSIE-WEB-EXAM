document.addEventListener("DOMContentLoaded", changebackground())

function changebackground() {
    loop = setInterval(function () {
        var nowtime = new Date().getHours();
        var hours = parseInt(nowtime)
        var background = document.getElementById("hero");
        var menu = document.getElementById("menuimage");
        var title = document.getElementById("title");
        if (background != null) {
            classlist(background, hours)
            clearInterval(loop)
        }
        if (menu != null) {
            style(menu, hours)
            clearInterval(loop)
        }
        if (title != null) {
            style(title, hours)
            clearInterval(loop)
        }
    }, 1)
}
function classlist(x, hours) {
    if (hours >= 6 && hours < 16) {
        x.classList.remove("loading")
        x.classList.add("day");
        x.classList.remove("evening");
        x.classList.remove("night");
    } else if (hours >= 16 && hours < 19) {
        x.classList.remove("loading")
        x.classList.remove("day");
        x.classList.add("evening");
        x.classList.remove("night");
    } else if (hours < 6 || hours >= 19) {
        x.classList.remove("loading")
        x.classList.remove("day");
        x.classList.remove("evening");
        x.classList.add("night");
    }
}
function style(x, hours) {
    if (hours >= 6 && hours < 16) {
        x.style.backgroundImage = "url(src/img/Day.jpg)";
    } else if (hours >= 16 && hours < 19) {
        x.style.backgroundImage = "url(src/img/Evening.jpg)";
    } else if (hours < 6 || hours >= 19) {
        x.style.backgroundImage = "url(src/img/Night.jpg)";
    }
}