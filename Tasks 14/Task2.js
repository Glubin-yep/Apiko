// Дано: функція яка приймає масив чисел
// Результат: вивести у консоль "YES" якщо усі числа у масив парні та "NO" в іншому випадку
// Приклад:
// [1, 2, 3, 9] => “NO”
// [2, 4, 6] => “YES”

let oddArray = [2, 4, 6]

let evenArray = [1, 2, 3, 9]


function isOddArray(arr) {
    arr.forEach(element => {
        isOdd = (element % 2 !== 0) ? false : true;
    });
    return isOdd;
}
 
console.log(isOddArray(oddArray));
console.log(isOddArray(evenArray));