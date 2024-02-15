

const marks = [10, 2, 8, 4, 6];

// Sukurti masyva dvigubai didesni uz duota
const doubleMarks = [];

// for (let i = 0; i < marks.length; i++) {
//     const number = marks[i];
//     doubleMarks.push(number * 2);
// }


for (const number of marks) {
    doubleMarks.push(number * 2);
}
console.log(marks);
console.log(doubleMarks);

// .map(); yra pasislepes ciklas
const tripleMarks = marks.map(number => number * 3);

console.log(tripleMarks)
console.clear();


// Jeigu skaicius teigiamas, palikti koks yra.
// Jeigu skaicius neigiamas - padauginti is 10.
const randomNumbers = [10, -2, 3.14, 8.77, 44444, -66.6];

const randomNumbers2 = [];

for (const number of randomNumbers) {
    randomNumbers2.push(number > 0 ? number : number * 10);
    // if (number > 0) {
    //     randomNumbers2.push(number);
    // } else {
    //     randomNumbers2.push(number * 10);
    // }
}


console.log(randomNumbers);
console.log(randomNumbers2);

const randomNumbers3 = randomNumbers.map(n => n > 0 ? n : n * 10);
console.log(randomNumbers3);

console.clear();


// Kaip itraukti i masyva skaicius nevyrsyjancius 10?
const pazymiai = [10, 2, 8, 4, 6];
//10, 4, 10, 8, 10

function geresniPazymys(n) {
    if (n * 2 > 10) {
        return 10;
    }
    return n * 2;
}
function updateMarks(marks) {
    const newMarks = [];

    for (const mark of marks) {
        const newMarkValue = mark * 2;
        newMarks.push(geresniPazymys(mark));
        //     if (newMarkValue <= 10) {
        //         newMarks.push(newMarkValue);
        //     } else {
        //         newMarks.push(10);
        //     }
        // }
    }
    return newMarks;
}

console.log(updateMarks(pazymiai));

//Variantas su .map();
const geresniPazymiai = pazymiai.map(n => n * 2 > 10 ? 10 : n * 2);
console.log(geresniPazymiai);

const geresniPazymiai2 = pazymiai.map(geresniPazymys);
console.log(geresniPazymiai2);