import Animal from './Animal.js';

class Fish extends Animal {
    constructor(sound, breed) {
        super(sound, breed)
        this.sound = '';
        this.breed = '';
    }
    swim() {
        this.swiming = true;
        return `${this.name} plaukia`;
    }
    stopSwim() {
        this.swim = false;
        return `${this.name} pluduriuoja`;
    }


}

export default Fish;

//  - Fish (name, color), intro(), swim(), stopSwim():