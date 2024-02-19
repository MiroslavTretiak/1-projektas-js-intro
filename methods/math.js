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