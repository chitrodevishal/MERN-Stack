console.log("Maths in JS");

console.log(Math);
console.log(typeof Math);
// 1. In JS we can use built-in Math methods
let num = 4.7;
// How to round off a number
console.log(Math.round(num)); // rounds off to the nearest integer

// 2. Math is static
console.log(Math.round(num)); // we can call the method directly on the Math object without creating an instance

console.log(Math.random()); // generates a random number between 0 and 1

console.log(Math.max(1,2,3,4,5,6,7,8,9))
console.log(Math.min(1,2,3,4,5,6,7,8,9))    

console.log(Math.PI)
let radius = 5
// console.log(Math.PI*radius*radius)
console.log(Math.PI*Math.pow(radius,2))

console.log(Math.E)
console.log(Math.LN10)
console.log(Math.LN2)
console.log(Math.LOG10E)
console.log(Math.LOG2E)
console.log(Math.PI)
console.log(Math.SQRT1_2)
console.log(Math.SQRT2)

console.log(Math.round(19.4))
console.log(Math.round(19.5))

let rating = 4.5
console.log(Math.round(rating))
console.log(Math.ceil(rating))
console.log(Math.floor(rating))

let items = 53
let perPage = 10
console.log(Math.ceil(items/perPage))
console.log(Math.floor(items/perPage))

let age = 18.9
console.log(Math.round(age))
console.log(Math.ceil(age))
console.log(Math.floor(age))

console.log(Math.trunc(77.554))
console.log(Math.trunc(-7.554))

console.log(Math.random()) // generates a random number between 0 and 1
console.log(Math.random) // [Function: random]

console.log(Math.floor(Math.random()*10)) // generates a random number between 0 and 9

console.log(Math.ceil(Math.random()*10)) // generates a random number between 1 and 10

// 30 - 50
console.log(Math.floor(Math.random()*(50-30+1))+30) // generates a random number between 30 and 50

console.log(Math.pow(2,4)) // generates 2 to the power of 4

console.log(2**4) // generates 2 to the power of 4

console.log(Math.sqrt(16)) // generates the square root of 16

console.log(Math.abs(-465))

console.log(Math.sign(-345))
console.log(Math.sign(345))
console.log(Math.sign(0))

console.log(Math.sin(Math.sin(90 * Math.PI / 180))) // generates the sine of 90 degrees
console.log(Math.cos(Math.cos(90 * Math.PI / 180))) // generates the cosine of 90 degrees
console.log(Math.tan(Math.tan(90 * Math.PI / 180))) // generates the tangent of 90 degrees

console.log(Math.cos(0))

console.log(Math.floor(Math.random()*6)+1) // generates a random number between 1 and 6 (inclusive) - simulating a dice roll

let productPrice = 99
let discount = 2
console.log(Math.ceil(productPrice/discount)) // calculates the price after discount and rounds it up to the nearest integer
