// console.log("This Keyword")

// let a  = 10
// const b = 20
// var c = 3
// console.log(this.c)

// function name(){
//     console.log(this) // this is not part of global scope else everything is part of glovbal scope 
// }

// name()


// 2. Inside a function
// Non strict mode: in this mode this keyword follow window, this, globalThis based on enviorment
// Strict mode: in this mode this keyword follow undefined 

"use strict"
function name(){
    console.log(this) // this is not part of global scope else everything is part of global scope 
}

name() //undefined
// window.name() //Here we gave context it will work because her we gave contaxt like window 

// a = 10 // a is not defined
// console.log(a) // without strict mode it will work fine but in strict mode it iwll throw an erroe


// let user = {
//     username:"Virat"
// }
// Object.freeze(user)
// user.username = "Vishal"
// console.log(user.username)


// #. Inside a Method (Object Context)
const obj = {
    name:"Vishal",
    age:24,
    greet:function(){
        console.log(this) // Here this keyword point to obj 
        // if in this this keyword point to obj then we can access obj keys
        console.log(this.name)
    }   
}
obj.greet() // it will work because here we gave context and here context is obj in strict mode

// In Arrow function doesn't have their own this keyword
// Instead, they inherit this from surrounding (lexical) scope
let obj2 = {
    name:"Vishal",
    age:25,
    greet:function(){
        let ab = ()=>{
            console.log(this) //here this keyword inherit from function keyword 
        }
        ab()
    }
}
obj2.greet()



// Inside a constructor and a class
// In constructor and classes, this refer to the instance of the object being created

class person{
    constructor(name){
        this.name = name
        console.log(this) // here this keyword point to instance of the object
    }
}

let p1 = new person("Virat")
console.log(p1)

let meet = function(){
    console.log(this)
}
meet() // in strict mode it will show undefined and in non strict mode it inherit from window and global object
