console.log("All about Writable, Enumerable, Confirgurable");
let obj = {};
// console.log(obj) // this will return empty obj {}
obj.name = "Chitrode";
obj.age = 24;
// console.log(obj) // this will return { name: 'Chitrode', age: 24 }

console.log(Object.getOwnPropertyDescriptors(obj, "name"));
 // Those 3 properties own by default while we creating objects
//  writable: true: meaning we will update or change the value of object keys if keys writable is true else we will not

// enumerable: true,
// configurable: true: if it's true then we can update or change the value of writable and enumerable  else we will not change above both

let user = {};
Object.defineProperty(user, "name", {
  value: "Chitrode",
  writable: true,
  enumerable: true,
  configurable: false,
});
user.name = "Vishal"; // this will not change if writable is false else it will update the value
console.log(user);
Object.defineProperty(user, "name", {
  writable: false,
});
user.name = "Virat Kholi";
console.log(user);

const insta = {
  insta_display_name: "Neha Sharma",
  insta_username: "_neha_sharma",
  insta_password: 12345,
};
// console.log(insta);

Object.defineProperty(insta, "insta_username", {
  value: "_neha_sharma",
  writable: false, // now we can't update this ("insta_username") property
});
insta.insta_username = "itsNehaSharma";
console.log(insta);
console.log(insta.insta_username);

const customer = {
  name: "Vishal",
  age: 34,
  account_bal: 98765,
  mobile_num: 9876543210,
};
console.log(customer);

for (let key in customer) {
  console.log(key); // it will print all keys from customer
  // console.log(key,customer[key])
}

Object.defineProperty(customer, "mobile_num", {
  enumerable: false, // it will not print this in console.log even in from inherit else it will print 
});
console.log(customer);

for (let key in customer) {
  console.log(key); // it will print all keys from customer
  // console.log(key,customer[key])
}

const customer1 = Object.create(customer)
customer1.name = "Rahul",
customer1.city = "Delhi"

// console.log(Object.keys(customer1))
console.log("\n")
// for(let key in customer1){
//     console.log(key)
// }

console.log(Object.getOwnPropertyDescriptors(Object.prototype, 'toString'))
Object.defineProperty(Object.prototype, "toString", {
    enumerable: true
} )
for(let key in customer){
    console.log(key) // now it will print toString after enumerbale true 
}

//(Homework) defineproperties
