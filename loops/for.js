/*
FOR - ciklas (pagrindinis)
*/

let a = 0;
console.log(a);
console.clear();

console.log('START');

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('END');

console.clear();

// ciklas + list

const marks = [10, 2, 8, 4, 6, 10];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    console.log(i, marks[i]);
    sum += marks[i];
}
console.log('SUM:', sum, sum / marks.length);

