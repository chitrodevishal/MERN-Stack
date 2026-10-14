const express = require("express")
const app = express()
app.use(express.json())
app.use("/user", (req, res, next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`)
    next();
})
app.get("/user", (req, res)=>{
    res.send("This is GET")
})
app.put("/user", (req, res)=>{
    res.send("This is PUT")
})
app.delete("/user", (req, res)=>{
    res.send("This is DELETE")
})
app.listen(3000, ()=>{
    console.log("Server running at 3000")
})