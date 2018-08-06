/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function(operations, callback) {
  const promises = operations.map(operation => {
    return new Promise((resolve, reject) => {
      operation((error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
  });

  Promise.all(promises).then(
    results => {
      callback(null, results);
    },
    error => {
      callback(error, null);
    }
  );
};
