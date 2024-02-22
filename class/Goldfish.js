import Fish from './Fish.js';

class Goldfish extends Fish {
    constructor(name, color, sound) {
        super(name, color)
        this.breed = 'goldfish';
        this.sound = sound;
        this.wishLimit = 3;
    }
    makeWish(myWish) {
        if (myWish < this.wishLimit) {
            return
        }
        if (myWish > this.wishLimit) {
            return 'Daugiau noru ispildyti nebegaliu :(';
        }
        // if () {
        //     return 'As nepildau noru / Wrong fish';
        // }
    }

}

export default Goldfish;

/*
        - Goldfish (name, color, wishLimit?), intro(), swim(), stopSwim(), makeWish()
            - wishLimit (default: 3)
            - makeWish({{myWish}})
                - jeigu liko neispildytu noru: Stai tavo noras: {{myWish}}
                - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu :(
                - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀
*/