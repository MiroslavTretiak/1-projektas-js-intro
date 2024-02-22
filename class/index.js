// Izanginis

/*
Animals
*/
import Hamster from "./Hamster.js";
import Cat from "./Cat.js";
import Dog from "./Dog.js";

import Parrot from "./Parrot.js";
import Canary from "./Canary.js";
import Stark from "./Stark.js";

import Shark from "./Shark.js";
import Dolphine from "./Dolphine.js";
import Goldfish from "./Goldfish.js";

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

console.log(homa.eat(5));
console.log(homa.eat(7));
console.log(homa.eat(-7));

console.clear();

const kiesha = new Parrot('Kiesha', 'blue');
const papuga = new Parrot('Papuga', 'yellow')
console.log(kiesha.intro());
console.log(papuga.intro());

console.log(kiesha.repeatSound('kek'));
console.log(kiesha.repeatSound('ka'));
console.log(kiesha.repeatSound('kur'));

console.log(kiesha.repeatHistory());

console.log('-------')
const Canary1 = new Canary('Canary1', 'white');
const Canary2 = new Canary('Canary2', 'gray')
console.log(Canary1.intro());
console.log(Canary2.intro());
console.log(Canary1.fly());
console.log(Canary1.stopFly());

console.log('-------')
const Stark1 = new Stark('Stark1', 'whiteGray');
const Stark2 = new Stark('Stark2', 'gray')
console.log(Stark1.intro());
console.log(Stark2.intro());

console.log(Stark1.bringBabie(7));
console.log(Stark1.bringBabie(1));

console.log('-------')

const Shark1 = new Shark('Shark1', 'white');
const Shark2 = new Shark('Shark2', 'blue');
console.log(Shark1.intro());
console.log(Shark2.intro());
console.log(Shark1.eatHuman());

console.log('-------')

const Doplhy1 = new Dolphine('Doplhy1', 'white');
const Doplhy2 = new Dolphine('Doplhy2', 'blue');
console.log(Doplhy1.intro());
console.log(Doplhy2.intro());

console.log(Doplhy1.jumpFromWater(2));
console.log(Doplhy1.jumpFromWater(4));

console.log('-------')

const Goldfish1 = new Goldfish('Goldfish1', 'gold', 'piu');
const Goldfish2 = new Goldfish('Goldfish2', 'yellow', 'paf');
console.log(Goldfish1.intro());
console.log(Goldfish2.intro());
