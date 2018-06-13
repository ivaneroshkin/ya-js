/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function(tweet) {
  var resultArray = [];
  var filterString = function(str) {
    if (str.indexOf('#') !== -1) {
      str = str.substr(1, str.length);
      resultArray.push(str);
    }
  };

  var hashTagsArray = [];
  hashTagsArray = tweet.split(' ');
  hashTagsArray.forEach(filterString);
  return resultArray;
};
