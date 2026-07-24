// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const purple = document.getElementById("purple");
// const orange = document.getElementById("orange");
// const reset = document.getElementById("reset");

// red.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });
// blue.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });
// purple.addEventListener("click", () => {
//   document.body.style.backgroundColor = "purple";
// });
// orange.addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// });
// green.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });
// reset.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });

// Here we get access of all button on once
const buttons = document.querySelectorAll("button");
// iterate over all button using for of loop
// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     console.log(button)
//     console.log(button.id)
//     document.body.style.backgroundColor = button.id;
//   });
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     document.body.style.backgroundColor = button.id;
//   });
// })

// Event Bubbling and Capturing //event delegation
const root = document.getElementById("root");
root.addEventListener("click", (Event) => {
  // console.log(event.target)
  // console.log(event.target.tagName); // tagName
  // console.log(event)
  if (event.target.tagName === "BUTTON") {
    document.body.style.backgroundColor = event.target.id;
  }
});
