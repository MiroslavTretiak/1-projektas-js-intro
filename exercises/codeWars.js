// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
    return s.repeat(n);
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");

console.clear();

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    if (array.length == 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return (sum / array.length);
    }
}

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);

console.clear();

//Given a non - empty array of integers, return the result of multiplying the values together in order.Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//     let double = x[0];
//     for (let i = 1; i < x.length; i++) {
//         double *= x[i];
//     }
//     return double;
// }

function grow(x) {
    return x.reduce((a, b) => a * b);
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);

console.clear();
// This kata is about multiplying a given number by eight if 
// it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}
console.log(simpleMultiplication(2), 16, 'Should return given argument times eight...')
console.log(simpleMultiplication(1), 9, 'Should return given argument times nine...')
console.log(simpleMultiplication(8), 64, 'Should return given argument times eight...')
console.log(simpleMultiplication(4), 32, 'Should return given argument times eight...')
console.log(simpleMultiplication(5), 45, 'Should return given argument times nine...')

console.clear();
// Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    //#Happy Coding! ^_^
    let secondsToMillisec = s * 1000;
    let minutsToMillisec = m * 60000;
    let hoursToMillisec = h * 3600000;
    return secondsToMillisec + minutsToMillisec + hoursToMillisec
}
console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0, 0, 0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)

console.clear();

/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string / char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
console.log(basicOp("+", 4, 7), 11, "4 + 7 = 11");
console.log(basicOp("-", 15, 18), -3, "15 - 18 = -3");
console.log(basicOp("*", 5, 5), 25, "5 * 5 = 25");
console.log(basicOp("/", 49, 7), 7, "49 / 7 = 7");

console.clear();
// Write function RemoveExclamationMarks which removes all exclamation 
// marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('');

}

console.log(removeExclamationMarks("Hello World!"), "Hello World");

console.clear();

function century(year) {
    // Finish this :)
    return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

