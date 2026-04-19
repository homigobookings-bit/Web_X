// Parent class
class Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(this.brand + " is now ready to move");
    }

    showSpeed(): void {
        console.log("Current Velocity:", this.speed + " km/h");
    }
}

// Child class
class Car extends Vehicle {
    fuelType: string;

    constructor(brand: string, speed: number, fuelType: string) {
        super(brand, speed); // call parent constructor
        this.fuelType = fuelType;
    }

    display(): void {
        console.log("Manufacturer:", this.brand);
        console.log("Runs on:", this.fuelType);
    }
}

// Object creation
let myCar = new Car("Hyundai", 95, "Diesel");

// Method calls
myCar.start();
myCar.showSpeed();
myCar.display();
