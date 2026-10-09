const express = require("express")
const app = express()
app.use(express.json())
// app.use("/", (req, res) => res.send({name:"Vishal chitrode"}))
// app.use("/user", (req, res) => res.send({name:"Vishal chitrode"}))
app.get("/user", (req, res) => res.send({name:"Vishal chitrode"}))
app.put("/user", (req, res) => res.send({name:"Vishal chitrode"}))
app.post("/user", (req, res)=>{
    res.send("Success")
    console.log(req.body) // undefined
})
app.listen(1707,()=>{
    console.log("Hello World")
})



