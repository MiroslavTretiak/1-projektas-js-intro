/*
OOP - "objektinis" programavimas
*/

class Car {
    constructor(brandas, modelis, spalva, kaina) {
        // this - kontekstinis kintamasis
        this.brand = brandas;
        this.model = modelis;
        this.color = spalva;
        this.price = kaina;
        this.isEngineOn = false;
        this.windowsHeight = [1, 1, 1, 1];
        this.tankSize = 40;
        this.tankLevel = 15;
    }

    turnOnEngine() {
        this.isEngineOn = true;
    }
    turnOffEngine() {
        this.isEngineOn = false;
    }
    fillTank(amount) {
        if (this.tankLevel + amount <= this.tankSize) {
            this.tankLevel += amount;
        } else {
            const diff = this.tankSize - this.tankLevel;
            this.tankLevel = this.tankSize;
            console.log(`Per daug, ipilta tika ${diff}`);

        }
    }
}


const audi = new Car('Audi', '80', 'red', '300');
const tesla = new Car('Tesla', 'Roadster 2', 'black', 100_000);


// audi.turnOnEngine();
// tesla.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn)

// audi.turnOffEngine();
// tesla.turnOffEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn)

console.log('Talpa:', audi.tankSize);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(5);
console.log('Dabartinis kiekis:', audi.tankLevel)
audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel)