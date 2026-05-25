console.log("Memory Management in JS")

let a = 10
let b = ab=50
console.log(a)
console.log(b)

// Memory management in JavaScript is handled automatically through a process called garbage collection. 
// When a variable is no longer needed, the memory it occupies can be reclaimed by the garbage collector, 
// which helps to prevent memory leaks and optimize performance.

let obj1 = {
    id:10,
    Name: "Vishal",
    Email: "vishal@example.com"
}
let obj2 = obj1 // obj2 is referencing the same object as obj1
obj2.id = 45
console.log(obj1)
console.log(obj2)

function one(){
    console.log("Inside function one")
    two()
}
function two(){
    console.log("Inside function two")
    // one() // This will cause a stack overflow due to infinite recursion
}
one()

// In the above code, we have two functions, one and two. When we call one(), it executes and calls two() within it. 
// Once the execution of one() is complete, the memory allocated for its variables and function context can be reclaimed by the garbage collector, 
// as they are no longer needed. The same applies to two() once it finishes executing.

let user = {
    id:21,
    name: "vishal",
    email: "vishal@example.com"
}
user = null // This will allow the garbage collector to reclaim the memory used by the user object
console.log(user) // Output: null

// let arr = [];

// setInterval(() => {
//   arr.push(new Array(1000000));
// }, 1000); 

// let arr = [];
// let count = 0;

// const robot = setInterval(() => {
//   arr.push(new Array(1000000));
//   count++;

//   if (count === 5) {
//     clearInterval(robot) // 🛑 robot stops after 5 times
//     arr = []             // 🧹 empty the box
//   }
// }, 1000); 

// clearInterval(robot) → stops the robot

// arr = [] → empties the box

function outer(){
    let count = 0
    return function inner(){
        count++
        console.log(`Hello ${count}`)
        // count++
    }
}

const fn = outer()
fn() // Output: 1
fn() // Output: 2
fn() // Output: 3

// Shallow Copy vs Deep Copy

let a = "Vishal"
let b = a // This creates a shallow copy of the string

// Both share same heap object.


