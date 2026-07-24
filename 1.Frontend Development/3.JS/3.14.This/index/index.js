console.log("This Keyword") // console.log() is a built-in JavaScript method
// console is an object.
// log() is a method (a function that belongs to an object).
 
// globalobject : object
// chrome : window
// Nodejs : global
console.log(this)
console.log(Math.random())

let user = {
    name:"Virat",
    age:34
}
console.log(user.age)
// console.log(this.user.age) // undefined

// let str = new globalThis.String("Vishal") //we can write this but browser understood automatically global objects by itself
let str = new String("Vishal")
console.log(str)