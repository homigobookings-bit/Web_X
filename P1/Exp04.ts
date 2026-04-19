// Parent class
class Employee {
    public name: string = "yourName";
    protected dept: string = "IT";
    private pay: number = 30000;

    showPay() {
        console.log(this.pay);
    }
}

// Child class
class Manager extends Employee {

    showDept() {
        console.log(this.dept);
    }
}

// Object creation
let e = new Manager();

// Accessing members
console.log(e.name);
e.showPay();
e.showDept();
