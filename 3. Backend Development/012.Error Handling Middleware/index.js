const express = require("express");
const app = express();

app.use(express.json());
const { Auth } = require("./src/middleware/auth");

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

// User Area
app.get("/user", Auth, (req, res) => {
  res.send(Addtocart);
});

const Addtocart = [];

// POST
app.post("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = foods.findIndex((info) => info.id === id);
  if (index === -1) res.status(404).send("Invalid Id");
  Addtocart.push(foods[index]);
  res.send(Addtocart);
});
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = Addtocart.findIndex((info) => info.id === id);
  if (index === -1) res.status(404).send("invalid id");
  else {
    Addtocart.splice(index, 1);
    res.send(Addtocart);
  }
});
app.get("/user", (req, res) => {
  try {
    res.send(Addtocart);
  } catch (error) {
    res.status(500).send("Something went wrong" + error);
  }
});

// Error Handling
app.get("/dummy", (req, res) => {
  //   JSON.parse("Invalid JSON"); // Unexpected token 'I', "Invalid JSON" is not valid JSON use try catch block
  try {
    // JSON.parse("Invalid JSON") Throw error
    JSON.parse(`{"name":"Vishal"}`); //Work fine
    throw new Error("BROKEN");
    res.send("Hello Vishal Chitrode");
  } catch (error) {
    res.status(500).send("Something failed." + error);
  }
});

// Admin Area
app.get("/admin", Auth, (req, res) => {
  res.status(200).send(foods);
});
app.post("/admin", (req, res) => {
  foods.push(req.body);
  res.send("added successfully");
});
app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = foods.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).send("not found");
  } else {
    foods.splice(index, 1);
    res.send("deleted");
  }
});

app.patch("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = foods.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).send("not found");
  } else {
    if (req.body.food) foods[index].food = req.body.food;
    if (req.body.category) foods[index].category = req.body.category;
    if (req.body.price) foods[index].price = req.body.price;
    res.send("updated");
  }
});

app.listen(3000, (res, req) => {
  console.log("Server is running at 3000");
});
