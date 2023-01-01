window.onload = function () {
  a = document.getElementById("btn")
  b = document.getElementById("down")
  if (a != null) {
    window.onscroll = function () { scrollFunction() };
    a.onclick = scrolltotop;
  }
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      a.classList.add("show");
    } else {
      a.classList.remove("show");
    }
  }
  function scrolltotop() {
    console.log("top")
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (b != null) {
    b.onclick = sdown;
  }
  function sdown() {
    var heigh = window.innerHeight
    window.scrollTo({ top: heigh, behavior: 'smooth' });
  }
}