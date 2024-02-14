/*

HOF - higher order function
*/

const mathFunction = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

function calculator(a, opera, b) {
    return mathFunction[opera](a, b);
}

const res1 = calculator(7, '+', 5);
const res2 = calculator(7, '-', 5);
const res3 = calculator(7, '*', 5);
const res4 = calculator(7, '/', 5);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);