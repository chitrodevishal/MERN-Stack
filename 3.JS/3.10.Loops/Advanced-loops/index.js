console.log("Advanced Loops\n");
let user = {
  name: "Vishal",
  age: 25,
  amount: 5000000,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
    pincode: 400001,
    country: "India",
  },
};
console.log(user);
// For in loop usercase:  we can iterate over key in an object ( user )
// for(let key in user) here key is variable name and user is obj name
for (let key in user) {
  // console.log(key) // this will print all key from objects
  // console.log(user[key]) // this will print all values from objects
  console.log(key, user[key]); // this will print all keys and values from objects
}

console.log(Object.keys(user)); // this will return a an array in which we get all key of an objects
console.log(Object.values(user)); // this will return a an array in which we get all values of an objects

let user1 = Object.create(user);
console.log(user1); // this will return {}

// Now we will add some properties to user1 obj
user1.name = "Rahul";
user1.age = 34;
user1.aadhar = 9876543210;

console.log(user1); // this will return a an array in which we get all keys and values { name: 'Rahul', age: 34, aadhar: 9876543210 }

console.log(user1.address); // this will return nested object and address from user1
console.log(user.aadhar); //this will return undefined because

console.log(Object.keys(user1)); //this will print only their own keys e.g.[ 'name', 'age', 'aadhar' ]

for (let key in user1) {
  console.log(key, user1[key]); // this will their own key as well as they will alsp print inherited key (from user ) too
}

console.log(user1.toString())
 // [object Object]
 