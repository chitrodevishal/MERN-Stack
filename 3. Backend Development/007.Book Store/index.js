const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const BookStore = [
  { id: 1, Book: "Half Girlfriend", Author: "Chetan Bhagat" },
  { id: 2, Book: "Five Point Someone", Author: "Chetan Bhagat" },
  { id: 3, Book: "The 3 Mistakes of My Life", Author: "Chetan Bhagat" },
  { id: 4, Book: "2 States", Author: "Chetan Bhagat" },
  { id: 5, Book: "The Alchemist", Author: "Paulo Coelho" },
  { id: 6, Book: "Atomic Habits", Author: "James Clear" },
  {
    id: 7,
    Book: "The Power of Your Subconscious Mind",
    Author: "Joseph Murphy",
  },
  { id: 8, Book: "Rich Dad Poor Dad", Author: "Robert T. Kiyosaki" },
  { id: 9, Book: "Wings of Fire", Author: "A. P. J. Abdul Kalam" },
  { id: 10, Book: "The Monk Who Sold His Ferrari", Author: "Robin Sharma" },
  { id: 11, Book: "Ikigai", Author: "Héctor García and Francesc Miralles" },
  { id: 12, Book: "The Subtle Art of Not Giving a F*ck", Author: "Mark Manson" },
  { id: 13, Book: "The Psychology of Money", Author: "Morgan Housel" },
  { id: 14, Book: "The Intelligent Investor", Author: "Benjamin Graham" },
 
];

app.get("/", (req, res) => {
  res.send("Welcome to the Book Store!");
});
app.get("/books", (req, res) => {
    res.send(BookStore);
});


// if we want any specific book by id then we can use this route
app.get("/books/:id", (req, res) => {
// res.send("Take This")
console.log(req.params)

const id = parseInt(req.params.id);
const book = BookStore.find((book) => book.id === (id));
res.send(book)

})


app.post("/books", (req, res) => {
res.send("Book Added")
console.log(req.body)
BookStore.push(req.body)
})


app.listen(port, () => {
  console.log(`Book Store app listening at http://localhost:${port}`);
});
