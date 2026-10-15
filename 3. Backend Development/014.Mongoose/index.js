import express from "express";
import { User } from "./database.js";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});


