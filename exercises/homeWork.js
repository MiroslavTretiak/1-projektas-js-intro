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

const list3 = [11, 12, 27, 14, 15];
console.log(list3);

// 4

const list4 = ['a', 'b', 'c', 'd', 'e']
console.log(list4);

const list5 = ['f', 'g', 'h', 'j', 'i']
console.log(list5);

const list6 = ['k', 'l', 'm', 'n', 'o']
console.log(list6);

console.clear();
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

// 1 

const sum = ks1 + ks2 + ks3;
console.log(sum);

// 2 

const text = kt1 + ' ' + kt2 + ' ' + kt3;
const text1 = `${kt1} ${kt2} ${kt3}`;
console.log(text);
console.log(text1);

// 3

console.log(list1[0] - list1[1] + list1[2] - list1[3] + list1[4]);

console.log(list2[0] - list2[1] + list2[2] - list2[3] + list2[4]);

console.log(list3[0] - list3[1] + list3[2] - list3[3] + list3[4]);
console.clear();
// 4
function reverse(str) {
    const rev = [...str].reverse().join(", ");
    console.log(rev);
}

reverse(list4);
reverse(list5);
reverse(list6);

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
4. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus


*/

// 1

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

// 2

const zodis1 = 'Pomidoras'.length
const zodis2 = 'Bandykite kita karta'.length
console.log(zodis1);
console.log(zodis2);
//const ilgis1 = `Zodis ${zodis1.toLowerCase()} turi ${zodis1.length} simbolius`
//const ilgis2 = `Zodis ${zodis2.toLowerCase()} turi ${zodis2.length} simbolius`
//console.log(ilgis1);
//console.log(ilgis2);

// 3

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

// 4

const list7 = [1, 2, 6];
const list8 = [1, 3, 6, 7];

const dif1 = list7.length > list8.length ? 'Pomidoras' : 'Bandykite kita karta';
console.log(dif1);
const dif2 = list7.length < list8.length ? 'Pomidoras' : 'Bandykite kita karta';
console.log(dif2);
const dif3 = list7.length === list8.length ? 'Pomidoras' : 'Bandykite kita karta';
console.log(dif3);
const dif4 = list7.length !== list8.length ? 'Pomidoras' : 'Bandykite kita karta';
console.log(dif4);
const dif5 = list7.length >= list8.length ? 'Pomidoras' : 'Bandykite kita karta';
console.log(dif5);
const dif6 = list7.length <= list8.length ? 'Pomidoras' : 'Bandykite kita karta';
console.log(dif6);

//console.clear();
/*
                    Ciklo for panaudojimas
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp(imtinai):
    0 … 0
    0 … 4
    0 … 100
    574 … 815
        - 50 … 50
         - 70 … 30
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
    0 - 11
    8 - 31
     - 18 - 18
    rezultatą pateikti tokiu formatu:
    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/
function correctBetween(max) {
    return (max * (max + 1)) / 2;
}

console.log(correctBetween(0));
console.log(correctBetween(4));
console.log(correctBetween(10));
console.log(correctBetween(100));
///console.log(correctBetween(815));
//console.log(correctBetween(50));
//console.log(correctBetween(30));

function sumBetween(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    // ciklas siam uzdaviniui netinka

    //return `Sum between ${min} and ${max} is ${total}.`
    return total;
}
console.log(sumBetween(574, 815));
console.log(sumBetween(-50, 50));
console.log(sumBetween(-70, 30));

//console.clear();

// 2

let abc = 'abcdef';

function reverseString(str) {
    const strRev = str.split('').reverse().join('');
    console.log(strRev);
}

reverseString(abc);

console.clear();

// let a = 'abcde';

// let result = '';
// let n = a.length - 1;
// let x = '';
// let i = 0;
// for (; i <= n / 2; i++) {
//     console.log([i])
//     x = a[i];
//     a[i] = a[n + 1 - i]
//     a[n + 1 - 1] = x;
// }
// console.log(a);

console.clear();



function repeatStr(n, s) {
    return Array(n + 1).join(s);
}
describe("Tests", function () {
    it("Basic tests", function () {
        assert.strictEqual(repeatStr(3, "*"), "***");
        assert.strictEqual(repeatStr(5, "#"), "#####");
        assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    });
});

