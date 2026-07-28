console.log("Hello World")
setTimeout(()=>{ // it's not a part of JS it's a part of web api
    const a = 2+5
    console.log(a)
}, 2000)
let b = 20
let arr = [1,2,34]
for(let i of arr){
    console.log(i*b)
}

// web api = {settimeout, setinterval, fetch, DOM, console}
// web api is part of browser like JS engine, DOM, time, etc..