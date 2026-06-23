console.log("Objects in JS");
// How to create a objects
const obj = {
  name: "Vishal",
  age: 26,
  amount: "Rs.5 Crore",
  gender: "Male",
};
console.log(obj);
// But in arr how can we identify name, age, gender and amount
const arr = ["Vishal", 26, "Rs.5 Crore", "Male"]; //key: value that'swhy array is object type
console.log(arr);
console.log(arr.length);
console.log(typeof arr);
// const insta = {
//   username: "neha_sharma",
//   password: "123@Sharma",
// };
// console.log(insta);
// console.log(typeof insta);

const obj2 = {
  //key: value
  // all keys are converted into string
  0: 10,
  1: 20,
  2: 30,
  name: "Mohit",
  age: 25,
  amount_bal: "Rs.2 Crore",
  gender: "Male",
  "body count": 0,
  undefined: "Mohit",
  null: "zero",
};
console.log(obj2);
console.log(obj2[0]);
console.log(obj2["0"]);
console.log(obj2[1]);
console.log(obj2["1"]);
console.log(obj2[2]);
console.log(obj2["2"]);
console.log(obj2["name"]);
console.log(obj2.name);
console.log(obj2["amount_bal"]);
console.log(obj2["body count"]);

console.log(arr[0], obj2[0]);

console.log(arr[0], obj2["0"]);

// 2. other way to create object
const per1 = new Object();
per1.name = "Vishal";
per1.age = 34;
per1.amount = "Rs.4000";
console.log(per1);
// delete
delete per1.age;
// update
per1.name = "Rohit";
console.log(per1);

// 3. create object using class
class person {
  constructor(na, ag, gen) {
    this.name = na;
    this.age = ag;
    this.gender = gen;
  }
}
const object = new person("Vishal", 26, "Male");
const object2 = new person("Mohit", 28, "Female");
console.log(object);
console.log(object2);

let obj3 = {
  name: "Rohit",
  age: 34,
  amount: "Rs.34572",
};
const key = Object.keys(obj3);
console.log(key); // only keys

const val = Object.values(obj3);
console.log(val); // only values

const ent = Object.entries(obj3);
console.log(ent); //both

// Assign operator
let obj4 = { a: 1, b: 2 };
let obj5 = { c: 3, d: 4 };
let obj6 = { e: 5, f: 6 };
// const obj7 = Object.assign(obj4, obj5, obj6); // in this obj4 also change
const obj7 = Object.assign({}, obj4, obj5, obj6);
console.log(obj7, obj4, obj5, obj6);

obj7.a = 10;
console.log(obj7.a);
console.log(obj4.a); // deep copy 
const obj8 = { ...obj4, ...obj5, ...obj6 };
console.log(obj8)
