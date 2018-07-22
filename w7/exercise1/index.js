module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection(array) {
  if (array === undefined) {
    this.collection = [];
  } else {
    this.collection = array;
  }
  //this.collection = array || [];
}

let methods = {
  append: function(element) {
    if (typeof element === 'object') {
      for (let i = 0; i < element.collection.length; i++) {
        this.collection.push(element.collection[i]);
      }
    } else {
      this.collection.push(element);
    }
  },

  values: function() {
    return this.collection;
  },

  count: function() {
    return this.collection.length;
  },

  at: function(position) {
    if (position <= 0 || position > this.collection.length) {
      // may be >=
      return null;
    } else {
      return this.collection[position - 1];
    }
  },

  removeAt: function(positionClear) {
    if (
      positionClear <= 0 ||
      positionClear > this.collection.length ||
      undefined
    ) {
      return false;
    } else {
      this.collection.splice(positionClear - 1, 1);
      return true;
    }
  }
};

Collection.prototype = Object.create(methods);

Collection.from = function(array) {
  let collection = new Collection(array);
  return collection;
};
