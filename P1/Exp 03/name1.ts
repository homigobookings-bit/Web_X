namespace Vehicle {

    export class Machine {
        company: string;

        constructor(company: string) {
            this.company = company;
        }

        start(): void {
            console.log(this.company + " machine is now running.");
        }
    }

}
