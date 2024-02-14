const n1 = 7;
const n2 = 5;

// Function declaration 
// (standartine fucntion sintakse)
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// Kintamajam priskiriam anonimine funkcija
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// arrow function
const multiply = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function
// jeigu, logikos bloke yra TIK 1 salyga
// galima nerasyti: {, return, }
const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// arrow function
// jeigu, parametru bloke yra TIK 1 parametras
// galima nerasyti: (, )
const cube = a => a ** 3;
console.log(`${n1} ** 3 = ${cube(n1)}`);
console.log(`${n2} ** 3 = ${cube(n2)}`);


const firstLetter = text => text[0];

console.log(firstLetter('Chuck'));

/// 
const formatName = text => text[0].toUpperCase() + text.slice(1).toLowerCase();

console.log(formatName('JoNaS'), '- >', 'Jonas');
console.log(formatName('mArYTE'), '- >', 'Maryte');
console.log(formatName('mArYTe'), '- >', 'Maryte');

const abbbr = fullname => {
    const words = fullname.split(' ');
    let result = '';

    for (const word of words) {
        result += `${word[0]}.`;
    }
    return result;
}

console.log(abbbr('Chuck Norris'), '- >', 'C.N');
console.log(abbbr('Chuck Norris'), '- >', 'C.N.');
console.log(abbbr('Zan Klod Van Dam'), '- >', 'Z.K.V.D.');