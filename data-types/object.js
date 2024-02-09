/* 
OBJECT - objektas 
key-value struktura
*/

// const name1 = 'Jonas';
// const name2 = 'Maryte';
// const name3 = 'Petras';
// const name4 = 'Jona';

// const age1 = '99';
// const age2 = '88';
// const age3 = '77';
// const age4 = '66';

// const isMarried1 = true;
// const isMarried2 = false;
// const isMarried3 = false;
// const isMarried4 = true;

// function intro(name, age, isMarried) {
//     return `${name}: ${age} years old and${isMarried ? '' : 'not'} married.`;
//     //return `Hi, my name ${name}. I am ${isMarried? '' : 'not'} married and i am ${age} years old.`;

// }

// console.log(intro(name1, age1, isMarried1));
// console.log(intro(name2, age2, isMarried2));
// console.log(intro(name3, age3, isMarried3));
// console.log(intro(name4, age4, isMarried4));


// const person1 = ['Jonas', 99, true];
// const person2 = ['Maryte', 88, false];
// const person3 = ['Petras', 77, false];
// const person4 = ['Jona', 66, true];
// console.clear();

// function intro2(info) {
//     const name = info[0];
//     const age = info[1];
//     const isMarried = info[2];
//     return `${name}: ${age} years old and${isMarried ? '' : ' not'} married.`;
// }
// console.log(intro2(person1));
// console.log(intro2(person2));
// console.log(intro2(person3));
// console.log(intro2(person4));

// console.clear();

// const empty = {};
// console.log(empty);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const student2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};
const student3 = {
    name: 'Petras',
    age: 77,
    isMarried: false,
};
const student4 = {
    name: 'Jona',
    age: 66,
    isMarried: true,
}
// // standartine objekto reiksmes istraukimo sintkase
// console.log(student4['name']);
// console.log(student4['age']);
// console.log(student4['isMarried']);

// // Supaprastinta objekto reiksmes istraukimo sintakse
// console.log(student4.name);
// console.log(student4.age);
// console.log(student4.isMarried);

// // string -> array -> object

// const car = {
//     brand: 'Audi',
//     model: 80,
//     color: 'red',
//     liaudyjeVadinama: 'bulka',
//     'liaudyje-vadinama': 'bulka',
// }

// console.log(car.brand);
// console.log(car.model);
// console.log(car.color);
// console.log(car["liaudyje-vadinama"]);

// // I objekta mes irasom rakta norimam zodziui-simboliui
// // I array automatiskai priskiriama pozicja musu reiksmei

// const object = {
//     0: 'Hey',
//     1: 'you',
//     2: 'pss',
// };
// console.log(object[0]);
// console.log(object[1]);
// console.log(object[2]);



function intro3(student) {
    return `${student.name}: ${student.age} years old and${student.isMarried ? '' : ' not'} married.`;
};

function intro4(student) {
    const name = student.name;
    const age = student.age;
    const isMarried = student.isMarried;

    return `${student.name}: ${student.age} years old and${student.isMarried ? '' : ' not'} married.`;
}