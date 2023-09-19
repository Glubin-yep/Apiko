// Дано: Функція яка приймає стрічку яка містить 
// мінімум 1 слово та пробіли. Перший та останній символ
// не пробіли. Слова можуть бути розділені не лише одним пробілом.

// Результат: Вивести у консоль кількість слів у стрічці.

function countWords(inputString) {
    const words = inputString.trim().split(/\s+/);

    return words.length;
}

const inputString = "   This  is  a test   string  ";
const wordCount = countWords(inputString);
console.log(`Count words in string: ${wordCount}`);
