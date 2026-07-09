const quotes = [
  "Success is not built in a single day. It is built every morning when you choose discipline over excuses, consistency over comfort, and growth over temporary satisfaction. The person you become through the journey is always more valuable than the destination you reach.",

  "Your current situation is not your final destination. Every expert was once a beginner, every champion was once an amateur, and every successful person once faced failure. What separates them from everyone else is that they refused to stop when life became difficult.",

  "Dreams are not achieved by motivation alone. They are achieved by showing up on the days when motivation disappears. Discipline is remembering what you truly want, even when your emotions tell you to quit.",

  "Every setback carries a lesson that success could never teach. Failure is not proof that you are incapable; it is proof that you are trying something meaningful. Learn from every mistake, improve your strategy, and keep moving forward with greater wisdom.",

  "The hardest battles are often fought silently within your own mind. Win those battles first by replacing doubt with belief, excuses with action, and fear with preparation. Once your mindset changes, your reality begins to change.",

  "Do not compare your Chapter 1 with someone else's Chapter 20. Everyone has a different journey, different struggles, and different opportunities. Focus on becoming better than the person you were yesterday, not better than someone else today.",

  "Consistency may look boring, but it creates extraordinary results. Small efforts repeated every single day become skills, habits, confidence, and eventually achievements that others call luck.",

  "There will always be people who doubt your abilities. Instead of arguing with them, let your actions become your answer. Success speaks louder than promises, excuses, or opinions.",

  "Every hour you spend learning today is building a future version of yourself that will thank you tomorrow. Education is one of the few investments whose returns continue to grow for the rest of your life.",

  "The road to greatness is never crowded because most people quit when the journey becomes uncomfortable. If you continue when others stop, you automatically place yourself among the few who succeed.",

  "Patience is not waiting without action. Patience is working hard every single day while understanding that meaningful success requires time, persistence, and continuous improvement.",

  "Your future is being created by the decisions you make today. Every book you read, every skill you practice, every distraction you avoid, and every challenge you overcome is shaping the life you will live years from now.",

  "The difference between impossible and possible is often one more attempt. Many people quit just before their breakthrough because they mistake temporary struggle for permanent failure.",

  "Stop waiting for the perfect opportunity. Start with what you have, where you are, and improve along the way. Progress creates confidence, while waiting creates regret.",

  "Success belongs to those who can remain focused while the world is full of distractions. Every time you say no to unnecessary entertainment, you are saying yes to your future.",

  "Your habits are writing the story of your life every single day. If you want a better ending, begin by creating better daily routines. Great lives are built from ordinary days lived with extraordinary discipline.",

  "The strongest people are not those who never fail, but those who stand up after every failure with greater determination, clearer vision, and stronger commitment than before.",

  "One year of focused effort can completely transform your life. While others spend their time complaining, scrolling endlessly, and making excuses, spend yours learning, building, and growing.",

  "Discomfort is the price of growth. Muscles grow by resistance, knowledge grows by curiosity, character grows by challenges, and success grows by persistence through difficult times.",

  "Every sunrise is a reminder that life has given you another opportunity to improve. Yesterday's mistakes do not define you unless you repeat them today.",

  "The biggest competition you will ever face is not another person. It is the weaker version of yourself that wants comfort instead of progress. Defeat that version every single day.",

  "Your goals deserve more than your wishes. They deserve your focus, your energy, your sacrifices, and your commitment. Dreams become reality only when effort becomes greater than excuses.",

  "Confidence is not something you are born with. It is something you earn by keeping promises to yourself, completing difficult tasks, and proving through action that you can rely on yourself.",

  "Every successful person has experienced moments of self-doubt. The difference is that they chose action over fear. Courage is not the absence of fear; it is moving forward despite it.",

  "Never underestimate the power of one productive day. One focused day becomes a productive week, a productive week becomes a successful month, and a successful month becomes a transformed life.",

  "Your potential is unlimited, but your excuses create limits that do not actually exist. Break those limits by taking action even when you do not feel ready.",

  "Do not fear slow progress. Fear standing in the same place a year from now because you allowed comfort to replace ambition. Small steps taken consistently always outperform big plans never started.",

  "Every challenge you overcome increases your capacity to handle even greater challenges. Difficulties are preparing you for responsibilities that success will eventually bring.",

  "The quality of your future depends on the quality of your daily choices. Success is simply the accumulated result of thousands of small, disciplined decisions made over time.",

  "Remember why you started whenever you feel like giving up. The pain of discipline lasts for a short time, but the pain of regret can last for years. Choose the struggle that builds your future instead of the comfort that destroys it.",

  "Success is built one disciplined day at a time.",
  "Your future is created by what you do today, not tomorrow.",
  "Small consistent efforts lead to extraordinary results.",
  "Discipline will take you where motivation cannot.",
  "Every expert was once a beginner who refused to quit.",
  "Hard work compounds just like interest.",
  "Don't count the hours; make the hours count.",
  "The pain of discipline is temporary. The regret of giving up lasts much longer.",
  "Dream big, start small, stay consistent.",
  "Your competition is the person you were yesterday.",
  "Focus on progress, not perfection.",
  "Every setback is preparation for a stronger comeback.",
  "The only impossible journey is the one you never begin.",
  "Consistency beats intensity when intensity doesn't last.",
  "Success belongs to those who keep showing up.",
  "Comfort is the enemy of growth.",
  "Great things take time. Keep going.",
  "Every challenge is an opportunity in disguise.",
  "You become what you repeatedly do.",
  "Confidence is built by keeping promises to yourself.",
  "The best investment is in your own skills.",
  "You don't have to be great to start, but you have to start to be great.",
  "Your limits exist only where you accept them.",
  "One focused hour is worth more than a distracted day.",
  "Distractions steal dreams one minute at a time.",
  "Your habits determine your future.",
  "Excuses make today easy but tomorrow difficult.",
  "Growth begins where excuses end.",
  "Stay patient. Stay consistent. Trust the process.",
  "Success is earned before it is recognized.",
  "The harder the climb, the better the view.",
  "Nothing changes until you do.",
  "Every page you study is an investment in your future.",
  "Difficult roads often lead to beautiful destinations.",
  "Fear disappears when action begins.",
  "The strongest people are built through adversity.",
  "You are one decision away from a different life.",
  "Your effort today becomes your pride tomorrow.",
  "Never let temporary emotions make permanent decisions.",
  "Discipline is choosing what you want most over what you want now.",
  "Every morning is another chance to improve.",
  "Stay hungry for knowledge.",
  "Master the basics, and greatness will follow.",
  "The only bad workout or study session is the one you skip.",
  "Learn, apply, improve, repeat.",
  "The secret to success is consistency over time.",
  "Be stronger than your strongest excuse.",
  "Success is not luck; it is preparation meeting opportunity.",
  "One more attempt can change your life.",
  "Your determination defines your destination.",
  "Don't stop when you're tired. Stop when you're done.",
  "Every failure teaches what success never could.",
  "Persistence breaks resistance.",
  "Work in silence. Let results make the noise.",
  "Your dreams deserve your discipline.",
  "Action defeats anxiety.",
  "The best revenge is massive self-improvement.",
  "Don't fear failure. Fear staying the same.",
  "Success is the sum of small efforts repeated daily.",
  "Be obsessed with becoming better than yesterday.",
  "No shortcut can replace consistent effort.",
  "The comeback is always stronger than the setback.",
  "Your potential is waiting for your commitment.",
  "Focus on what you can control.",
  "Every day is a fresh opportunity to improve.",
  "Keep learning because the world never stops changing.",
  "The quality of your future depends on the quality of your habits.",
  "Strong minds are built through difficult choices.",
  "When you feel like quitting, remember why you started.",
  "Progress requires patience and persistence.",
  "Don't let comfort steal your dreams.",
  "Success begins with self-belief.",
  "Every obstacle carries a lesson.",
  "Hard days create strong people.",
  "Stay committed even when motivation fades.",
  "The grind you avoid today becomes the struggle you face tomorrow.",
  "Believe in the power of consistent effort.",
  "Nothing worth having comes easily.",
  "Your mindset shapes your reality.",
  "Every master was once a student.",
  "The journey of a thousand miles starts with one step.",
  "Choose discipline today to enjoy freedom tomorrow.",
  "Effort never goes to waste.",
  "Be patient with results but impatient with action.",
  "Growth requires discomfort.",
  "One chapter doesn't define the whole story.",
  "Failure is feedback, not the finish line.",
  "Your future self is watching your decisions today.",
  "Every sacrifice has a purpose.",
  "Keep moving even if the pace is slow.",
  "Be relentless in the pursuit of your goals.",
  "You are capable of far more than you believe.",
  "Every sunrise brings another opportunity.",
  "Your consistency is your superpower.",
  "Winners focus on solutions, not problems.",
  "The strongest investment is investing in yourself.",
  "Success is earned in private before it is celebrated in public.",
  "Keep your eyes on the goal and your feet on the ground.",
  "The best time to start was yesterday. The next best time is now.",
  "Stay focused. Stay humble. Stay unstoppable.",
];

