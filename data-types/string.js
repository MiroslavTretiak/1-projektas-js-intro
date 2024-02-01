/*
STRING - tekstas, simboliu grandinele

Iniciavimo simboliai/budai: vienguba ('), dvyguba (") ir ` (backtick) kabutes;
 \r - return
 \n - new line
 \t - tab
 kombinacija \r\n uztikrina kad bus rasomas is naujos eilutes
*/


const text1 = 'Pirmas tekstas.';
console.log(text1);

const text2 = "Cia yra tekstas be kabuciu.";
console.log(text2);

// Cia yra tekstas be kabuciu.

// Vienguba (') kabute.

const kabute = "Vienguba (') kabute.";
console.log(kabute);

const vardas = 'Chuck';
const pavarde = 'Norris';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Vienguba (') ir dvyguba (") kabutes.
const kabuteMix1 = "Vienguba (') ir " + 'dvyguba (") kabutes.';
console.log(kabuteMix1);

const kabuteMix21 = 'Vienguba (\') ir " + \'dvyguba (") kabutes.';
console.log(kabuteMix21);

const kabuteMix22 = "Vienguba (') ir \" + 'dvyguba (\") kabutes.";
console.log(kabuteMix22);

const kabuteMix23 = "Vienguba (\') ir \" + \'dvyguba (\") kabutes.";
console.log(kabuteMix23);

console.clear();

const gele = 'tulpe';
const spalva = 'geltona';

// As turiu tulpe kuri yra geltona.

const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const backtick = `Backtick sakinys.`;
console.log(backtick);

console.clear();

const backtickgelytes = `As turiu ${gele} kuri yra ${spalva}.`;
console.log(backtickgelytes);

const n1 = 7;
const n2 = 5;

// 7 + 5 = 12;

const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

console.clear();

// Stai sarasas:
// - pirmas
// - antras
// - trecias

// \r - return
// \n - new line
// \t - tab
// kombinacija \r\n uztikrina kad bus rasomas is naujos eilutes

const eilutes = 'Stai sarasas:\r\n- pirmas \r\n- antras \r\n- trecias';
console.log(eilutes);

/*
<header>
    <img src="#"> alt="">
    <nav>\r\n\
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    <nav>\r\n\
</header>';
*/
const HTML = `<header>
    <img src="#"> alt="">
        <nav>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <nav>
            </header>`;
console.log(HTML);