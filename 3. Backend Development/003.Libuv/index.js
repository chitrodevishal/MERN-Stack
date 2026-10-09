const fs = require('fs')
fs.readFile("./data.json", "utf-8", (err, res)=>{
    console.log(res)
})
setTimeout(() => {
    console.log("Hello World")
}, 3000);

const data  = fs.readFileSync("./data.json", "utf-8")
console.log(data, "First")