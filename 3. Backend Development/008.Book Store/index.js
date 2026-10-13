const express = require("express");
const app = express();
app.use(express.json());

const books = [
  { id: 0, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
  { id: 3, title: "The Psychology of Money", author: "Morgan Housel" },
  { id: 4, title: "Ikigai", author: "Héctor García and Francesc Miralles" },
  { id: 5, title: "Deep Work", author: "Cal Newport" },
  { id: 6, title: "Think and Grow Rich", author: "Napoleon Hill" },
  {
    id: 7,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
  },
  {
    id: 8,
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
  },
  { id: 9, title: "Can't Hurt Me", author: "David Goggins" },
  { id: 10, title: "Zero to One", author: "Peter Thiel" },
];

app.get("/books", (req, res) => {
  //  res.send(req.body)
  //  res.send(req.query)
  // console.log(req.query);
  res.send(books.filter((info) => info.author === req.query.author));
});

// PATCH

app.patch("/books", (req, res) => {
  const id = books.find((info) => info.id === req.body.id);
  if (req.body.author) {
    id.author = req.body.author;
  }

  if (req.body.title) {
    id.title = req.body.title;
  }

  res.send(req.body);
});

// PUT
app.put("/books", (req, res) => {
  const id = books.find((info) => info.id === req.body.id);
  id.author = req.body.author;
  id.title = req.body.title;
  res.send(req.body);
});

// Delete
app.delete("/books/:id", (req, res) => {
  // const id = books.find((info) => info.id === req.body.id);

  const id = req.params.id;
  res.send(books.splice(id, 1));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
