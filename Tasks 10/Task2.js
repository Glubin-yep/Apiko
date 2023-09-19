// Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];
// Результат: Вивести у консоль суму чисел у масиві.

initialArray = [3, 2, "2", null, 1.5, 9.5, undefined, "a2"];

calculateSumOfArray(initialArray)

function calculateSumOfArray(arr) {
    sum = 0

    arr.forEach(element => {
        sum += (typeof element === "number") ? element : 0;

        sum += typeof element === "string" ? (isNaN(Number(element)) ? 0 : Number(element)) : 0;
    });
    console.log(sum)
}


