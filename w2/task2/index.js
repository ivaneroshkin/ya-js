/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function(hashtags) {
  var newString = hashtags.join('-');
  var newLower = newString.toLowerCase();
  var supportArray = newLower.split('-');

  var supportObject = {};
  var getUnique = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      supportObject[str] = true;
    }
  };
  getUnique(supportArray);
  var resultArray = Object.keys(supportObject);
  var resultString = resultArray.join(', ');
  return resultString;
};
