const express = require("express");
const app = express();
app.use(express.json());
app.get(
  "/book",
  (req, res, next) => {
    // console.log("First one")
    console.log("First")
    // res.send("First");
    // console.log("First two")
    next();
    console.log("Sixth")
  }, // Router
  (req, res, next) => {
    // res.send("Second");
    console.log("Second");
    next();
    console.log("Fifth")
  }, // Middleware
  (req, res, next) => {
    res.send("Third");
    console.log("Third");
    next();
    console.log("Fourth");
  } // response handler/ request handler
);

// First
// Second
// Third
// Fourth
// Fifth
// Sixth

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
