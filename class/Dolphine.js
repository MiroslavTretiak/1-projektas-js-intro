import Fish from './Fish.js';

class Dophine extends Fish {
    constructor(name, color, sound) {
        super(name, color)
        this.breed = 'dolphine';
        this.sound = sound;
        this.jumpCount = 0;
    }
    jumpFromWater(amount) {
        amount += this.jumpCount;
        return `Delfinas issoko is vandens ${amount} -a karta`
    }
}

export default Dophine;

/*
- Dophin(name, color), intro(), swim(), stopSwim(), jumpFromWater()
    - jumpCount
    - jumpFromWater() Delfinas issoko is vandens { { jumpCount } } -a karta
*/