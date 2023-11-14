// На лекції ми використовували API jsonplaceholder - 'https://jsonplaceholder.typicode.com/'
// Можна перейти за посиланням і ще раз ознайомитись з даним API
// Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
// const baseUrl = "https://jsonplaceholder.typicode.com";
// Будемо використовувати ресурс /users щоб отримати дані користувачів
// Завдання: Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.
// Очікуваний результат - масив користувачів

const baseUrl = "https://jsonplaceholder.typicode.com";
const usersUrl = `${baseUrl}/users`;

fetch(usersUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(users => {
        console.log('List of users:', users);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
