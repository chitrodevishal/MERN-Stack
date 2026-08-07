// export {}; // resolve from Cannot redeclare block-scoped variable 'a'
let num: number = 10;

let x = 20; // Type inference means that TypeScript automatically figures out the type of a variable, function return value, or expression without you explicitly writing the type.

x = 30;
// x = "Vishal" // It's show error

let honey; // it's data type is any (it's danger zone)
honey = 10;
honey = "Chitrode";

console.log(honey.toUpperCase());

// solution for danger zone
let val1: unknown; // va1 unknown
// val1 = 10
val1 = "First Name";
val1 = 10;
if (typeof val1 === "string") {
  console.log(val1.toUpperCase());
}

// Use any when you want to disable type checking.
// Prefer unknown when the type is not known yet.

// Array
// let arr1:number[] = [1,2,3,4,5,6,7,8,9] // by default it's datatype is number
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // by default it's datatype is number
// let arr2:(mixed type)[] = [1,2,3,false, "vishal", null, undefined, 123n]
let arr2 = [1, 2, 3, false, "vishal", null, undefined, 123n];

// Tuple is fixed size
let tuple: [number, string] = [100, "Vishal"];


// Now here we start defining Object
const obj:Object = {
    name:"Vishal",
    age:23,
}
console.log(obj)
// inline
const obj1:{name:string, age:number, gender:string} = {
    name:"Vishal",
    age:23,
    gender:"Male"
}
console.log(obj1)

let person:{name:string, age:number, gender:string}
person = {
    name:"Vishal",
    age:23,
    gender:"Male"
}


// Here we defined user defined data type 
type customer = {
    name:string,
    age:number,
    gender:string
}

let c:customer = {
    name:"Vishal",
    age:23,
    gender:"Male"
}

interface admin {
    name:string,
    age:number,
    gender:string
}
interface admin {
    id:number
}

let c1:admin = {
    name:"Vishal",
    age:23,
    gender:"Male",
    id:2020
}
