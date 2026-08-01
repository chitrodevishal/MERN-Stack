const city = "Sri Lanka"
const promises =
  fetch(`http://api.weatherapi.com/v1/current.json?key=dba4a134293d4a89aa5144158262807&q=${city}&aqi=yes
`); // Promise { <pending> } because it's async task it took some time to execute.
// setTimeout(()=>{console.log(obj)}, 2000)
// promises.then((data)=>console.log(data)) // this is a way to print the data here obj is promise
// promises
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => { // here we get error
//     console.log(error);
//   });
// promises has this 3 states pending, request, reject
// promises.then((data)=>{
// console.log(data)
// console.log(Response.json()) // Promise { <pending> } it's async task
// console.log(Response.json(data).then((data)=>{
//     console.log(data)
// })) not working
//     const result = data.json()
//     result.then((val)=>{
//         console.log(val)
//     }) // now we get response object
// })

// const promises1 = promises.then((data)=>{
//     return data.json()
// })
// promises1.then((data)=>{
//     console.log(data)
// })

// promises.then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
// })

// promises.then((data) => data.json()).then((data) => console.log(data));
// fetch(`http://api.weatherapi.com/v1/current.json?key=dba4a134293d4a89aa5144158262807&q=Indore&aqi=yes
// `).then((data) => data.json()).then((data) => console.log(data));
// promises.then((data) => data.json()).then((data) => console.log(data)).catch((error)=>console.log(error))
promises.then((data) => data.json()).then((data) => console.log(data)).catch((error)=>console.log(error))
