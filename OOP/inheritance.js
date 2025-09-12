// 1. Inheritance
class SmartPhone {
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`${this.brand} model ${this.model} is Charging`);
    }

}

class iOS extends SmartPhone {
    airDrop() {
        console.log(`AirDrop is active`);
    }
}

class Android extends SmartPhone {
    splitScreen() {
        console.log(`Split Screen is active`);
    }
}

const phone1 = new iOS('Black', 'Apple', 'iPhone 14 Pro Max');
const phone2 = new Android('White', 'Samsung', 'Galaxy S23 Ultra');

phone1.charging();
phone1.airDrop();

phone2.charging();
phone2.splitScreen();