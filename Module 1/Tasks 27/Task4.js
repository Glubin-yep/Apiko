// Створити клас який містить поле name.
// Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
// Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання

class MyClass {
    constructor() {
        this.name = 'Initial Value';

        this.nullifyTimeout = setTimeout(() => {
            this.name = null;
            console.log('Field name has been nullified.');
        }, 5000);
    }

    cancelNullification() {
        clearTimeout(this.nullifyTimeout);
        console.log('Nullification canceled.');
    }
}

const myObject = new MyClass();

setTimeout(() => {
    myObject.cancelNullification();
}, 3000);
