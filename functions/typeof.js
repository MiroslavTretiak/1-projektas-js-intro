/*
TYPEOF - duomens tipo nustatymo operatorius
*/

const a = typeof 5;
console.log(a);

const b = typeof 'asadasd';
console.log(b);

const c = typeof true;
console.log(c);

function example() {
    return 777;
}

const d = typeof example;
console.log(d);

const e = typeof example();
console.log(e);

const g = typeof typeof 5; // typeof grazina number kaip string
console.log(g);