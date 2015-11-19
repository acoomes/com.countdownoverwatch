window.onload = function() {
  setInterval(getCountdown, 500);
}
var daysUntil = function() {
  var now = new Date();
  var launch = new Date(2016, 5, 21, 0, 0, 0);
  var millis = launch.getTime() - now.getTime();
  var days = millis / (1000*60*60*24);
  return Math.floor(days);
}
var hoursUntil = function() {
  var now = new Date();
  var launch = new Date(2016, 5, 21, 0, 0, 0);
  var millis = launch.getTime() - now.getTime();
  var hours = millis / (1000*60*60);
  return Math.ceil(hours % 24);
}
var minUntil = function() {
  var now = new Date();
  var launch = new Date(2016, 5, 21, 0, 0, 0);
  var millis = launch.getTime() - now.getTime();
  var minutes = millis / (1000*60);
  return Math.floor(minutes % 60);
}
var secUntil = function() {
  var now = new Date();
  var launch = new Date(2016, 5, 21, 0, 0, 0);
  var millis = launch.getTime() - now.getTime();
  var seconds = millis / (1000);
  return Math.round(seconds % 60);
}
var getCountdown = function() {
  document.getElementById("days").innerHTML = daysUntil() + " days ";
  document.getElementById("hours").innerHTML = hoursUntil() + " hours ";
  document.getElementById("minutes").innerHTML = minUntil() + " minutes ";
  document.getElementById("seconds").innerHTML = secUntil() + " seconds";
}
