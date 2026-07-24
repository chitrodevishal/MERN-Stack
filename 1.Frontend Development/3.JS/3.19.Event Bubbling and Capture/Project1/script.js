const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

// Bubbling and Capture
// by default Bubbling  (from inside to outside )
// addEventListener(event, call back function, true/false (capturing)) // by default (from outside to inside)capturing false
// child.addEventListener("click", () => {
//     console.log("Child")
 
// }, false )
// parent.addEventListener("click", () => {
//     console.log("Parent")
   
// }, false)
// grandparent.addEventListener("click", () => {
//     console.log("Grandparent")
   
// }, false)

// capturing (from outside to inside)
// child.addEventListener("click", () => {
//     console.log("Child")
 
// }, true )
// parent.addEventListener("click", () => {
//     console.log("Parent")
   
// }, true)
// grandparent.addEventListener("click", () => {
//     console.log("Grandparent")
   
// }, true)

//random
// child.addEventListener("click", () => {
//     console.log("Child")
 
// }, true )
// parent.addEventListener("click", () => {
//     console.log("Parent")
   
// }, false)
// grandparent.addEventListener("click", () => {
//     console.log("Grandparent")
   
// }, true)
// OR
child.addEventListener("click", (event) => {
    console.log("Child")
    // console.log(event.target)
    // console.log(event.currentTarget)
 
}, false )
parent.addEventListener("click", (event) => {
    console.log("Parent")
    // console.log(event.target)
    // console.log(event.currentTarget)
   
}, false)
grandparent.addEventListener("click", (event) => {
    console.log("Grandparent")
    // console.log(event.target)
    // console.log(event.currentTarget)
   
}, false)