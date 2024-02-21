class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'pet';
        this.sound = 'Au miau niom';
    }
    intro() {
        return `${this.name}: Hi, i am ${this.color} ${this.breed}. ${this.sound}!!`;
    }
}

export default Pet;

