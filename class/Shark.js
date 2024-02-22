import Fish from './Fish.js';

class Shark extends Fish {
    constructor(name, color, sound) {
        super(name, color)
        this.swiming = true;
        this.breed = 'shark'
        this.sound = 'shark attack';
    }
    eatHuman() {
        return 'Kaip noreciau paragauti zmogu...'
    }

}

export default Shark;

/*
        - Shark (name, color), intro(), swim(), stopSwim(), eatHuman()
            - eatHuman() Kaip noreciau paragauti plaukmenu...
*/