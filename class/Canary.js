import Bird from './Bird.js';

class Canary extends Bird {
    constructor(name, color, sound, fly) {
        super(name, color)
        this.flying = true;
        this.breed = 'canary'
        this.sound = sound;
    }
}

export default Canary;