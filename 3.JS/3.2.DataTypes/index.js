console.log("Data Type in JS");
// Let
let score = 20;
console.log(score);
console.log(typeof score);
score = 30;
console.log(score);
console.log(typeof score);

// Const :
const score2 = 10;
console.log(score2);
// console.log(typeof score2)
// score2 = 40
// console.log(score2)
// console.log(typeof score2)

// Var
if (true) {
  var message = "Hello World";
}
console.log(message);
console.log(typeof message);

// Declaration
let age;
console.log(age);
console.log(typeof age);

// Initialization
let age2 = 10;
console.log(age2);
console.log(typeof age2);

// Reassignment
let age3 = 20;
age3 = 40;

console.log(age3);
console.log(typeof age3);

// Two Main Categories
// Primitive Types
// Non-Primitive Types
console.log("Primitive Types");
//  string
// number
// boolean
// undefined
// null
// bigint
// symbol

//String
let string = "Vishal Chitrode";
let string1 = "ABC Chitrode";
let string2 = `DEF`;
string2 = "GHI";
console.log(string);
console.log(typeof string);
console.log(string1);
console.log(typeof string1);
console.log(`My name is ${string2}`);
console.log(typeof string2);

let number = 21;
console.log(number);
console.log(typeof number);

// NaN
console.log(0 / 0);
console.log(typeof (0 / 0));

// Infinity
console.log(1 / 0);
console.log(typeof (1 / 0));

// Boolean
let isLogin = 123;
if (isLogin == true) {
  console.log("Welcome to Dashboard");
} else {
  console.log("Invalid Credentials");
}

// Undefined
let undef;
console.log(undef);
console.log(typeof undef);

// Null
let empty = null;
console.log(empty);
console.log(typeof empty);

// BigInt

// let large = 23345345345352351235235123534321
let large = 23345345345352351235235123534321n;
console.log(large);
console.log(typeof large);

// Symbol
const id = Symbol("id");
console.log(id);
console.log(typeof id);

// Non-Primitive Data Types
console.log("Non-Primitive Data Types");
// Objects
let user = {
    name:"Vishal",
    age:26,
    gender:"Female"
}
console.log(user);
console.log(typeof user);

// Array
let arr = [1,2,3,4,5]
console.log(arr);
console.log(typeof arr);

// Function
function greet(){
    console.log("Hello!")
}

greet()

let fun = function greet(){
    console.log("Hello!")
}
console.log(greet()) //undefined