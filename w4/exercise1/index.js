const PRIORITY = {
  operationFilter: 0,
  operationSelect: 1
};

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
  const operations = [].slice.call(arguments, 1);
  operations.sort(function(operationOne, operationTwo) {
    return PRIORITY[operationOne.name] - PRIORITY[operationTwo.name];
  });

  // copy collection
  const clonedCollection = cloneCollection(collection);
  return operations.reduce(function(resultCollection, operation) {
    return operation(resultCollection);
  }, clonedCollection);
}

function select() {
  const properties = [].slice.call(arguments);

  return function operationSelect(collection) {
    return collection.map(function(item) {
      return cloneItem(item, properties);
    });
  };
}

function filterIn(property, values) {
  return function operationFilter(collection) {
    return collection.filter(function(item) {
      let value = item[property];

      return values.indexOf(value) > -1;
    });
  };
}

function cloneCollection(collection) {
  return collection.map(function(item) {
    const properties = Object.keys(item);
    return cloneItem(item, properties);
  });
}

function cloneItem(item, properties) {
  let newItem = {};
  for (let i = 0; i < properties.length; i++) {
    let property = properties[i];
    if (item.hasOwnProperty(property)) {
      newItem[property] = item[property];
    }
  }
  return newItem;
}

// exports
module.exports = {
  query: query,
  select: select,
  filterIn: filterIn
};
