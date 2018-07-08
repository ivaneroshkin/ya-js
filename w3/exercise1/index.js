/**
 * @param {String} newDate
 * @returns {Object}
 */

module.exports = function(newDate) {
  const match = newDate.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/);
  const date = new Date(match[1], match[2] - 1, match[3], match[4], match[5]);

  return {
    get value() {
      return formatDate(date);
    },

    add: function(value, duration) {
      checkValueAndDuration(value, duration);
      changeDate(date, value, duration);
      return this;
    },

    subtract: function(value, duration) {
      checkValueAndDuration(value, duration);
      changeDate(date, -1 * value, duration);
      return this;
    }
  };
};

// Check entree data
const availableDurations = ['years', 'months', 'days', 'hours', 'minutes'];
function checkValueAndDuration(value, duration) {
  if (value < 0) {
    throw new TypeError('Значение не может быть отрицательным');
  }
  if (availableDurations.indexOf(duration) === -1) {
    throw new TypeError('Неизвестная единица времени');
  }
}

// Add optional zero: "6" → "06"
function addZero(value) {
  value = String(value);
  return value.length < 2 ? '0' + value : value;
}

function formatDate(date) {
  let result = '';
  result += date.getFullYear();
  result += '-';
  result += addZero(date.getMonth() + 1); // 00 - first month
  result += '-';
  result += addZero(date.getDate());
  result += ' ';
  result += addZero(date.getHours());
  result += ':';
  result += addZero(date.getMinutes());
  return result;
}

function changeDate(date, value, duration) {
  switch (duration) {
    case 'years':
      value = date.getFullYear() + value;
      date.setFullYear(value);
      break;

    case 'months':
      value = date.getMonth() + value;
      date.setMonth(value);
      break;

    case 'days':
      value = date.getDate() + value;
      date.setDate(value);
      break;

    case 'hours':
      value = date.getHours() + value;
      date.setHours(value);
      break;

    case 'minutes':
      value = date.getMinutes() + value;
      date.setMinutes(value);
      break;

    default:
  }
}
