console.log("Operators in JavaScript");
console.log("Arithmetic Operators in JavaScript");
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);

console.log("Assignment Operators in JavaScript");
let x = 10;
console.log((x += 5));
console.log((x -= 5));
console.log((x *= 5));
console.log((x /= 5));
console.log((x %= 5));
console.log((x **= 5));

console.log("Comparison Operators in JavaScript");
// let a =10
// let b =20
console.log(a == b); //false
console.log(a === b); //false
console.log(a != b); //true
console.log(a > b); //false
console.log(a < b); //true
console.log(a >= b); //false
console.log(a <= b); //true
console.log("10" == a); //true
console.log("10" === a);

console.log("Logical Operators in JavaScript");
// let a =10
// let b =20
console.log(a > b && b > a);
console.log("And");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(a > b || b > a);
console.log("Or");
console.log(true || false);
console.log(false || false);
console.log(true || true);
console.log(false || true);

console.log("Unary Operators in JavaScript");
let Unary = 12;
console.log(++Unary);
console.log(Unary++);
console.log(--Unary);
console.log(Unary--);

if (!Unary) {
  console.log("Hello");
} else {
  console.log("World");
}

console.log("String Operator in JS");
let first = "Vishal";
let last = "Chitrode";
console.log(first + " " + last);

console.log("Ternary Operator in JS");
console.log(a > b ? "True" : "False");

console.log("Type Operators in JS");
console.log(typeof a);
let arr = [1, 2, 3, 4];
console.log(arr instanceof Array);

console.log("Bitwise Operators in JS");
console.log(5 & 6);
console.log(5 | 6);
console.log(5 ^ 6);
console.log(~5);
console.log(5 << 6);
console.log(5 >> 6);

console.log("Nullish Coalescing in JS");
console.log(null ?? "Hello");
console.log(undefined ?? "World");
console.log(0 ?? "World");

console.log("Optional Chaining in JS");
let user = null;
// console.log(user.name)  // Error Because user is null.

// With Optional Chaining
console.log(user?.name); // undefined

let adventure = {
  name: "Vishal",
  cat: {
    name: "CAA",
  },
};
let dogName = adventure.dog?.name;
console.log(dogName);
console.log(adventure.some?.());

console.log(user?.name); // Object Property
console.log(user?.[0]); // Array Element
console.log(user?.getname()); // Method Call

console.log("Short-Circuit Evaluation");
function method() {
  console.log("Method Called");
  return "Hello";
  // in function without return function return undefined
}
console.log(true || method());
console.log(false || method());
console.log(true && method());
console.log(false && method());

// Comparison between null and undefined
console.log("Comparing null and undefined with 0");

console.log("null" == undefined);
console.log("null" === undefined);
console.log("null" > undefined);
console.log("null" < undefined);
console.log("null" <= undefined);
console.log("null" >= undefined);

console.log("undefined" == null);
console.log("undefined" === null);
console.log("undefined" > null);
console.log("undefined" < null);
console.log("undefined" <= null);
console.log("undefined" >= null);

console.log(null == undefined); // true
console.log(null === undefined);
console.log(null > undefined);
console.log(null < undefined);
console.log(null <= undefined);
console.log(null >= undefined);

console.log(undefined == null); //true
console.log(undefined === null);
console.log(undefined > null);
console.log(undefined < null);
console.log(undefined <= null);
console.log(undefined >= null);

// only in this 2 cases when we compare null and undefined we get true else false

// console.log(null == undefined) // true
// console.log(undefined == null) //true
