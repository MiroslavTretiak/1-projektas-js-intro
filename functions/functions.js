/*
FUNCTION
Perpanaudojamas logikos blokas

function example (parametrai) {
    // 1. parametru validavimas (typeof)
    // 2. logika
    // 3. rezultato validavimas 
    // 4. rezulatoto grazinimas
}
*/

const a1 = 7;
const a2 = 5;
const a3 = 1 + a1 * 2 + a2 * 3 + 3;
console.log(a3);

const b1 = 13;
const b2 = 13;
const b3 = 1 + b1 * 2 + b2 * 3 + 3;
console.log(b3);

const c1 = 7;
const c2 = 77;
const c3 = 1 + c1 * 2 + c2 * 3 + 3;
console.log(c3);

function empty() {
}

const x1 = empty();
console.log(x1);

function labas(name) {
    return `Labas, as ${name}`;
}
const x2 = labas('Krabas');
console.log(x2);

function double(number) {
    return number * 2;
}
const x3 = double(10);
console.log(x3);

function introduction(name, age) {
    return `Sveikia, mano vardas ${name} ir man ${age} metai`
}

const x4 = introduction('Miroslav', 25);
console.log(x4);

// 0 - > 0 Eur
// 10 - > 10 Eur
// 50 -> 50 Eur
// 90 -> 90 Eur
// 99 -> 99 Eur
// 100 - > 50 Eur
// 102 -> 51 Eur
// 200 -> 100 Eur

function price(amount) {
    if (amount < 100) {
        return amount + ' Eur'
    } else {
        return amount / 2 + ' Eur';
    }
}
console.clear();

function betterPrice(amount) {
    // validacijos

    // logika
    let result = '';

    if (amount < 100) {
        result = amount + ' Eur';
    } else {
        result = (amount * 0.5) + ' Eur';
    }

    // rezultato validacija

    // rezultato grazinimas
    return result;
}

console.log(price(0), '->', '0 Eur')
console.log(price(10), '->', '10 Eur');
console.log(price(50), '->', '50 Eur');
console.log(price(90), '->', '90 Eur');
console.log(price(99), '->', '99 Eur');
console.log(price(100), '->', '50 Eur');
console.log(price(102), '->', '51 Eur');
console.log(price(200), '->', '100 Eur');

console.log(price(-200), '->', 'Error');
console.log(price(Infinity), '->', 'Error');
console.log(price(-Infinity), '->', 'Error');
console.log(price(NaN), '->', 'Error');
console.log(price(true), '->', 'Error');
console.log(price('dsad'), '->', 'Error');
console.log(price(undefined), '->', 'Error');
console.log(price(), '->', 'Error');
console.log(price(price), '->', 'Error');

console.clear();

function betterPrice(amount) {
    // validacijos
    if (typeof amount !== 'number') {
        return 'ERROR: duok skaciaus tipo reiksme';
    }
    if (amount < 0) {
        return 'ERROR: duok teigiama skaiciu'
    }
    if (amount === Infinity) {
        return 'ERROR; skaicius negalii buti Infinity'
    }
    if (isNaN(amount)) {
        return 'ERROR: duok normalu skacius'
    }
    // logika
    let result = '';

    if (amount < 100) {
        result = amount + ' Eur';
    } else {
        result = (amount * 0.5) + ' Eur';
    }

    // rezultato validacija
    if (result === '') {
        return 'ERROR: kazkas negerai su logika';
    }
    // rezultato grazinimas
    return result;
}

console.log(betterPrice(0), '->', '0 Eur')
console.log(betterPrice(10), '->', '10 Eur');
console.log(betterPrice(50), '->', '50 Eur');
console.log(betterPrice(90), '->', '90 Eur');
console.log(betterPrice(99), '->', '99 Eur');
console.log(betterPrice(100), '->', '50 Eur');
console.log(betterPrice(102), '->', '51 Eur');
console.log(betterPrice(200.01), '->', '100 Eur');


console.log(betterPrice(-200), '->', 'Error');
console.log(betterPrice(Infinity), '->', 'Error');
console.log(betterPrice(-Infinity), '->', 'Error');
console.log(betterPrice(NaN), '->', 'Error');
console.log(betterPrice(true), '->', 'Error');
console.log(betterPrice('dsad'), '->', 'Error');
console.log(betterPrice(undefined), '->', 'Error');
console.log(betterPrice(), '->', 'Error');
console.log(betterPrice(betterPrice), '->', 'Error');
/*
// Kaip atsikratyti NaN ?

if (Number.isNaN(NaN)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

if (isNaN(NaN)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

if (isFinite(NaN)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

if ('' + NaN === 'NaN') {
    console.log('Taip');
} else {
    console.log('Ne');
}
*/