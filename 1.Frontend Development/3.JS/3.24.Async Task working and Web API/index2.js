console.log("Hello World")
setTimeout(() => {
    const a = 2+4
    console.log(a)
}, 5000);


setInterval(() => {
    console.log("I am Vishal")
},2000);

let b = 20
let arr = [1,2,4]
for(let i of arr){
    console.log(i)
    console.log(i*b)
}