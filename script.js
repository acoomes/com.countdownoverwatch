/* Wait for the DOM to load, then run getCountdown every 0.5 seconds.
 */
window.onload = function() {
  setInterval(getCountdown, 500);
}
/* Subtract the current number of milliseconds (from epoch) from the number
 * of milliseconds as of June 21, 2016 (Overwatch release).
 */
var getMillis = function() {
  var now = new Date();
  var launch = new Date(2016, 5, 21, 0, 0, 0);
  var millis = launch.getTime() - now.getTime();
  return millis;
}
/* Convert milliseconds into days.
 * Return the floored number of days.
 */
var daysUntil = function() {
  var days = getMillis() / (1000*60*60*24);
  return Math.floor(days);
}
/* Convert milliseconds into hours.
 * Return the number of hours, rounded up to the nearest integer.
 */
var hoursUntil = function() {
  var hours = getMillis() / (1000*60*60);
  return Math.ceil(hours % 24);
}
/* Convert milliseconds into minutes.
 * Return the floored number of minutes.
 */
var minUntil = function() {
  var minutes = getMillis() / (1000*60);
  return Math.floor(minutes % 60);
}
/* Convert milliseconds into seconds.
 * Return the floored number of seconds, rounded to the nearest integer.
 */
var secUntil = function() {
  var seconds = getMillis() / (1000);
  return Math.round(seconds % 60);
}
/* Fill in the timer divs with the days, hours, minutes, and seconds.
 */
var getCountdown = function() {
  document.getElementById("days").innerHTML = daysUntil() + " days ";
  document.getElementById("hours").innerHTML = hoursUntil() + " hours ";
  document.getElementById("minutes").innerHTML = minUntil() + " minutes ";
  document.getElementById("seconds").innerHTML = secUntil() + " seconds";
}
