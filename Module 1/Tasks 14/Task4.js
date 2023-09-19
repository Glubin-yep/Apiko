// Дано: Функція приймає Об’єкт типу {[name]: {age: number, city: string}}
// Результат: Вивести у консоль масив із іменами людей які із міста "London" та старше 18 років
// Приклад:
// {Max: {age: 23, city: “London”}, Mike: {age: 20: city: “NY”}} => [“Max”]

const input = { Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } }


function findUser(object) {
    arrResult = []
    for(const i in object){
        if(object[i].age >= 18 && object[i].city === "London"){
            arrResult.push(i)
        }
    }
    return arrResult;
}

console.log(findUser(input)); 