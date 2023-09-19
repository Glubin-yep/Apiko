// 1) Створити ф-ію конструктор Calculator та до її 
// прототипу добавити два методи sum(a,b) та subtract(a,b)
// 2) Створити ф-ію конструктор AdvancedCalculator
//  (наслідує методи від Calculator) та до її прототипу
//   добавити два методи multiply(a,b) та divide(a,b)

//1)
function Calculator() { }

Calculator.prototype.sum = function (a, b) {
    return a + b;
}

Calculator.prototype.subtruct = function (a, b) {
    return a - b;
}

const calc = new Calculator();

console.log(calc.sum(5, 6));
console.log(calc.subtruct(10, 5));

//2)

function AdvancedCalculator() { }

AdvancedCalculator.prototype = Object.create(Calculator.prototype);

AdvancedCalculator.prototype.multiply = function (a, b) {
    return a * b;
};

AdvancedCalculator.prototype.divide = function (a, b) {
    if (b === 0) {
        return "Ділення на нуль неможливе";
    }
    return a / b;
};

const advancedCalc = new AdvancedCalculator();
const resultMultiply = advancedCalc.multiply(4, 5);
const resultDivide = advancedCalc.divide(10, 2);

console.log("Multiply:", resultMultiply);
console.log("Divide:", resultDivide);