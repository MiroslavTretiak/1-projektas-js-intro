
const marks = [10, 2, 8, 4, 6];
const badMarkLimit = 5;
// kiek yra blogu pazymiu? (nuo <=5)

// kokie gauti geri pazymiai?
const goodMarks = marks.filter(n => n > badMarkLimit);
console.log(goodMarks)

//tas pats su for
console.log('---')
const goodMarks2 = [];

for (const n of marks) {
    if (n > badMarkLimit) {
        goodMarks2.push(n);
    }
}
console.log(goodMarks2);

// kokie gauti blogi pazymiai?
const badMarks = marks.filter(n => n <= badMarkLimit);
console.log(badMarks)

// kiek gauti geri pazymiai?
const goodMarksCount = goodMarks.length;
console.log(goodMarksCount)

// kiek gauti blogi pazymiai?
const badMarksCount = badMarks.length;
console.log(badMarksCount)

// koks didziausias blogas pazymys?
const maxBadMark = Math.max(...badMarks);
console.log(maxBadMark)

// koks didziausias geras pazymys?
const maxGoodMark = Math.max(...goodMarks);
console.log(maxGoodMark)

// Surask lyginius ir nelyginius
const numbers = [1, 5, 7, -8, 6, -10, 13];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(n => n % 2 === 1);
console.log(oddNumbers);

// Kaip atskirtis sveikus nuo nesveikiu?
const randomNumber = [1, 5, 7.777, -8, 6.66, -10, 13.14];

const integerNumbers = randomNumber.filter(n => n % 1 === 0);
const floatNumbers = randomNumber.filter(n => n % 1 !== 0);
console.log(integerNumbers);
console.log(floatNumbers);

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Jona', age: 66, isMarried: true },
];

const marriedStudents = students.filter(s => s.isMarried);
console.log(marriedStudents);

const notMarriedStudents = students.filter(s => !s.isMarried);
console.log(notMarriedStudents);


const pensininkai = students.filter(s => s.age >= 70);
console.log(pensininkai);