function quote() {
  const quoteElement = document.getElementById("quo  te");
  quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

// setInterval(quote, 2000);

// Event so first we get access to that element on which we want to attach an event
// function quote() {
//   const quoteElement = document.getElementById("quote");
//   quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
// }

const btn = document.querySelector("button");

// Mouse Event
// function quote() {
//   const quoteElement = document.getElementById("quote");
//   quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
// }
// btn.addEventListener("click", quote)
// btn.addEventListener("action", callback function)
btn.addEventListener("click", (event) => {
  console.log(event) //PointerEvent 
  console.log(event.target) // <button>Click Me</button>
  console.log(event.type) // click
  console.log(event.clientX); // position of X axis 
  console.log(event.clientY); // position of Y axis
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
});
// btn.addEventListener("dblclick", quote);
// btn.addEventListener("mousemove", quote);
// btn.addEventListener("mouseover", quote);

// Keyboard Event

// function quote() {
//   const quoteElement = document.getElementById("quote");
//   quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
// }
// document.addEventListener("keydown", quote)
// document.addEventListener("keyup", quote)
// document.addEventListener("keypress", quote)

// Event Object
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     console.log(event.key);
//     console.log(event.target);
//     const quoteElement = document.getElementById("quote");
//     quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
//   } 
// });
