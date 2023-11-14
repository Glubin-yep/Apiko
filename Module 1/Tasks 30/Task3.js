// Завдання. Створити нового користувача - зробити POST запит на ендпоінт
// 'https://jsonplaceholder.typicode.com/users'.
// Використати fetch.
// Для нового користувача вказати поля name, username, email.
// Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
// Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
// Після отримання відповіді від API, перевірити чи запит виконався успішно
// Вивести у консоль результат

const baseUrl = "https://jsonplaceholder.typicode.com";
const newUser = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
};

fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(createdUser => {
        console.log('Result:', createdUser);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });