/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
  var appendMinutes = 0;
  var appendHours = 0;

  var getOptimalSizeNumber = function(a) {
    var b = '0';
    a = b + String(a);
    return a;
  };

  if ((interval.lenght = 1)) {
    getOptimalSizeNumber(interval);
  }

  // проверка минут
  appendMinutes = minutes + interval;
  if (appendMinutes > 60) {
    appendHours = Math.floor(appendMinutes / 60);
    minutes = appendMinutes % 60;
    hours = hours + appendHours;
  } else if ((appendMinutes = 60)) {
    hours = hours + 1;
    minutes = '00';
  } else {
    minutes = appendMinutes;
  }

  // проверка часов
  if (hours >= 24) {
    hours = hours % 24;
    if (hours == 0) {
      hours = '00';
    }
  }

  if ((minutes.lenght = 1)) {
    getOptimalSizeNumber(minutes);
  }
  if ((hours.lenght = 1)) {
    getOptimalSizeNumber(hours);
  }

  var solutionArray = [];
  solutionArray.push(hours);
  solutionArray.push(':');
  solutionArray.push(minutes);
  return String(solutionArray.join(''));
};
