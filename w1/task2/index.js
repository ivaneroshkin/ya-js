/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function(hours, minutes) {
  var validityHours;
  var validityMinutes;

  validityHours = hours >= 0 && hours <= 23 ? true : false;
  validityMinutes = minutes >= 0 && minutes <= 59 ? true : false;

  if (validityHours && validityMinutes) {
    return true;
  } else {
    return false;
  }
};
