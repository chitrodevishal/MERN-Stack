let arr = [10, 20, 40, 40, 50, 10];
console.log(arr);
const set = new Set([10, 20, 40, 40, 50, 10]);
console.log(set);
console.log(typeof set);

const set1 = new Set();
set1.add(10);
set1.add(10);
set1.add(20);
set1.add(30);
set1.add(140);
console.log(set1.size);
console.log(set1);

const username = new Set([
  "_Vishal_Chitrode",
  "Rohit_negi9",
  "Sneha_negi_123",
  "Rahul_123",
  "_neha_sharma",
  "officialsalmankhan",
]);

if (username.has("_Vishal_Chitrode")) {
  console.log("username already taken");
} else {
  console.log("you can take this username");
}
username.clear(); // it delete all entries from set
console.log(username);

// How can we convert array into set
let arr1 = [10, 20, 30, 10, 40, 20, 60];
const set2 = new Set(arr1);
console.log(set2);
// and vice versa too from Set to Array
arr1 = [...set2];
console.log(arr1);

// Union operation in Set()
const set3 = [1,2,3,10,20,30,4,123,23,1]
const set4 = [10,90,30,100,20,30,40,123,23,10]
const set5 = new Set([...set3, ...set4])
// Union means unique elements from both sets
console.log(set5)
// Interesection
let set6 = new Set([10,20,30,108,40,200,50])
let set7 = new Set([10,200,30,10,40,20,508])
const result = new Set( [...set6].filter((num)=>set7.has(num)))
console.log(result)

// Iterate
for(let value of set7){
    console.log(value)
}
console.log("\n")
set7.forEach((value)=>console.log(value))

