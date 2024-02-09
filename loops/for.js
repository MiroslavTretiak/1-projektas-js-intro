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

console.clear();

function arTestiCikla(index) {
    if (index < 5) {
        return true;
    }
    if (index < 5) {
        return true;
    }
    return false;
}

let k = 0;
let i = 0
for (; arTestiCikla(i);) {
    console.log(i, k++);
    i++;
}
//k=2; i=0; i+k=2<5=true - > 0;

console.clear();

// atbuline tvarka su for

for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log('---------');

for (let i = 0; i < 5; i++) {
    console.log(4 - i);
}