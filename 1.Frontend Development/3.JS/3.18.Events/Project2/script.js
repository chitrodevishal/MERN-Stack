document.addEventListener("click", (event) => {
  const circle = document.createElement("div"); //create a div element
  circle.className = "circle"; // assign class name
  circle.textContent = "Hi";
  document.body.appendChild(circle); // append to body

  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x-25}px`; // set position
  circle.style.top = `${y-25}px`; // set position

  const bg = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "navy",
    "maroon",
    "olive",
    "gold",
    "silver",
    "beige",
    "coral",
    "crimson",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "mint",
    "peach",
    "plum",
    "salmon",
    "tan",
    "turquoise",
    "violet",
    "aqua",
  ];

  const messages = [
    "Hi",
    "Yo",
    "Hey",
    "Hola",
    "Ciao",
    "Sup",
    "Hii",
    "Hell",
    "Hola",
    "Ayo",
    "Ola",
    "Heyo",
    "Yup",
    "Yep",
    "Ok",
    "Okay",
    "Cool",
    "Nice",
    "Good",
    "Best",
    "Love",
    "Wave",
    "Hugs",
    "Smil",
    "Grin",
    "Chat",
    "Ping",
    "Buzz",
    "Ring",
    "Beep",
    "Hola",
    "Salut",
    "Howdy",
    "Aloha",
    "Nam",
    "Heya",
    "Yoho",
    "Yooo",
    "Hmmm",
    "Wow",
    "Yay",
    "Oops",
    "Done",
    "Send",
    "Meet",
    "Come",
    "Stay",
    "Soon",
    "Back",
    "Bye",
  ];

  circle.textContent = messages[Math.floor(Math.random() * messages.length)];

  circle.style.backgroundColor = bg[Math.floor(Math.random() * bg.length)];

  setTimeout(() => {
    circle.remove(); // remove after 5 sec
  }, 5000);
});
