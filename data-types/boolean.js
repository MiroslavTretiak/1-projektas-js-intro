/*
Boolean - loginee reiksme

Galimos reiksmes:
-true
-false

Loginiai operatoriai:
- && (and)
- || (or)
- ! (not/invert)
*/

const arLyja = false;
const arSninga = true;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

console.clear();

// Sportas
// - varzybos vyksta tik dienos metu
// - vazybos vyksta tik jei turim 2 komandas


const arDiena = true; ``
const arYraDviKomandos = true;

const arVykstaVarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos:', arVykstaVarzybos);


// Kermosius
// - vaikas noretu gaidelio
// - vaikas noretu lazdeles
// - vaikas noretu grybuko

const arTurimGaidelio = false;
const arTurimLazdeles = true;
const arTurimGrybuko = false;

const arVaikasGausSaldaini = arTurimGaidelio || arTurimGrybuko || arTurimLazdeles;
console.log('Kermosius:', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a && b && c, '->', false);

console.log(a && b || c, '->', true);

// console.log(true && false || true, '->',);

console.log(a || b && c, '->', true);

console.clear();

// Visi stringai yra true, isskyrus tuscius
console.log(!'Labas');
console.log(!'');

//Visi skaiciai yra true, isskyrus 0 (nulis)
console.log(!5);
console.log(!-5);
console.log(!0);

// positive, negative numbers
// truthy, falsy number values