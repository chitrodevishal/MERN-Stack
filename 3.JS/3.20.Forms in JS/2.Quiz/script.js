// correct answer array
// const correctAnswers = [
//   "New Delhi",
//   "Mahatma Gandhi",
//   "Tiger",
//   "Peacock",
//   "Godavari",
//   "28",
//   "Rajasthan",
//   "Bharat Ratna",
//   "Diwali",
//   "Rupee",
// ];
// Here we store answer in object because 
const correctAnswers = {
  q1: "New Delhi",
  q2: "Mahatma Gandhi",
  q3: "Tiger",
  q4: "Peacock",
  q5: "Godavari",
  q6: "28",
  q7: "Rajasthan",
  q8: "Bharat Ratna",
  q9: "Diwali",
  q10: "Rupee",
};
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);


//   This is when we store answer into array
//   const answer = Array.from(data.values());
//   let result = 0;
//   for (let i = 0; i < answer.length; i++) {
//     if (answer[i] === correctAnswers[i]) {
//       result++;
//     }
//   }
//   console.log(result);

let result = 0
for(let  [key, value] of data.entries()){
    if(value===correctAnswers[key]){
        result++
    }
}
  const score = document.querySelector(".result");
  score.textContent = `Score is ${result} out of 10`;

  form.addEventListener("reset", () => {
    form.reset();
    score.textContent = "";
  });
});
