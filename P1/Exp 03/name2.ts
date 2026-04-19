/// <reference path="name1.ts" />

namespace Vehicle {

    export class Bike extends Machine {

        engineType: string;

        constructor(company: string, engineType: string) {
            super(company);
            this.engineType = engineType;
        }

        details(): void {
            console.log("Company Name:", this.company);
            console.log("Engine Type:", this.engineType);
        }
    }

}

// Object creation
let b1 = new Mobility.Bike("Honda", "Petrol");

// Method calls
b1.start();
b1.details();
