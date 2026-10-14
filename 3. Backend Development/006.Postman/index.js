const express = require("express");
const app = express();

app.use(express.json()); //This is used to get the data from the body of the request

// app.use("/", (req, res) => {
//   res.send({ name: "Vishal Chitrode" });
// });
app.get("/", (req, res) => {
  console.log(req);
  res.send({ name: "Vishal Chitrode" });
}); //This show GET Method if we didn't mentioned anything it's bydefault set to GET Method
app.post("/user", (req, res) => {
  console.log("Data Saved");
  // console.log(typeof req.body); 
  // console.log(typeof req.body.age); 
  console.log(req.body); //Here we get undefined for we need use parser like express.json() to get the data from the body of the request
  res.send({ name: "This is Post Method" });
});
app.listen(3000, () => {console.log("Server run http://localhost:3000")
});
