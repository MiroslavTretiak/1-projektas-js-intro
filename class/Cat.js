import Pet from './Pet.js';
class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'cat';
        this.sound = this.doubleSound();
    }
    doubleSound(sound) {
        const str = `${sound} ${sound}`
        return str[0].toUpperCase() + str.slice(1);
    }
}


export default Cat;