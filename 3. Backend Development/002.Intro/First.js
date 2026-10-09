
// 1st Way
// const add = require("./src/add")
// const sub = require("./src/sub")
// const mul = require("./src/mul")

// 2nd Way
// const {add, sub, mul} = require("./src/index")
// index name is required for this way 
const {add, sub, mul} = require("./src")
add(2,3)
sub(2,4)
mul(2,3)
console.log("Hello World")