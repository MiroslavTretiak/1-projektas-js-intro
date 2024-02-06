/*

if - reiksmiu palyginimas

SABLONAI:
if() {}
if() {} else {}
if() {} else {} if () {}
if() {} else {} if () {} else {}
if() {}... else if () {} ...
if() {}... else if () {} ... else {}

PALYGINIMO OPERATORIAI:
-visi: >, <, >=, <=, ==, ===, !=, !==
-naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

*/

const amzius = 12;
const amziausRiba = 21;

console.log('START');

if (amzius >= amziausRiba) {
    console.log('Ko noresi?');
} else {
    console.log('Sry... per mazai metu');
}

console.log('END');

console.clear();

//const win = '98';
const win = 'xp';
let msgWin = 'Tu neturi windowsu??';

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else {
    msgWin = 'Neatpazinta OS...';
}

console.log(msgWin);

console.clear();

if ('4' == 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}
// Skirtumas tarp == ir === yra... tipai simboliu
if ('4' === 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

let a = 7;
const b = 5;
let msgAB = 'Default';
a += 1;

if (a == b) {
    msgAB = 'Lygus';
} else {
    msgAB = 'Skirtingi';
}
console.log(msgAB, a, b);

console.clear();

//  Code nesting

if (diena === 1) {
    if (laikas < 11) {
        console.log('Pirmos menesio dienos meniu: rytas');
    } else if (laikas < 16) {
        console.log('Pirmos menesio dienos meniu: diena');
    } else {
        console.log('Pirmos menesio dienos meniu: vakaras');
    }
} else if (diena === 24 || diena === 25) {
    console.log('Kaledinis meniu');
} else {
    if (laikas < 11) {
        console.log('Standartinis meniu: rytas');
    } else if (laikas < 16) {
        console.log('Standartinis meniu: diena');
    } else {
        console.log('Standartinis meniu: vakaras');
    }
}

if (diena === 24 || diena === 25) {
    console.log('Kaledinis meniu');
} else if (diena === 1 && laikas < 11) {
    console.log('Pirmos menesio dienos meniu: rytas');
} else if (diena === 1 && laikas < 16) {
    console.log('Pirmos menesio dienos meniu: diena');
} else if (diena === 1) {
    console.log('Pirmos menesio dienos meniu: vakaras');
} else if (diena !== 1 && laikas < 11) {
    console.log('Standartinis meniu: rytas');
} else if (diena !== 1 && laikas < 16) {
    console.log('Standartinis meniu: diena');
} else if (diena !== 1) {
    console.log('Standartinis meniu: vakaras');
}