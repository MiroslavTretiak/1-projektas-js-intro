import Pet from './Pet.js';
class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'hamster';
        this.sound = 'Niom Niom';
        this.foodAmount = 0;
    }
    eat(amount) {
        let morkos = this.foodAmount += amount;
        return `Mano burnoje siuo metu yra ${morkos} morku-(os)`
    }
}

// - Hamster(name, color), intro(), eat()
//     - foodAmount
//     - eat(): Mano burnoje siuo metu yra { { foodAmout++ } } 


export default Hamster;