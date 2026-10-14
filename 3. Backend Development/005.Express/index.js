const express = require("express");
const app = express();
// app.use("/", (req, res)=>{
//     res.send("Hello World")
// })
app.use("/appl*y", (req, res) => {
  // res.send("Hello World")
  // res.send({name:"Vishal Chitrode", age:25})

  res.send({ name: "Vishal Chitrode", age: 25, money: 45000 });
});
app.use("/contact/:id/:user", (req, res) => {
    console.log(req.params)
    res.send("Contact Page")
})
app.use("/", (req, res)=>{
    res.send("Hello World")
}) // if we place this top this created a problem 
app.listen(3000, () => {
  console.log("Server Created");
});

// ? char became optional
// + we can repeated
// * any character
// : parmas
