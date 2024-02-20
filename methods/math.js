const marks = [10, 2, 8, 4, 6];

const min = Math.min(10, 2, 8, 4, 6);
console.log(min);

const min2 = Math.min(...marks);
console.log(min);

// Funkcija kuri naudoja masyva
function findMax(list) {
    let maxNumber = -Infinity;
    for (const number of list) {
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}
console.log(findMax(marks));
console.clear();

// math.abc nuima - zenkla
// skrituli apksaiciuot
console.log(Math.sqrt)

// apvalinimo funkcijos
const a = 3.1415;

// Math.ceil upp
console.log(Math.ceil(a))

// Math.round 0.5; 0.49999 down
console.log(Math.round(a))

// Math.floor down
console.log(Math.floor(a))

//Math.trunc nupjauna?
console.log(Math.trunc(a))

console.clear();

// random sukuria skaiciu nuo 0 iki 1 [0, 1)

const r1 = Math.random();
console.log(r1);

const count = [0, 0];

// funkcijos ideja grazinti nuo 0 iki 1

// function random_0_1() {
//     return Math.trunc(Math.random() * 2);
// }
// for (let i = 0; i < 1000; i++) {
//     const r = random_0_1();
//     count[r]++;
// }
// console.log(count);


// funkcijos ideja grazinti nuo 0 iki 5

// function random_0_5() {
//     return Math.floor(Math.random() * 5);
// }
// const count5 = Array(6).fill(0);
// for (let i = 0; i < 10; i++) {
//     const r = random_0_5();
//     count5[r]++;
// }
// console.log(count5);

// min max random n
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const count5 = Array(6).fill(0);
for (let i = 0; i < 1000; i++) {
    const min = 2;
    const r = random(min, 7);
    count5[r - 2]++;
}
console.log(count5);
