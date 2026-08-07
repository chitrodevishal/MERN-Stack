"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("TS Intro 3".toUpperCase());
let person1 = {
    name: "Ali",
    age: 25,
    gender: "Male",
};
let person2 = {
    name: "Ali",
    age: 25,
    gender: "Male",
    aadhar: 1234567890,
};
console.log(person1, person2);
// Partial, Required and Read Only
let customer1 = {
    name: "Vishal",
    age: 25,
    gender: "Male",
    "Account Balance": 50000,
};
// customer1["Account Balance"] = 600000 // because of Readonly we can't change this
console.log(customer1);
const arr = [
    { name: "Vishal", age: 23 },
    { name: "Chitrode", age: 26 },
];
// Function in TS
function greet() {
    console.log("Hello World");
}
greet();
// function print(a) show error because it assume it's any which is danger zone
function print(a) {
    // by default it return type is number without :number
    console.log(a);
    return a + 5;
}
console.log(print(2));
function meet(name, age) {
    console.log(`Hello ${name} Chitrode and I'm ${age} year old`);
}
meet("Vishal", 25);
// Default parameter
function JEE(name = "Vishal") {
    console.log(`Hello ${name}!`);
}
JEE(); // if we don't pass anything it will take default value
JEE("Gudu");
// Optional parameter
function JEE2(name) {
    console.log(name || "Shyam");
}
JEE2("Mohan");
JEE2();
// arrow function
// const sum = {num, num1} =>{
const sum = (num, num1) => {
    return num + num1;
};
console.log(sum(1, 2));
const cube = (num) => {
    return num ** 3;
};
console.log(cube(2));
// callback function
function placeorder(order, callback) {
    const amount = order + 100;
    callback(amount);
}
placeorder(1000, (amount) => {
    console.log(amount);
});
// Rest Parameter
const sum1 = function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans += val);
    return ans;
};
console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//# sourceMappingURL=app.js.map