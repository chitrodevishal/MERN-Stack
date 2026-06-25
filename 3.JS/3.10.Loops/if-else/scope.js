// let a = 10;
// var b = 20;
// const c = 30; // Global scope

// console.log(a)
// console.log(b)
// console.log(c)
function print() {
  console.log(a);
  console.log(b);
  console.log(c);
}
// print();

// Local scope and functional scope

function greet() {
  let a = 10;
  var b = 20;
  const c = 30; // we can access this a,b,c within this function scope
  console.log("Hello World");
  console.log(a, b, c);
}

// greet();
// console.log(a);
// console.log(b);
// console.log(c); // not access outside the function or local scope

if (true) {
  let a = 100;
  var b = 200;
  const c = 300;
}

//  console.log(a); // a is not defined because of let we can't access outside the block
console.log(b); // because of var we can access var outside the block, var didn't follow block scope
// console.log(c); // c is not defined because of let we can't access outside the block

let amount = 30;
if (true) {
  let amount = 20;
  console.log(amount); // this will allowed
}
// let amount = 50; this will not allowed because of redeclaration

console.log(c1); // undefined because of hoisting
var c1 = 100;

Salman();
function Salman() {
  console.log("Keep your voice down, mein aajau kya apni par !");
}
// rai() // error can't access before intialization
const rai = function Aishwariya() {
  console.log("Salman 'Dil de chuke sanam part 2' hojaye");
};
