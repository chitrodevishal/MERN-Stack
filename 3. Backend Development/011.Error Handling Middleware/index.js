const express = require("express")
const app = express()
app.use(express.json())
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

app.use("/foods", (req, res, next) => {
  console.log("middleware executed");
  next()
})
app.get("/foods", (req, res) => {
  res.send(foods)
})
app.listen(3000, ()=>{
  console.log("server started at port 3000");
})
