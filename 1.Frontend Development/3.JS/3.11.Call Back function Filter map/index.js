console.log("Call_Back_function_Filter_map\n");

const user = {
  name: "Vishal",
  age: 24,
  account_number: 9876543210,
  account_balance: 50000,
};
console.log(user);
// for(let value of user){
//     console.log(value) //error because The for...of loop only works on iterables (arrays, strings, Maps, Sets). Plain and objects {} are not iterable.
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of arr) {
  console.log(value);
}
for (let key in arr) {
  console.log(key);
}

let str = "RCB is best team\n";
console.log(str);
for (let value of str) {
  console.log(value);
}
console.log(str.length);
for (let key in str) {
  console.log(key);
}

for (let value of Object.keys(user)) {
  console.log(value); // using this we can use for of in objects to we can convert it into array
}

// For each
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// call back function
function salman_khan(aish) {
  // here we refer aishwariya_rai() as aish
  console.log("Keep your voice down, main aajau kya apni par!");
  aish();
}

const rai = function aishwariya_rai() {
  console.log("Salman fans ke liye 'Dil De Chuke Sanam Part - 2' kare kya");
};

// salman_khan()
// aishwariya_rai()

// Call back function
// salman_khan(aishwariya_rai);
// salman_khan(function aishwariya_rai() {
//   console.log("Salman fans ke liye 'Dil De Chuke Sanam Part - 2' kare kya");
// });
salman_khan(rai);

// call back function use case in every 2 sec we get this function call
function fetchdata() {
  console.log("This is fetch data function");
}
// setInterval(fetchdata, 2000);

// For Each expect a call back function
let arr2 = [1, 2, 3, 4, 6, 5, 7, 23, 9, 0];
// arr2.forEach(function (num) {
//   console.log(num);
// });
// arr2.forEach((num)=>console.log(num));

arr2.forEach((num, index, a) => {
  a[index] = num * 2;
});
console.log(arr2);

// Filter

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.filter((num) => num % 2 == 0);
console.log(result);

// Filter Example
const record = [
    {name:"Vishal", age:25, city:"Banglore", salary:25000},
    
    {name:"Rahul", age:23, city:"Mumbai", salary:35000},
    
    {name:"Amit", age:24, city:"Delhi", salary:45000},
    
    {name:"Suresh", age:26, city:"Banglore", salary:55000},
    
    {name:"Ramesh", age:27, city:"Mumbai", salary:65000},
    
    {name:"Naresh", age:28, city:"Delhi", salary:75000}
]
// const res = record.filter((obj)=> obj.salary>40000 && obj.city=="Mumbai")
const res = record.filter((obj)=> obj.salary>40000)
console.log(res)
// For each will not return anything
// Filter/Map return (true or false) true value accept else reject 
// Map
//  When we use filter only we can filter values but in map we can modify valuees too
const arr4 = [1,2,3,4,5,6,7,8,9]
// const result2 = arr4.map((num, index, a)=> num*num)
const result2 = arr4.map((num)=> num*num)
console.log(result2);
// chaining
const arr5 = [1,2,3,4,5,6,7,8,9]
const result3 = arr5.filter((num) => num%2==0).map
((num)=> num*num)
console.log(result3);