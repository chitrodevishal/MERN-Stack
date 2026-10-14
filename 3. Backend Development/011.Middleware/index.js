const express = require("express")
const app = express()
app.use(express.json())

// CURD: CREATE, UPDATE, READ AND DELETE

app.get("/user", (req, res)=>{
    res.send("This is GET")
})
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
