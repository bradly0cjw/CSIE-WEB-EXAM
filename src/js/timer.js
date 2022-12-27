// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'src/css/countdown.css';
// Append link element to HTML head
head.appendChild(link);
link.onload = cssdone
function cssdone() {
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', work);
  } else {
    work();
  }
  function work() {
    document.getElementById("countdown-day").innerHTML = ("?");
    document.getElementById("countdown-hour").innerHTML = ("?");
    document.getElementById("countdown-minute").innerHTML = ("?");
    document.getElementById("countdown-second").innerHTML = ("?");
    // Set the date we're counting down to

    var countDownDate = new Date("Mar 14, 2023 08:00:00").getTime();

    // console.log(data.countDown)
    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      var now = new Date().getTime();

      // countdown or countup
      var mode = countDownDate - now;
      if (mode > 0) {
        // Find the distance between now and the count down date (countup)  
        var distance = countDownDate - now;
      } else {
        // Find the distance between now and the count down date (countup)
        var distance = now - countDownDate;
      }

      // Time calculations for days, hours, minutes and seconds
      var days = (Math.floor(distance / (1000 * 60 * 60 * 24))) * (1);
      var hours = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) * (1);
      var minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))) * (1);
      var seconds = (Math.floor((distance % (1000 * 60)) / 1000)) * (1);
      if (seconds < 10) {
        seconds = ("0" + seconds)
      }
      if (minutes < 10) {
        minutes = ("0" + minutes)
      }
      if (hours < 10) {
        hours = ("0" + hours)
      }
      if (days < 10) {
        days = ("0" + days)
      }
      document.getElementById("countdown-day").innerHTML = (days);
      document.getElementById("countdown-hour").innerHTML = (hours);
      document.getElementById("countdown-minute").innerHTML = (minutes);
      document.getElementById("countdown-second").innerHTML = (seconds);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-day").innerHTML = ("00");
        document.getElementById("countdown-hour").innerHTML = ("00");
        document.getElementById("countdown-minute").innerHTML = ("00");
        document.getElementById("countdown-second").innerHTML = ("00");
      }
    }
      , 1000);

  }
}