console.log("CallBack Hell\n".toUpperCase());

// CallBack Hell
function fetch(CallBack) {
  console.log("Fetching the Data");
  setTimeout(() => {
    console.log("Data Fetched");
    // const name = "Vishal Chitrode"; // data fetched from backend 
    const obj = {
        name:"Vishal",
        age:25,
        address:{
            city:"Mumbai",
            state:"Maharastra",
            pincode:400001
        }
    }
    // print(name)
    CallBack(obj);
  }, 2000);
}


function print(obj) {
  console.log(`My Name is ${obj.name}`);
}
function meet(name){
    console.log(`Hello ${name}, I will meet you soon`)
}
function age(obj){
    console.log(`Hello ${obj.name}, I am ${obj.age} years old`)
}

function edit(name){
    console.log(`Hello ${name}, User name edited`)
}

function address(obj){
    console.log(`${JSON.stringify(obj.address, null, 2)}`)
}
fetch(print);
fetch(age);
fetch(address);

  