/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
  var appendMinutes = 0;
  var appendHours = 0;

  appendMinutes = minutes + interval;
  if (appendMinutes > 60) {
    appendHours = Math.floor(appendMinutes / 60);
    minutes = appendMinutes % 60;
    hours = hours + appendHours;
  } else if (appendMinutes == 60) {
    hours = hours + 1;
    minutes = '00';
  } else {
    minutes = appendMinutes;
  }

  if (hours >= 24) {
    hours = hours % 24;
    if (hours == 0) {
      hours = '00';
    }
  }

  if ((hours.lenght = 1)) {
    hours = '0' + hours;
    hours.substring(hours.length - 2, hours.length);
  }

  if ((minutes.lenght = 1)) {
    minutes = '0' + minutes;
  }

  var solutionArray = [];
  solutionArray.push(hours.substring(hours.length - 2, hours.length));
  solutionArray.push(':');
  solutionArray.push(minutes.substring(minutes.length - 2, minutes.length));
  return String(solutionArray.join(''));
};
