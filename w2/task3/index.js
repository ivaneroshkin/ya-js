// Телефонная книга
const phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {
  const words = command.split(' ');
  const commandName = words[0];

  // Обработка команды 'ADD'
  if (commandName === 'ADD') {
    return addContact(command);
  }

  // Обработка команды 'REMOVE_PHONE'
  if (commandName === 'REMOVE_PHONE') {
    return removeContact(command);
  }

  // Обработка команды 'SHOW'
  if (commandName === 'SHOW') {
    return showPhoneBook();
  }
};

function addContact(command) {
  const words = command.split(' ');
  const commandName = words[0];
  // генерация имени
  const nameContact = words[1];
  const newNameContact = nameContact + ':';
  // генерация номеров
  const numbersContact = words.slice(2);
  const newNumbersContact = numbersContact.join(' ');
  const contactString = newNameContact + ' ' + newNumbersContact;

  // проверка массива
  if (Array.isArray(phoneBook.contacts)) {
    // добавление телефона к старому контакту или добавление нового
    let counter = 0;
    phoneBook.contacts.forEach(str => {
      const firstWord = str.substr(0, str.indexOf(' '));
      if (firstWord === newNameContact) {
        const oldContact = str + ', ' + newNumbersContact;
        const indexStr = phoneBook.contacts.indexOf(str);
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
}

function showPhoneBook() {
  return phoneBook.contacts;
}

function removeContact(command) {
  const words = command.split(' ');
  const commandName = words[0];
  // получить номер и массив для сортировки
  let newCounter = 0;
  phoneBook.filtered = [];
  const deletePhone = words[1];
  phoneBook.contacts.forEach(element => {
    const newArray = element.split(' ');
    const findingName = newArray.slice(0, 1);
    const findingArray = newArray.slice(1);
    const filteredArray = [];
    for (let k = 0; k < findingArray.length; k++) {
      const element = findingArray[k];
      const replacedElement = element.replace(',', '');
      if (replacedElement === deletePhone) {
        newCounter = 1;
      } else {
        filteredArray.push(replacedElement);
      }
    }
    let resultString = '';
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
      const final = findingName + ' ' + resultString;
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
}
