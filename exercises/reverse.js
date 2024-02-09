/*
Gauta teksta parasyti atbulai.
*/
console.clear();

function reverse(text) {
    if (typeof text !== 'string') {
        return 'ERROR: duok teksta';
    }
    if (text === '') {
        return '';
    }
    if (text.length === 1) {
        return text;
    }
    // let result = '';
    // for (let i = text.length - 1; i >= 0; i--) {
    //     console.log(i, text[i]);
    //     result += text[i];
}
// let result = '';
// let n = text.length - 1;
// let x;
// for (; i <= n / 2; i++) {
//     x = text[i];
//     text[i] = text[n + 1 - i]
//     text[n + 1 - 1] = x;
//}

for (let i = text.length - 1; i >= 0; i--) {
    console.log(i, text[i]);
    result += text[i];
    //console.log('Gavau:', text)
    return result;
}
// console.log(reverse(2154));
// console.log(reverse(true));
// console.log(reverse(reverse));
// console.log(reverse());
// console.log(reverse(undefined));
// console.log(reverse([]));
// console.log(reverse('asd'));
// console.log(reverse([2154]));

// console.log(reverse(''), '->', '');
// console.log(reverse('x'), '->', 'x');

console.log(reverse('abc'), '->', 'cba');

