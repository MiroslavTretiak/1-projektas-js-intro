/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/ //text.at() skiriasi nuo text[] tuo kad ima is galo jei yra - zenklas
const text = 'Pomidoras';
console.log(text.at(-1), text[0]);

// ASCII
// charCodeAt kiekvienas simbolis turi po savim numeri
console.log('a'.charCodeAt(0));
console.log('1'.charCodeAt(0));

// jei zinai simbolio numeri gali atsatyti ji

console.log(String.fromCharCode(169));

// Ar su duotu simboliu baigiasi textas?
console.log(text.endsWith('s'));

// Ar su siuo simboliu prasideda textas?
console.log(text.startsWith('P'));

// Ar tekste yra toks simbolis?
console.log(text.includes('s'));

// Parodo simbolio pozicija tekste, jei simbolio tokio nera raso -1
console.log(text.indexOf('s'));
console.log(text.indexOf('d', 2)); // rodo pozicija texte

// Pakakrtoti texta 3 kartus
function repeat(text, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text[i];
    }
    return result;
}
console.log(repeat('Labas', 0));
console.log('Labas'.repeat(0));

console.clear();

// Pakeisti pirma sutika parametra i duota
console.log('vasara'.replace('a', '-'))

const vasara = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-');
console.log(vasara);

const vasara1 = 'vasara'
    .replace('a', '-')
    .replace('a', '-=')
    .replace('a', '---')
console.log(vasara1);

const vasara2 = 'vasaraasasasasas'.replaceAll('a', '-');
console.log(vasara2);

console.clear();

// Pasirenktas intervalas iskerpiamas
console.log('Pomidoras'.slice(1));
console.log('Pomidoras'.slice(5));

// Pasirenktas intervalas pasilieka
console.log('Pomidoras'.slice(0, 5));
console.log('Pomidoras'.slice(2, 5));

// slice(); Jei su minusu tai is galo skaciuoja (jei tuscias skacius = Error)
console.log('Pomidoras'.slice(-2));
console.log('Pomidoras'.slice(-4, -2));

console.clear();

// Split(); iskerpa pasirenkta simboli
console.log('Pomidoras'.split('m'));
console.log('vasara'.split('v'));
console.log('vasara'.split(''));

console.clear();

// CAPS ir be caps
console.log('vasara'.toUpperCase());
console.log('vasara'.toLowerCase());
console.clear();

// trim(); pasalina tarpus is texto pradzios ir pabaigos
console.log(`"${'   vasara    '.trimEnd()}"`);
console.log(`"${'   vasara   '.trimStart()}"`);
console.log(`"${'        vasara'.trim()}"`);

console.log('Pomidoras'.split('m'));
console.log('vasara'.split('v'));
console.log('vasara'.split(''));
const john = ['j', 'jay', 'jail'];
console.log(john.join(' '));










