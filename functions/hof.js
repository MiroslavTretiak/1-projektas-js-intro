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

console.clear();
function firstLetter(text) {
    return text[0];
}
function lastLetter(text) {
    const pavIn = text[text.length - 1]
    return pavIn;
}


function giveMeLetter(text, func) {
    console.log('--------')
    return func(text);
}

console.log(firstLetter('Chuck'));
console.log(lastLetter('Chuck'));

console.log(giveMeLetter('Chuck', firstLetter));
console.log(giveMeLetter('Chuck', lastLetter));

console.clear();
// HOF panaudojimas
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const calc = (a, func, b) => func(a, b);

console.log(calc(7, sum, 5));
console.log(calc(7, diff, 5));


