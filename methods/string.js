const text = 'Pomidoras';

const lower = text.toLowerCase();
console.log(lower);

const upper = text.toUpperCase();
console.log(upper);

const firstLetter = text[0];
console.log(firstLetter);

// Pomidorass turi 9 raides

const sakinys = `"${text}" turi ${text.length} raides`
console.log(sakinys);

const ilgis = 'Kiekdsadas das ?'.length;
console.log(ilgis);
console.clear();

const name1 = 'Jonas';
const surname1 = 'Jonaitis'
const name2 = 'Maryte';
const surname2 = 'Marytaite'
const name3 = 'Petras';
const surname3 = 'Petraitis'
const name4 = 'Ona';
const surname4 = 'Onaite'

// Vardo "Jonas" ilgis yra 5 simboliai. (su visais variantais)
// Asmens Jonas Jonaitis inicialai yra J.J

const simboliuKiekis1 = `Vardo "${name1}" ilgis yra ${name1.length} simboliai`;
const inicialai1 = `Asmens ${name1} ${surname1} inicialai yra ${surname1[0]}.${surname1[0]}`;
console.log(simboliuKiekis1);
console.log(inicialai1);

const simboliuKiekis2 = `Vardo "${name2}" ilgis yra ${name2.length} simboliai`;
const inicialai2 = `Asmens ${name2} ${surname2} inicialai yra ${surname2[0]}.${surname2[0]}`;
console.log(simboliuKiekis2);
console.log(inicialai2);

const simboliuKiekis3 = `Vardo "${name3}" ilgis yra ${name3.length} simboliai`;
const inicialai3 = `Asmens ${name3} ${surname3} inicialai yra ${surname3[0]}.${surname3[0]}`;
console.log(simboliuKiekis3);
console.log(inicialai3);

const simboliuKiekis4 = `Vardo "${name4}" ilgis yra ${name4.length} simboliai`;
const inicialai4 = `Asmens ${name4} ${surname4} inicialai yra ${surname4[0]}.${surname4[0]}`;
console.log(simboliuKiekis4);
console.log(inicialai4);
