window.onload = function () {
  a = document.getElementById("btn")
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      a.classList.add("show");
    } else {
      a.classList.remove("show");
    }
  }
  a.onclick = scrolltotop;
  function scrolltotop() {
    console.log("top")
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}