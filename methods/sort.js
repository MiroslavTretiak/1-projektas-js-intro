// Sortiruoja pagal ASCII abecele
const abc = ['a', 'c', 'b', 'z', 'f', 's'];
abc.sort();
console.log(abc)

abc.reverse();
console.log(abc)

abc.sort().reverse();
console.log(abc)

//sort sortiruoja skaicius pagal pirmaji nari
const marks = [10, 2, 8, 22, 30, 500, 4, 6];
marks.sort();
console.log(marks);

// Tvarkingai sortina skaicius
marks.sort((a, b) => a - b);
console.log(marks);

// Kaip sukeist tvarka is galo?
marks.sort((a, b) => b - a);
console.log(marks);
console.clear();
// Sort su masyvais
const students = [
    { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: 'Maryte', age: 88, isMarried: false, marks: [7, 7, 7] },
    { name: 'Petras', age: 77, isMarried: false, marks: [7, 6, 5, 4, 3] },
    { name: 'Jona', age: 66, isMarried: true, marks: [1] },
];

// Reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti
// kaip naujo studento objekto rakta (marksCount)
//                1 variantas
// for (let i = 0; i < students.length; i++) {
//     students[i].marksCount = students[i].marks.length;
//     console.log(students[i]);
// }
//                2 variantas 
for (const student of students) {
    student.marksCount = student.marks.length;
}
console.log(students);
console.clear();
// Reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti
// kaip naujo studento objekto rakata (marksAverage)

//                1 variantas
// const avgStudents = students.map(student => ({
//     ...student, averageMark: student.marks.reduce((a, b) => a + b, 0) / student.marks.length,
// }))
// console.log(avgStudents);

//                2 variantas

for (const student of students) {
    let sum = 0;

    for (const mark of student.marks) {
        sum += mark;
    }
    student.marksAverage = sum / student.marks.length;
}
console.log(students[0]);
console.clear();
// Reikia rasti kiekvieno studento maziausia pazymi  ir tai prideti
// kaip naujo studento objekto rakata (minMarks)

for (const student of students) {
    const marksCopy = student.marks; // kad sort nesugadintu eiliskuma pazymiu
    marksCopy.sort((a, b) => a - b);
    student.minMark = marksCopy[0];
}
console.log(students[0]);
console.clear();
// Reikia rasti kiekvieno studento maziausia pazymi  ir tai prideti
// kaip naujo studento objekto rakata (maxMarks)

for (const student of students) {
    const marksCopy = student.marks;
    student.marks.sort((a, b) => b - a); //nereikalingas nes jau issortinom
    student.maxMark = marksCopy[0];
}
console.log(students[0]);

// Reikia sudaryti studentu sarasa, (pilni objektai), kuriu pazymiu vidurkis yra didesnis 5.


// Reikia sudaryti studenu vardu sarasa, kuriu pazymiu vidukis yra didesni uz 5;
//map filter sort ...

