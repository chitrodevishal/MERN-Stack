console.log("Operators in JS");
console.log("Types of Operators");
// Assignment Operators
// Arithmetic Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// Type Operators
// Ternary Operator

console.log("Assignment Operators");
let age = 21;
console.log(age);
console.log(typeof age);

console.log("Compound Assignment Operators");
//Combination of arithmetic and assignment operator in one shorthand operation
age += 20;
console.log(`Age after += ${age}`);
age -= 5;
console.log(`Age after -= ${age}`);
age *= 2;
console.log(`Age after *= ${age}`);
age /= 6;
console.log(`Age after /= ${age}`);
age %= 5;
console.log(`Age after %= ${age}`);
console.log(age ** 2);

let str1 = "Vishal ";
let str2 = "Chitrode";
console.log(str1 + str2);

console.log("Increment Operator");
let num1 = 10;
console.log(num1++);
console.log(++num1);
console.log(num1--);
console.log(--num1);

// Comparison Operators
console.log("Comparison Operators");
console.log(1 == true);
console.log(0 == true);
console.log(10 > 9);
console.log(10 < 9);
console.log(10 <= 9);
console.log(10 >= 9);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 === 9);

// Logical Operators
console.log("Logical Operators");
console.log( (5&&2)) //2
console.log( (0&&2)) //0
console.log( (5||2)) //5
console.log( (0||2)) //2
console.log(!(5>2));

console.log(false&&false)
console.log(false&&true)
console.log(true&&false)
console.log(true&&true)
console.log("\n")
console.log(false||false)
console.log(false||true)
console.log(true||false)
console.log(true||true)

// Bitwise Operators
console.log("Bitwise Operators")
console.log(5&2)
console.log(5|2)
console.log(5^2) 
console.log(5<<2) 
console.log(25>>2) 

// Ternary Operator
console.log("Ternary Operator")
console.log(true? "Yes":"No")
console.log(false? "Yes":"No")