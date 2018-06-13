// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {
  // ...
  // var commandName = ... ; возможно проверка на первое слово в строке
  // ...

  // Обработка команды ADD
  if (commandName === 'ADD') {
    // ...

    // Не забыть вернуть результат выполнения функции addContact
    return addContact(/**/);
  }

  // ...Обработка других команд...
};
