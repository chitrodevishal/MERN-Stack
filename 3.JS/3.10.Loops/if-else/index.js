console.log("if-else in Js");
let age = 17;
if (age >= 18) {
  console.log("You are eligible for vote");
} else {
  console.log("You aren't eligible for vote");
}

// if-else-if
if (age < 18) {
  console.log("Kid");
} else if (age < 65) {
  console.log("Young");
} else {
  console.log("Senior Citizen");
}

// Multiple condition where we use switch

// switch("0") // error strict checking
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thurday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("error");
}

// For Loop : we want to repeat again and again

for (let i = 0; i < 20; i++) {
  console.log(`${i}`);
}

// sum of first n number
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Nested for loop

for (let i = 0; i < 6; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write(String(j));
   
}
 console.log("\n")
}

// while loop
// Scope (var)

let i =0 //intilization
while(i<5) // condition 
 {   console.log(i)
    i++ 
    // increment/decrement
 }


//  Do while
let j = 0
do{
    console.log(j)
    j++

}while(j<5)

    let arr  = [10, 20, 30, 40]
    for(let i=0;i<=arr.length; i++){
        console.log(arr[i])
    }

    const obj = {
        name:"vishal",
        age:24,
        city:"bhopal",
        amount:123456789
    }
    // const a  = Object.keys(obj)
    // console.log(a)
    
    const b = Object.values(obj)
    console.log(b)
    const key  = Object.keys(obj)
    for(let i=0;i<key.length; i++){
        console.log(obj[key[i]])
    }


