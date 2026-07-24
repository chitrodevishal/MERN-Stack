const quotes = [
  "Success is the sum of small efforts repeated every day.",
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "The future depends on what you do today.",
  "Do what you can, with what you have, where you are.",
  "Don't wait. The time will never be just right.",
  "Hard work beats talent when talent doesn't work hard.",
  "Your only limit is your mind.",
  "Great things never come from comfort zones.",
  "The secret of getting ahead is getting started.",
  "Stay hungry. Stay foolish.",
  "Small progress is still progress.",
  "Discipline is choosing what you want most over what you want now.",
  "Failure is not the opposite of success; it's part of success.",
  "Push yourself because no one else is going to do it for you.",
  "Consistency is more important than perfection.",
  "Difficult roads often lead to beautiful destinations.",
  "Learning never exhausts the mind.",
  "Every expert was once a beginner.",
  "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
];

function quote() {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

setInterval(quote, 2000);
