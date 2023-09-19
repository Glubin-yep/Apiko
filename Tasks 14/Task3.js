// Дано: функція яка приймає масив елементів будь-яких типів
// Результат: вивести у консоль масив який містить лише стрічки початкового масиву
// Приклад:
// [2, “string”, 3, , , ”test”] => [“string”, “test”]

const arr = [2, "string", 3, 3, 3, "test"]

function filterArray(arr) {

    let resultArray = []

    arr.forEach(element => {
        if (typeof element === 'string') {
            resultArray.push(element);
        }
    });


    return resultArray;
}

console.log(filterArray(arr));