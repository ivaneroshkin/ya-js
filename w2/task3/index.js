// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

var addContact = function(command) {
  var words = command.split(' ');
  var commandName = words[0];
  // генерация имени
  var nameContact = words[1];
  var newNameContact = nameContact + ':';
  // генерация номеров
  var numbersContact = words.slice(2);
  var newNumbersContact = numbersContact.join(' ');
  var contactString = newNameContact + ' ' + newNumbersContact;
  // проверка массива
  if (Array.isArray(phoneBook.contacts)) {
    // добавление телефона к старому контакту или добавление нового
    let counter = 0;
    phoneBook.contacts.forEach(str => {
      var firstWord = str.substr(0, str.indexOf(' '));
      if (firstWord === newNameContact) {
        var oldContact = str + ', ' + newNumbersContact;
        var indexStr = phoneBook.contacts.indexOf(str);
        phoneBook.contacts.splice(indexStr, 1);
        phoneBook.contacts.push(oldContact);
        phoneBook.contacts.sort();
      } else {
        ++counter;
      }
      if (counter === phoneBook.contacts.length) {
        phoneBook.contacts.push(contactString);
        phoneBook.contacts.sort();
      }
    });
  } else {
    phoneBook.contacts = [];
    phoneBook.contacts.push(contactString);
    phoneBook.contacts.sort();
  }
};

var showPhoneBook = function() {
  return phoneBook.contacts;
};

var removeContact = function(command) {
  var words = command.split(' ');
  var commandName = words[0];
  // получить номер и массив для сортировки
  var newCounter = 0;
  phoneBook.filtered = [];
  var deletePhone = words[1];
  phoneBook.contacts.forEach(element => {
    var newArray = element.split(' ');
    var findingName = newArray.slice(0, 1);
    var findingArray = newArray.slice(1);
    var filteredArray = [];
    for (let k = 0; k < findingArray.length; k++) {
      const element = findingArray[k];
      var replacedElement = element.replace(',', '');
      if (replacedElement === deletePhone) {
        newCounter = 1;
      } else {
        filteredArray.push(replacedElement);
      }
    }
    var resultString;
    if (filteredArray.length > 1) {
      resultString = filteredArray.join(', ');
    } else if (filteredArray.length === 1) {
      resultString = filteredArray.join();
    } else {
      resultString = '';
    }
    // проверка длины массива
    if (resultString === '') {
      return;
    } else {
      var final = findingName + ' ' + resultString;
      element = final;
      phoneBook.filtered.push(element);
    }
  });
  phoneBook.contacts = phoneBook.filtered;

  if (newCounter) {
    return true;
  } else {
    return false;
  }
};

module.exports = function(command) {
  var words = command.split(' ');
  var commandName = words[0];

  // Обработка команды ADD
  if (commandName === 'ADD') {
    return addContact(command);
  }

  // обработка команды 'REMOVE_PHONE'
  if (commandName === 'REMOVE_PHONE') {
    return removeContact(command);
  }

  // обработка команды 'SHOW'
  if (commandName === 'SHOW') {
    return showPhoneBook();
  }
};
