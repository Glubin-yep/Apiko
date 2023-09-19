// Дано: Функція приймає три параметри: масив обєктів [{}, {}],
//  назву поля обєкту (string), значення (string)
// Результат: Вивести у консоль новий масив з якого видалені 
// усі обєкти в яких keyName буде дорівнювати value
// Приклад:
// removeObj([{age: 1}, {age: 2}, {age: 2}, {year: 2}], "age", 2) => [ { age: 1 }, { year: 2 } ]

function removeObj(inputArray, keyName, valueToRemove) {
    const filteredArray = inputArray.filter(obj => obj[keyName] !== valueToRemove);
    
    return filteredArray;
}

const inputArray = [{age: 1}, {age: 2}, {age: 2}, {year: 2}];
const keyName = "age";
const valueToRemove = 2;
const resultArray = removeObj(inputArray, keyName, valueToRemove);

console.log(resultArray);
