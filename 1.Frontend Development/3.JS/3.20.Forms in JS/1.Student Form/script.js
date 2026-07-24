const form = document.querySelector("form");
// form.addEventListener("click", (event)=>{
//     console.log(event.target.id)

// })
// form.addEventListener("input", (event)=>{
//     console.log(event.target.value) // one by one we get access

// })
// form.addEventListener("change", (event)=>{
//     console.log(event.target.value)

// })
// form.addEventListener("focus", (event)=>{
//     console.log(event.target.value) // Doesn't follow bubble
// })
// form.addEventListener("focusin", (event)=>{
//     console.log(event.target.value)

// })
// focusout/ blur
// form.addEventListener("focusout", (event)=>{
//     console.log(event.target.value)

// })
// form.addEventListener("click", (event)=>{
//     console.log("Single Clicked")

// })
// form.addEventListener("dblclick", (event)=>{
//     console.log("Double Clicked")

// })
// form.addEventListener("submit", (event)=>{
//     console.log("Form Submited")

// })
// form.addEventListener("reset", (event)=>{
//     console.log("Form Reset")

// })

// Here is the way to get values of input field
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // it prevent and didn't refresh
//   const first = document.getElementById("first");
//   console.log(first.value);
//   const second = document.getElementById("last");
//   console.log(second.value);
//   const age = document.getElementById("age");
//   console.log(age.value);
//   const result = document.querySelector("p");
//   result.innerText = `My Name is ${first.value} ${second.value}`;
// });

form.addEventListener("submit", (event) => {
    const reset = document.querySelector("#reset")
  event.preventDefault(); // it prevent and didn't refresh
  const data = new FormData(form); // using FormData() when we hit submit button our data store into 
  console.log(data);
  let first = "";
  let last = "";
  // we can iterate over iterator using for of loop and we can convert this into array using Array.From(iterator name)
  // console.log(Array.from(data.keys()))
  // console.log(Array.from(data.values()))
  // console.log(Array.from(data.entries())) // return array of [[key, value]......]
  for (let [i, j] of data.entries()) { // here i is key and j is value and we destructure object
    console.log(i, j);
    if (i === "first name") {
      first = j;
    }

    if (i === "Last Name") {
      last = j;
    }
  }
  const result = document.querySelector("p");
  result.innerHTML = `My name is ${first} ${last}`;
  
  reset.addEventListener("click", () => {
  result.innerHTML = "";})
  
});

