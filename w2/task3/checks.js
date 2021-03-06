// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

// Добавляем телефоны контакту Ivan
phoneBook('ADD Ivan 555-10-01, 555-10-03');
phoneBook('ADD Ivan 555-10-02');

// Проверка работы функции SHOW
assert.deepEqual(
  // Получаем содержимое телефонной книги
  phoneBook('SHOW'),
  ['Ivan: 555-10-01, 555-10-03, 555-10-02'],
  'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02"'
);

// Проверка работы функции REMOVE_PHONE
assert.equal(
  // Удаляем телефон 555-10-03
  phoneBook('REMOVE_PHONE 555-10-03'),
  true,
  'Телефон 555-10-03 успешно удален'
);
// Добавляем новый контакт
phoneBook('ADD Alex 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
  // Получаем содержимое телефонной книги
  phoneBook('SHOW'),
  ['Alex: 555-20-01', 'Ivan: 555-10-01, 555-10-02'],
  'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
);

// Удаляем телефон
phoneBook('REMOVE_PHONE 555-20-01');

// Проверка работы функции SHOW
assert.deepEqual(
  // Получаем содержимое телефонной книги
  phoneBook('SHOW'),
  ['Ivan: 555-10-01, 555-10-02'],
  'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
);

// Проверка работы функции REMOVE_PHONE отсутствующего телефона
assert.equal(
  // Удаляем телефон 666-10-03
  phoneBook('REMOVE_PHONE 666-10-03'),
  false,
  'Телефон 666-10-03 отсутствует'
);

// Добавляем телефоны контакту Olga
phoneBook('ADD Olga 777-15-11, 777-20-00');
phoneBook('ADD Olga 777-55-52');

// Удаляем телефон
phoneBook('REMOVE_PHONE 777-15-11');

// Проверка работы функции SHOW
assert.deepEqual(
  // Получаем содержимое телефонной книги
  phoneBook('SHOW'),
  ['Ivan: 555-10-01, 555-10-02', 'Olga: 777-20-00, 777-55-52'],
  'В телефонной книге: "Ivan: 555-10-01, 555-10-02", "Olga: 777-20-00, 777-55-52"'
);

// Проверка работы функции REMOVE_PHONE отсутствующего телефона
assert.equal(
  // Удаляем телефон 234-15-11
  phoneBook('REMOVE_PHONE 234-15-11'),
  false,
  'Телефон 234-15-11 отсутствует'
);

// Добавляем телефоны Taras и Boris
phoneBook('ADD Taras 123-45-67');
phoneBook('ADD Boris 255-00-01, 999-99-02');

// Проверка работы функции SHOW
assert.deepEqual(
  // Получаем содержимое телефонной книги
  phoneBook('SHOW'),
  [
    'Boris: 255-00-01, 999-99-02',
    'Ivan: 555-10-01, 555-10-02',
    'Olga: 777-20-00, 777-55-52',
    'Taras: 123-45-67'
  ],
  'В телефонной книге: "Boris: 255-00-01, 999-99-02", "Ivan: 555-10-01, 555-10-02", "Olga: 777-20-00, 777-55-52", "Taras: 123-45-67"'
);

console.info('OK!');
