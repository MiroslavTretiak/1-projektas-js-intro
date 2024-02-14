/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

console.log([10, 2, 8, 4, 6]);

const marks = [10, 2, 8, 4, 6];
marks[1] = 5;
console.log(marks);


// push(); itraukia duota simboli i gala
const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

console.clear();

// unshift(); iterpia simboli i prieki
const maryte = [];
console.log(maryte);

maryte.unshift(10);
console.log(maryte);

maryte.unshift(2);
console.log(maryte);

console.clear();

// kombinacija push(); ir unshift();
const petras = [10];
console.log(petras);

petras.push(2, 3);
petras.unshift(8, 9);
console.log(petras);

// pop(); pasalina is galo 
petras.pop();
console.log(petras.pop());

// shift(); pasalina is pradzios
petras.shift();
console.log(petras.shift());

console.clear();

// .at(); istraukia is masyvo skaiciu
console.log([10, 2, 8, 4, 6].at(0));
console.log([10, 2, 8, 4, 6].at(-1));
console.clear();

// .concat(); sudeda masyvus i 1

const vienas = [1, 1, 1];
const du = [2, 2, 2];
const trys = [3, 3, 3];

const vienasDu = vienas.concat(du, trys);
console.log(vienasDu);
console.clear();

// .include(); parodo ar masyve yra duotas simbolis
// .indexOf parodo kurioj pozicijoje
console.log([10, 2, 8, 4, 6].includes(5));
console.log([10, 2, 8, 4, 6].includes(8));

console.log([10, 2, 8, 4, 6].indexOf(2));
console.clear();

// .join(); nuima kabutes ir skliaustus bei sujungia pagal nurodyta simboli

const john = ['j', 'jay', 'jail'];
console.log(john.join(' '));

console.clear();

// .reverse(); pakeicia eiliskuma

const abc = ['a', 'b', 'c', 'd'];
console.log(abc);

abc.reverse();
console.log(abc);


// Duodamas tekstas, kuris turetu buti kaip vardas
// Bet jis suformatuotas padrikai...
// Reikia duota texta suformatuoti taip jog butu
// Tvarkingas vardas

// pvz.: jonas -> Jonas
// oNa -> Ona
// PeTrAs - > Petras
// Maryte - > Maryte

// Duodamas vardas ir pavarde.
//Grazinti trumpini


// pvz.: Chuck Norris -> C.N

console.clear();
/*
function normalName(student1) {
    // student1.split('').join(' ');
    // student1.slice(1).toLowerCase();
    // let name = student1.at(0).toUpperCase() + student1.slice(1).toLowerCase();
    // name.replaceAll(' ', '');
    // return name;

    const firstLetter = text[0].toUpperCase();
    const otherLetter = text.slice(1).toLowerCase();
    return firstLetter + otherLetter
}
console.log(normalName('JoNaS'), '- >', 'Jonas');
console.log(normalName('mArYTE'), '- >', 'Maryte');
console.log(normalName('mArYTe'), '- >', 'Maryte');
*/

function initials(name) {
    const vardasPavarde = name.split(" ")
    const varIn = vardasPavarde[0].at(0).toUpperCase()
    const pavIn = vardasPavarde[vardasPavarde.length - 1].at(0).toUpperCase()
    let initial = varIn + pavIn;
    return initial.split('').join('.');
}
function abbbr(name) {
    const parts = name.split(' ');

    let result = '';
    for (const word of parts) {
        result += `${word[0]}.`;
    }
    return result;
}
console.log(initials('Chuck Norris'), '- >', 'C.N');
console.log(abbbr('Chuck Norris'), '- >', 'C.N.');
console.log(abbbr('Zan Klod Van Dam'), '- >', 'Z.K.V.D.');

