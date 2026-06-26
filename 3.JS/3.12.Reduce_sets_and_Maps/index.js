console.log("Reduce_sets_and_Maps");

// Reduce

const arr = [1, 2, 3, 4, 45, 5, 7, 8, 10]; // let assume we had an array
// reduce create an result and result will be in any from like string, object and array
// const result = arr.reduce((callback_function, intialization))
// const result = arr.reduce(((_, _)=>{}, intialization))
// const result = arr.reduce(((accumulator(acc), currrent_value(curr))=>{
// e.g.acc = acc+curr // will go into ac cumulator
// return a will also goes into accumulator
// accumulator will collect produced result
// }, intialization))

// const result = arr.reduce(((_, _, index, array)=>{}, intialization))
const result = arr.reduce((acc, curr) => {
  console.log(acc, curr);
  acc = acc + curr;
  return acc;
}, 0);
console.log(result);

let arr2 = [
  "iphone",
  "Samsung",
  "Nokia",
  "Apple",
  "Samsung",
  "Nokia",
  "Apple",
  "Samsung",
  "Nokia",
  "Motorola",
  "Asus"
];

// Auto Completion
// const result2 = arr2.reduce((acc, curr) => {
//     if (acc[curr]) {
//         acc[curr] = ++acc[curr];
//     } else {
//         acc[curr] = 1;
//     }
//     return acc;
// }, {})
// console.log(result2)

// const result2 = arr2.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {})

// console.log(result2)

const result2 =  arr2.reduce((acc, curr)=>{
  if(acc.hasOwnProperty(curr)){
acc[curr]++
  }else{
acc[curr] =1
  }
return acc 
},[]) //,{intial value}/[]/..etc in which object we want to store form
console.log(result2);