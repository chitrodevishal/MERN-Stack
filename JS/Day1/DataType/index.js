console.log("Data Types in JavaScript");

let x = 10;
console.log(x);
console.log(typeof x);
x = "hello";
console.log(x);
console.log(typeof x);
x = true;
console.log(x);
console.log(typeof x);

// A. Number
let age = 22;
console.log(age);
console.log(typeof age);

// Special Number Values

//Infinity
console.log(10 / 0);

//NAN (Not a Number)
console.log("Hello" * 123);

// B. String

let name = "Vishal";
console.log(name);
console.log(typeof name);

let last_name = "Chitrode";
console.log(last_name);
console.log(typeof last_name);

console.log(`Hello ${name} ${last_name}`);

// C. Boolean

let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
if (isLoggedIn) {
  console.log(`Finally ${name} ${last_name} you are logged in`);
}

// D. Undefined
let Undefined;
console.log(Undefined);
console.log(typeof Undefined);

// E. Null
let y = null;
console.log(y);
console.log(typeof y);

//F. Symbol

let id = Symbol("hello");
console.log(id);
console.log(typeof id);

// G. BigInt

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// 2. Non-Primitive (Reference) Types

// A. Object
let user_info = {
  first_name: "Vishal",
  last_name: "Chitrode",
  age: 25,
  email: "vishal@gmail.com",
};
console.log(user_info);
console.log(typeof user_info);

//B. Array

let arr = [11, 12, 14, "Vishal", "Chitrode"];
console.log(arr);
console.log(arr[1]);
console.log(typeof arr);

//C. Function

let fun = function fun1() {
  console.log("This is a Function");
};
fun();
console.log(typeof fun);
// Here it will show function

console.log(typeof fun1);
// Here it will show undefined

//Important Reference like Primitive vs Reference
// Primitive Copy
// let p=10
// q=p;
// console.log(p)
// console.log(q)

let p = 10;
q = p;
console.log(p);
console.log(q);
p = 20;
//Here p will change
console.log(p);
//Here will not change it still has previous value of p
console.log(q);

//Reference Copy
let user1 = {
    first_name : "Vishal",
    last_name : "Chitrode",
    age : 25,
    email : "vishal@gmail.com",
}
let user2 = user1;
console.log("user1");
console.log(user1);
console.log("user2");
console.log(user2);

// user2.first_name = "ABC"
user1.first_name = "ABC"
console.log("user1");
console.log(user1);
console.log("user2");
console.log(user2);



// Type Coercion in JavaScript
// 2 is coerced to "2", then "5" + "2" = "52"
console.log("5" + 2)
// and 5 is coerced to "5", then "5" + "2" = "52"
console.log(5 + "2")
console.log("Vishal" - 2)
console.log("3" - 2)


//This is not a JavaScript bug because it is floating-point mathematics
console.log(0.1 + 0.2 !== 0.3)

