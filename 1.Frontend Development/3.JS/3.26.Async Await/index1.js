function test1() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Hello World")
      if (true) {
        resolve("First Promise");
      } else {
        reject("Rejected");
      }
    }, 5000);
  });
  return promise1;
}
function test2() {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Hello World")
      if (true) {
        resolve("Second Promise");
      } else {
        reject("Rejected");
      }
    }, 2000);
  });

  return promise2;
}

async function print() {
  // both work independent
  console.log("This is Print Function")
  const data1 = await test1(); //wait 5 sec
  console.log(data1);
  const data2 = await test2(); //  also wait 5 sec after above 5 sec complete
  console.log(data2);
}
print();

console.log("Salman Khan")
console.log("Aishwariya Rai")
