const express = require("express")
const app = express()
app.use(express.json())
app.get("/user",(req, res)=>{
    console.log("First")
    res.send("This is Middleware")
    console.log("First one") // we can't send more than one response
}, (req, res)=>{ // Here our first function complete
    console.log("Second")
    res.send("This is second middleware")
})
app.listen(8000, ()=>{
    console.log("Sever is live!")
})