// ... Math
const marks = [10, 2, 8, 4, 6, 0];

const first = marks[0];
const second = marks[1];

// su .slice() pradet nuo tam tikros pozicijos (index)
//const restMarks = marks.slice(2);

// su .filter() pradet nuo tam tikros pozicijos (index)
const restMarks = marks.filter((_, i) => i >= 2);

console.log(first, second, restMarks);

// [] = destuctioning
// priskiria kintamajam a - 0, b - 1 simboli is masyvo marks
// ... yra 'rest' (visi like) operatorius;
const [a, b, ...restABC] = marks;
console.log(a, b, restABC);

// ----------------
const t1 = [1, 2];
const t2 = [3, 4, 5];
const t3 = [6, 7, 8, 9];

const t12 = t1.concat(t2, t3);
console.log(t12);
// SKirtumas tarp concat ir ... , kad ... gali dirbti su objektais
// ... yra 'spread' (iskleidimo) operatorius
const rest12 = [...t1, ...t2, ...t3];
console.log(rest12);

console.clear();

// Kaip destruktirizuoti objekta?
const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    doors: 5,
    wheels: 4,
    gear: {
        type: 'manual',
        count: 5,
    },
}

const { brand, color, gear, ...restCar } = car;
const { type } = gear;

console.log(brand, color, gear, type, restCar);
console.log('--------');

const xBrand = car.brand;
const xColor = car.color;
const xGear = car.gear;
const xType = xGear.type;

const usedCarKeys = ['brand', 'color', 'gear']
const xRestCar = {};
//- model, color, gear
//+ model, doors, wheels

for (const key in car) {
    if (!usedCarKeys.includes(key)) {
        xRestCar[key] = car[key];
    }
}
console.log(xRestCar);
console.clear();

const o1 = { a: 'aaa' };
const o2 = { b: 'bbb' };
const o3 = { c: 'ccc' };

const o12 = {};

for (const key in o1) {
    o12[key] = o1[key];
}

for (const key in o2) {
    o12[key] = o2[key];
}

console.log(o12);

const rest012 = { ...o1, ...o2 };
console.log(rest012);