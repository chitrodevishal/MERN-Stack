// function test1() {
//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("Hello World")
//       if (true) {
//         resolve("First Promise");
//       } else {
//         reject("Rejected");
//       }
//     }, 5000);
//   });
//   return promise1;
// }
// function test2() {
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("Hello World")
//       if (true) {
//         resolve("Second Promise");
//       } else {
//         reject("Rejected");
//       }
//     }, 2000);
//   });

//   return promise2;
// }

// async function print() {
//   // both work independent
// //   console.log("This is Print Function")
// //   const data1 = await test1(); //wait 5 sec
// //   console.log(data1);
// //   const data2 = await test2(); //  also wait 5 sec after above 5 sec complete
// //   console.log(data2);

// // now both will work parallely
// const  [data1, data2] = await Promise.all([test1(), test2()]) //maximum time interval prefer

// console.log(data1)
// console.log(data2)

// }
// print();

const data  = fetch(`http://api.weatherapi.com/v1/current.json?key=dba4a134293d4a89aa5144158262807&q=Indore&aqi=yes
`)
data.then((data)=>data.json()).then((val)=>console.log(val))