window.onload = function() {
  document.getElementById("timer").innerHTML = daysUntil() + " days";
}
var daysUntil = function() {
  var now = Date.now();
  var launch = Date.UTC(2016, 6, 21, 0, 0, 0);
  var millis = launch - now;
  var days = millis / (1000*60*60*24);
  return Math.floor(days);
}
