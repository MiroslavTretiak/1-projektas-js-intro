/*
Unary - vienas 
Binary - du
Ternary - trys
*/

// unary
const a = 5;

// binary

// Ternary
let g1 = 0;

if (1 > 2) {
    g1 = 3;
} else {
    g1 = 4;
}

console.log(g1);
// Jei 1 daugiau uz 2 priskirt 3 kitu atveju 4;
const t1 = 1 > 2 ? 3 : 4;
console.log(t1);

const isLoggedIn = true;
let msgLog = '...';

if (isLoggedIn === true) {
    msgLog = ("Sveiki prisijunge!");
}

const name = 'Palangos turgus';
const price = 7;
const priceToHigh = 2;

// Palangos turgus prekiauja per brangiomis prekemis!
// Palangos turgus prekiauja iperkamomis prekemis!

let msgPalanga = '';

if (price <= priceToHigh) {
    msgPalanga = `${name} prekiauja iperkamomis prekemis!`;
} else {
    msgPalanga = `${name} prekiauja per brangiomis prekemis!`;
}

console.log(msgPalanga);

const ternaryPalanga = price <= priceToHigh
    ? `${name} prekiauja iperkamomis prekemis!`
    : `${name} prekiauja per brangiomis prekemis!`;
console.log(ternaryPalanga);

const ternaryPalanga2 = `${name} prekiauja ${price <= priceToHigh ? 'iperkamomis' : 'per brangiomis'} prekemis!`;
console.log(ternaryPalanga2);

const kainosText = price <= priceToHigh ? 'iperkamomis' : 'per brangiomis';
const ternaryPalanga3 = `${name} prekiauja ${kainosText} prekemis!`;
console.log(ternaryPalanga3);