const express = require("express");
const app = express();
app.use(express.json());
const {Auth} = require("./src/middleware/auth")

const foods = [
  { id: 1, food: "Pizza", category: "veg", price: 200 },
  { id: 2, food: "Burger", category: "non-veg", price: 150 },
  { id: 3, food: "Pasta", category: "veg", price: 180 },
  { id: 4, food: "Biryani", category: "non-veg", price: 250 },
  { id: 5, food: "Paneer Tikka", category: "veg", price: 220 },
  { id: 6, food: "Fried Rice", category: "veg", price: 160 },
  { id: 7, food: "Chicken Wings", category: "non-veg", price: 300 },
  { id: 8, food: "Tacos", category: "non-veg", price: 190 },
  { id: 9, food: "Dosa", category: "veg", price: 120 },
  { id: 10, food: "Noodles", category: "veg", price: 140 },
];

// User middleware - fixed: removed res.send(), only logs and calls next()
app.use("/user", (req, res, next) => {
  console.log("User middleware executed");
  next();
});

app.get("/food", (req, res) => {
  res.send(foods);
});

// Admin middleware - fixed: added return before res.send()
app.use("/admin", Auth);

app.get("/admin", (req, res) => {
  res.status(200).send(foods);
});

// POST - fixed: removed if(access), push before send
app.post("/admin", (req, res) => {
  foods.push(req.body);
  res.send("Food added successfully");
});

// DELETE - fixed: removed if(access), parseInt for id
app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = foods.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).send("Item not found");
  } else {
    foods.splice(index, 1);
    res.send("Deleted");
  }
});

// PATCH - fixed: removed if(access)
app.patch("/admin", (req, res) => {
  const id = parseInt(req.body.id);
  const index = foods.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).send("Item not found");
  } else {
    if (req.body.food) foods[index].food = req.body.food;
    if (req.body.category) foods[index].category = req.body.category;
    if (req.body.price) foods[index].price = req.body.price;
    res.send("Updated");
  }
});

app.listen(3000, () => {
  console.log("Server is running");
});
