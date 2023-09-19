// Дано: функція яка приймає масив чисел або стрічок.
// Результат: вивести у консоль масив унікальних значень початкового масиву
// Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function uniqueValues(arr) {
    const uniqueSet = new Set(arr);
    
    const uniqueArray = [...uniqueSet];
    
    return uniqueArray;
}

const inputArray = [2, 3, 1, 3, 3, 7, 3, 5, 6, 8, 8, 2, 3, 3];
const resultArray = uniqueValues(inputArray);

console.log(resultArray);
