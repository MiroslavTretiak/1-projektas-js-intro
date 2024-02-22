import Bird from './Bird.js';

class Stark extends Bird {
    constructor(name, color, sound) {
        super(name, color)
        this.breed = 'stark';
        this.sound = 'Kar';
        this.fly = true;
        this.babiesCount = 0;
    }
    bringBabie(amount) {
        let babies = this.babiesCount += amount;
        return `Zmones i kopustu lauka atnesiau dar viena vaika ${babies}`
    }
}

export default Stark;

/*
        - Stark (name, color), intro(), fly(), stopFly(), bringBabies()
            - babiesCount
            - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika ({{babiesCount}})
*/
