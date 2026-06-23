let obj1 = {
  name: "ABC",
  class: "DEF",
  age: 1,
};
let obj2 = obj1;
// console.log(obj1)
// console.log(obj2)
obj2.name = "Vishal";
console.log(obj1);
console.log(obj2); //Shallow copy by reference share same address

// Deep copy actual copying
let obj3 = structuredClone(obj1);
obj3.name = "Kumar";
console.log(obj1);
console.log(obj3);

// Nested Object
const user = {
  name: "Vishal",
  age: 24,
  amount: 500,
  address: {
    city: "Delhi",
    pincode: 110096,
  },
};

console.log(user.address.city);
const user2 = Object.assign({}, user); // In assign nested object will change use (shallow copy) same address above nested use deep copy
user2.address.city = "Pune";
user2.name = "Rohit";
console.log(user.address.city);
console.log(user2.address.city);
console.log(user.name);
console.log(user2.name);

// Destructuring in Objects
let obj4 = {
  name: "Hritik",
  age: 50,
  balance: "Rs.500000000",
  city: "Mumbai",
  "Next Movie": "Avatar",
};
// const {name, age} = obj4
// console.log(name, age)
const { name: Full_name, age: Umar } = obj4;
console.log(Full_name, Umar);

const { name, age, ...other } = obj4;
console.log(name, age, other);

const arr = [1, 2, 3, 4, 5, 6];
const [one, two, ...other2] = arr;
console.log(one, two, other2);

const user3 = {
  name: "Vishal",
  age: 45,
  arr: [10, 20, 30, 40],
  address: {
    city: "Delhi",
    pin: 110096,
  },
};
console.log(user3);

const { address: adds } = user3;
console.log(adds);
const {
  address: { city },
} = user3;
console.log(city);
const {
  arr: [first],
} = user3;
console.log(first);

const user4 = {
  name: "Salman",
  age: 34,
  location: "Panvel",
  Bhai: function () {
    console.log("Aau kya apni par");
  },
  Rai: function () {
    console.log("Hum Dil De Chuke Sanam - Part 2 Directed by Abhishek Bachan");
  },
};
user4.Bhai();
user4.Rai();

const arr2 = [23, 34, 45, 4, 3, 34, 4, 51, 2];
console.log(arr2.__proto__);
