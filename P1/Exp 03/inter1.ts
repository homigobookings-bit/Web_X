namespace Academy {

    export class Person {
        name: string;
        id: number;

        constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
        }

        showName(): void {
            console.log(this.name + " is present.");
        }
    }

}
