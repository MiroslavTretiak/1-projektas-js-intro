//For-in dirba su Objektais

// Objektas student

const student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const noriuSuzinoti = 'name';

const name = student[noriuSuzinoti];

console.log(name);

// Reikia isloginti raktus

const keys = Object.keys(student);
console.log(keys);

const keysCount = keys.length;
console.log(keysCount);

console.clear();

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    price: 300,
};

const carKeys = Object.keys(car);
console.log(carKeys);

for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[i];
    const value = car[key];
    console.log(i, key, value);
}
console.log('--------');
for (const key in car) {
    const value = car[key];
    console.log(key, value);
}