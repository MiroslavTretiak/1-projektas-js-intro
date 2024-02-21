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



/*

Reikia class'es: Parrot
savybes: 
- vardas
- spalva
- amzius
- miega/nemiega
funkcionalumas:
- gali pakartoti pasakyta zodi
    - jeigu miega, nereaguoja
    - jeigu pasakomas daugiau ne vienas zodis, tai pakartoja tik pirma zodi
- galima uzmigdyti
- galima pazadinti
*/
console.clear();

class Parrot {
    constructor(vardas, spalva, amzius) {
        this.vardas = vardas;
        this.spalva = spalva;
        this.amzius = amzius;
        this.miega = 'Miega', true;
        this.text = 'Ka tu vakare, ka vakare?';
    }
    pazadinti() {
        this.miega = false;
        console.log('Papuga pabudo')

    }
    uzmigdyti() {
        this.miega = true;
        console.log('Papuga jau miega')
    }

    kalbeti() {
        if (this.miega === true) {
            console.log('Kai pabuga miega ji nekalba')
        } else {
            console.log(this.text.split(" ")[0])
        }
    }
}



const papuga = new Parrot('Kiesha', 'Melyna', '1');
console.log(papuga);

// console.log('Vardas:', papuga.vardas);
// console.log('Spalva:', papuga.spalva);
// console.log('Amzius:', papuga.amzius);
// console.log('Bukle:', papuga.miega);


papuga.uzmigdyti();

papuga.pazadinti();

papuga.kalbeti();

papuga.uzmigdyti();

papuga.kalbeti();

