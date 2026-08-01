// Js is sync language
// console.log("10")
// console.log("20")
// console.log("30")

// Js is async language

// this is async task (async task expect a call back function)
// console.log("10")
// setTimeout(()=>{ // it is not a part of JS, it's a part of web api
//     console.log("20")
// },2000)
// console.log("30")

// single threaded mean single task at a time

// this is sync task
console.log("10")
const date = Date.now()
while(Date.now()-date<2000){
    // wait for 2 sec
}
console.log("20")
console.log("30")