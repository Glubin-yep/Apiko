//Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення.
//Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим значенням
//або виводить помилку в консоль якщо це не стрічка або колбек не є функцією

function isString(callback, value) {
  if (typeof value === 'string' && typeof callback === 'function') {
    callback(value);
  } else {
    console.error('Invalid input. Please provide a string and a callback function.');
  }
}

function handleString(str) {
  console.log('The string is:', str);
}

isString(handleString, 'Hello, World!');

isString(handleString, 123);
isString('not a function', 'Hello, World!');
