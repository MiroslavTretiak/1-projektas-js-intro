/*
suskaiciuoti skaiciu suma intervale (imtinai)
pvz.: 0..4 -> 0+1+2+3+4 = 10
*/
let sum = 0;

for (let i = 0; i <= 4; i++) {
    sum += i;
    console.log(i, sum);
}
console.log('SUMA:', sum);

console.clear();


const min = 0;
const max = 100;
let sum2 = 0;

for (let i = min; i <= max; i++) {
    sum += i;
}
console.log('SUMA:', sum);

console.clear();
function sumBetween(min, max) {
    let total = 0;
    // for (let i = min; i <= max; i++) {
    //     total += i;
    // } 
    // ciklas siam uzdaviniui netinka

    //return `Sum between ${min} and ${max} is ${total}.`
    return total;
}


function correctBetween(max) {
    return (max * (max + 1)) / 2;
}

console.log(correctBetween(4));
console.log(correctBetween(10));
console.log(correctBetween(100));
console.log(correctBetween(815));
console.log(correctBetween(50));
console.log(correctBetween(30));
console.log(correctBetween(100_000));