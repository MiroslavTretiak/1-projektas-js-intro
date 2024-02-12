
//Kaip isrinkt objekta su for?

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Jona', age: 66, isMarried: true },
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name}: ${student.age}`)
    //console.log(student);
}

console.log("-----------------");

for (const student of students) {
    console.log(`${student.name}: ${student.age}`);
}
console.log("-----------------");
const numbers = [10, 2, 8, 4, 6];

for (const number of numbers) {
    console.log('--', number);
}
console.log("-----------------");

const text = 'Pomidoras';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    console.log(i, letter);
}
console.log("-----------------");
for (const letter of text) {
    console.log(letter);
}