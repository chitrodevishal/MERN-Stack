"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Here we create a class
class person {
    name;
    age;
    gender;
    constructor(n1, n2, n3) {
        this.name = n1;
        this.age = n2;
        this.gender = n3;
    }
    greet() {
        console.log(`${this.name}`);
    }
}
// This is blue print of object
// Here we create an object of class
let person1 = new person("John", 30, "Male");
let person2 = new person("John", 30, "Male");
console.log(person1);
console.log(person2);
person1.greet();
class customer {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    meet() {
        this.age = this.age + 100;
        return this.age;
    }
}
let customer1 = new customer("Vishal", 28, "Male");
console.log(customer1);
console.log(customer1.name);
console.log(customer1.meet());
// console.log(customer1.gender);
class employee extends customer {
    salary;
    constructor(salary, name, age, gender) {
        super(name, age, gender);
        this.salary = salary;
    }
    meet() {
        console.log("Hello world");
        return 100;
    }
}
let employee1 = new employee(50000, "John", 30, "Male");
console.log(employee1);
console.log(employee1.meet());
console.log(employee1.name);
// Generic : Templates
function value(a) {
    return a;
}
// console.log(value(10))
// console.log(value("String"))
// console.log(value(false))
// we want to build this generic
function value1(a) {
    return a;
}
console.log(value1(10));
console.log(value1("String"));
console.log(value1(10));
console.log(value1("String"));
console.log(value1(false));
let user = {
    name: "John",
    age: 30,
    aadhar: 1234,
};
let user1 = {
    name: "John",
    age: 30,
    aadhar: "1234",
};
console.log(user);
console.log(user1);
//# sourceMappingURL=app.js.map