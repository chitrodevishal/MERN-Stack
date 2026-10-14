const express = require("express");
const app = express();
app.use(express.json());

// CURD: CREATE, UPDATE, READ AND DELETE

// DATABASE:
const foods = [
  { id: 1, food: "Pizza", category: "veg", price: "200" },
  { id: 2, food: "Burger", category: "non-veg", price: "150" },
  { id: 3, food: "Pasta", category: "veg", price: "180" },
  { id: 4, food: "Biryani", category: "non-veg", price: "250" },
  { id: 5, food: "Paneer Tikka", category: "veg", price: "220" },
  { id: 6, food: "Fried Rice", category: "veg", price: "160" },
  { id: 7, food: "Chicken Wings", category: "non-veg", price: "300" },
  { id: 8, food: "Tacos", category: "non-veg", price: "190" },
  { id: 9, food: "Dosa", category: "veg", price: "120" },
  { id: 10, food: "Noodles", category: "veg", price: "140" },
  { id: 11, food: "Fish Fry", category: "non-veg", price: "280" },
  { id: 12, food: "Samosa", category: "veg", price: "30" },
  { id: 13, food: "Mutton Curry", category: "non-veg", price: "350" },
  { id: 14, food: "Idli", category: "veg", price: "80" },
  { id: 15, food: "Shawarma", category: "non-veg", price: "170" },
];

app.get("/foods", (req, res) => {
  res.status(201).send(foods);
});

// Middleware for /admin routes
app.use("/admin", (req, res, next) => {
  const token = "ABCD";
  const access = token === "ABCD" ? 1 : 0;
  req.access = access; // pass access to next route
  next();
});

app.post("/admin", (req, res) => {
  if (req.access) {
    foods.push(req.body);
    res.status(202).send("Item Added Successfully");
  } else {
    res.send("Admin unauthorized");
  }
});

app.delete("/admin/:id", (req, res) => {
  if (req.access) {
    const index = foods.findIndex((info) => info.id === Number(req.params.id));
    if (index === -1) return res.status(404).send("Food not found");
    res.status(200).send(foods.splice(index, 1));
  } else {
    res.send("Admin unauthorized");
  }
});

app.patch("/admin", (req, res) => {
  if (req.access) {
    const item = foods.find((info) => info.id === req.body.id);
    if (!item) return res.status(404).send("Food not found");
    item.food = req.body.food;
    res.status(202).send(req.body);
  } else {
    res.send("Admin unauthorized");
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
