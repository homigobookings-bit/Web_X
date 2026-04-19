/// <reference path="inter1.ts" />

namespace Academy {

    
    export interface Student {
        name: string;
        id: number;
        showName(): void;
        showDetails(): void;
    }

    export class CollegeStudent extends Person implements Student {

        course: string;

        constructor(name: string, id: number, course: string) {
            super(name, id);
            this.course = course;
        }

        showDetails(): void {
            console.log("Name:", this.name);
            console.log("ID:", this.id);
            console.log("Course:", this.course);
        }
    }

    
    let studentObj: Student = new CollegeStudent("Shreyas", 20, "IT");

    studentObj.showName();
    studentObj.showDetails();

}
