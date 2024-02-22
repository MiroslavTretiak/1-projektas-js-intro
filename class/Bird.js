import Animal from './Animal.js';

class Bird extends Animal {

    fly() {
        this.flying = true;
        return `${this.name} skrenda`;
    }
    stopFly() {
        this.fly = false;
        return `${this.name} tupi`;
    }

}

export default Bird;

//Bird(name, color), intro(), fly(), stopFly():