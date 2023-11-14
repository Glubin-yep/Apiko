// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції),
//  name, checked(за замовчуванням false). Для поля checked написати гетер та сетер
//   (добавити валідацію: поле може приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції),
//  name, items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id
// 3) Створити екземпляр класу TodoList;
// 4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
// 5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль
// ( у масиві items це поле має бути оновлене)
// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList
// (у масиві items має залишитись лише 2 екземпляри TodoItem)


function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

class TodoItem {
    constructor(name) {
        this.id = generateId();
        this.name = name;
        this._checked = false;
    }

    get checked() {
        return this._checked;
    }

    set checked(value) {
        if (typeof value === 'boolean') {
            this._checked = value;
        } else {
            console.error('Invalid value for checked. Please provide a boolean value.');
        }
    }
}

class TodoList {
    constructor(name) {
        this.id = generateId();
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        if (item instanceof TodoItem) {
            this.items.push(item);
        } else {
            console.error('Invalid item type. Please provide an instance of TodoItem.');
        }
    }

    removeItemById(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItemById(itemId) {
        return this.items.find(item => item.id === itemId);
    }
}

const todoList = new TodoList('My Todo List');

const item1 = new TodoItem('Task 1');
const item2 = new TodoItem('Task 2');
const item3 = new TodoItem('Task 3');
const item4 = new TodoItem('Task 4');

todoList.addItem(item1);
todoList.addItem(item2);
todoList.addItem(item3);
todoList.addItem(item4);

console.log('TodoList after adding items:');
console.log(todoList);

item1.checked = true;

console.log('TodoList after changing checked value:');
console.log(todoList);

const itemIdToRemove1 = item2.id;
const itemIdToRemove2 = item3.id;

todoList.removeItemById(itemIdToRemove1);
todoList.removeItemById(itemIdToRemove2);

console.log('TodoList after removing items:');
console.log(todoList);
