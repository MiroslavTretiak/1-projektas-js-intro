/*
KINTAMUJU INICIJAVIMAS

 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console
 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console
 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console
 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    a. Po kiekvieno jų inicijavimo, išvesti į console

*/

// 1

const ks1 = 2;
console.log(ks1);
const ks2 = 3;
console.log(ks2);
const ks3 = 4;
console.log(ks3);

// 2

const kt1 = 'Pirmas';
console.log(kt1);
const kt2 = 'Antras';
console.log(kt2);
const kt3 = 'Trecias';
console.log(kt3);

// 3

const list1 = [1, 2, 3, 4, 5];
console.log(list1);

const list2 = [6, 7, 8, 9, 10];
console.log(list2);

const list3 = [11, 12, 13, 14, 15];
console.log(list3);

const list4 = ['a', 'b', 'c', 'd', 'e']
console.log(list4);

const list5 = ['f', 'g', 'h', 'j', 'i']
console.log(list5);

const list6 = ['k', 'l', 'm', 'n', 'o']
console.log(list6);

//console.clear();
/*
VEIKSMAI SU KINTAMAISIAIS

 1. Susumuoti visus skaičiaus tipo kintamuosius
    a. Rezultatą išvesti į console
 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    a. Rezultatą išvesti į console
 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    a. 1-2+3-4+5
    b. Rezultatą išvesti į console
 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios
    taip, jog tarp jų būtų kablelis ir tarpas

*/

const sum = ks1 + ks2 + ks3;
console.log(sum);

const text = kt1 + ' ' + kt2 + ' ' + kt3;
const text1 = `${kt1} ${kt2} ${kt3}`;
console.log(text);
console.log(text1);

//console.clear();
/*
KINTAMUJU PALYGINIMAS

Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console 
išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus


*/

const sk1 = 5;
const sk2 = 6;

if (sk1 > sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (sk1 < sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (sk1 === sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (sk1 !== sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (sk1 >= sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (sk1 <= sk2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//console.clear();

const zodis1 = 'Pomidoras'.length
const zodis2 = 'Bandykite kita karta'.length
console.log(zodis1);
console.log(zodis2);
//const ilgis1 = `Zodis ${zodis1.toLowerCase()} turi ${zodis1.length} simbolius`
//const ilgis2 = `Zodis ${zodis2.toLowerCase()} turi ${zodis2.length} simbolius`
//console.log(ilgis1);
//console.log(ilgis2);

const ternary2 = zodis1 > zodis2 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(ternary2);

const ternary3 = zodis1 < zodis2 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(ternary3);

const ternary4 = zodis1 === zodis2 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(ternary4);

const ternary5 = zodis1 !== zodis2 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(ternary5);

const ternary6 = zodis1 >= zodis2 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(ternary6);

const ternary7 = zodis1 <= zodis2 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(ternary7);

//console.clear();