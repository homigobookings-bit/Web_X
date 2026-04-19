namespace Academy {

    export class Person {
        fullName: string;
        id: number;

        constructor(fullName: string, id: number) {
            this.fullName = fullName;
            this.id = id;
        }

        joinSession(): void {
            console.log(this.fullName + " has joined the session.");
        }
    }

}
