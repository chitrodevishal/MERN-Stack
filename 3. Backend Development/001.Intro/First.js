const {add, sub} = require("./Second") 
// This is traditional way to import module (different files are called module)
// (function(){
//     console.log("This is Second");

// function add(a, b) {
//   return a + b;
// }
// const output =  add(2,3)
// console.log(output)
// })()
console.log("This is First")
const output =  add(2,3)

console.log(output)