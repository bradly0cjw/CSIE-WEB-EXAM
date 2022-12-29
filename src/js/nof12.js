function getUrlParam(arg) {
    let urlString = window.location.href;
    let url = new URL(urlString);
    let v = url.searchParams.has(arg);
    return v;
}
if (getUrlParam("dev") == false) {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', function (event) {


        if (event.key == 'F12') {
            // console.log("F12 was pressed");
            window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
            event.preventDefault();
            return false;
        }
        // disable I key
        if (event.ctrlKey && event.shiftKey && event.key == 'I') {
            window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
            event.preventDefault();
            return false;
        }

        // disable J key
        if (event.ctrlKey && event.shiftKey && event.key == 'J') {
            window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
            event.preventDefault();
            return false;
        }

        // disable U key
        if (event.ctrlKey && event.key == 'K') {
            window.location.href = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
            event.preventDefault();
            return false;
        }
    });
}else{
    window.alert("F12 is enable again")
}