// Izanginis

/*
Animals
*/
import Hamster from "./Hamster.js";
import Cat from "./Cat.js";
import Dog from "./Dog.js";

const rexas = new Dog('Rexas', 'brown', 'bark');
const brisius = new Dog('Brisius', 'white', 'au')

console.log(brisius.intro());
console.log(rexas.intro());

const pukis = new Cat('Pukis', 'white');
const garfildas = new Cat('Garlfildas', 'ginger');

console.log(pukis.intro());
console.log(garfildas.intro());

const homa = new Hamster('Homa', 'black');
const hema = new Hamster('Hema', 'gray');

console.log(homa.intro());
console.log(hema.intro());

