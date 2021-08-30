/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  /*** Countdown Timer */
  $("#days")
  .countdown("2021/08/30 14:00 GMT", function (event) {
      $(this).html(event.strftime('%D days'))
  });

  $("#hours")
  .countdown("2021/08/30 14:00 GMT", function (event) {
      $(this).html(event.strftime('%H hours'))
  });

  $("#minutes")
  .countdown("2021/08/30 14:00 GMT", function (event) {
      $(this).html(event.strftime('%M minutes'))
  });

  $("#seconds")
  .countdown("2021/08/30 14:00 GMT", function (event) {
      $(this).html(event.strftime('%S seconds'))
  });

