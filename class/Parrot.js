import Bird from './Bird.js';

class Parrot extends Bird {
    constructor(name, color, sound) {
        super(name, color)
        this.fly = true;
        this.breed = 'parrot'
        this.history = ' ';
        this.sound = 'Chik chirik';
    }

    repeatSound(sound) {
        this.sound = [];
        this.sound += sound;

        return this.sound;
    }

    repeatHistory() {
        let str = [];
        // for (let i = 0; i = 2; i++) {
        //     str = (this.sound).push(i);
        // }
        return str;
    }
}

export default Parrot;

/*

Bird (name, color), intro(), fly(), stopFly():
- Parrot(name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
    - history
    - repeatSound({{ sound }})
    - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus

*/