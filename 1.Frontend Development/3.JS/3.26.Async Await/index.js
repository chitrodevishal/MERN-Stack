const cart = ["Pizza", "Burger", "Sandwich", "Coca-Cola"];
function orderpizza(cart) {
  console.log("Talk to Domino's");
  const available = true; // resolve
  // const available = false; //reject
  const promise = new Promise(function (resolve, reject) {
    // here resolve mean data available and reject mean not available
    setTimeout(() => {
      if (available) {
        console.log("Order Placed");
        const order = {
          orderID: 322,
          food: cart,
          restaurant: "Domino's",
          location: "Mumbai", //user location this data needed to orderpickup and orderdeliver
        };
        // callback(order); // replace with resolve
        resolve(order);
      } else {
        reject("Not available");
      }
    }, 2000);
  });
  return promise;
}

function preparingpizza(order) {
  console.log("Pizza is being prepared");
  const prepare = true;
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (prepare) {
        console.log("Pizza is ready");
        const details = {
          tokenID: 221,
          restaurant: order.restaurant,
          location: order.location,
        };
        resolve(details);
      } else {
        reject("Yet not prepare");
      }
    }, 5000);
  });
  return promise;
}
function orderpickup(details) {
  console.log("Order took from delivery boy");
  const pickup = true;
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (pickup) {
        console.log("Ordered Picked up");
        const location = {
          location: details.location,
        };
        resolve(location);
      } else {
        reject("Yet Not Pickup");
      }
    }, 3000);
  });
  return promise;
}
function Orderdelivery(location) {
  console.log("Order is out for delivery");
  setTimeout(() => {
    console.log("Order Delivered");
  });
}

// const promise = orderpizza(cart);
// orderpizza(cart)
//   .then((order) => preparingpizza(order))
//   .then((details) => orderpickup(details))
//   .then((location) => Orderdelivery(location))
//   .catch((error) => console.log(error));

// const order = await orderpizza(cart) // here we waiting for output then we move to next line
// const details = await preparingpizza(order) // here we waiting for output then we move to next line
// const location = await orderpickup(details) // here we waiting for output then we move to next line
// Orderdelivery(location)

// but we can't use this await like this we can use await only in function and that function must be async function
async function print() {
  const order = await orderpizza(cart);
  const details = await preparingpizza(order);
  const location = await orderpickup(details);
  Orderdelivery(location);
}

// print(); // here we called our async function

// this is the way to create a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Hello World")
    if (true) {
      resolve("Hello World");
    } else {
      reject("Rejected");
    }
  }, 5000);
});
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Hello World")
//     if (true) {
//       resolve("First Promise");
//     } else {
//       reject("Rejected");
//     }
//   }, 7000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Hello World")
//     if (true) {
//       resolve("Second Promise");
//     } else {
//       reject("Rejected");
//     }
//   }, 5000);
// });
// console.log(promise) // Promise { <pending> } // we can't call promise like this it show this Promise { <pending> }
// promise.then((response)=>{
//     console.log(response) // after 5 secs print "Hello World"
// })

async function greet() {
  const data = await promise; // here we wait till we get the data till 5 secs then we will move to next line
  console.log(data);

  const data2 = await promise; // here why not wait for 5 sec because promise resolve so here don't need to wait
  console.log(data2);
}
// greet()

// async function print() {
//   // why we get both at same time after 5 secs
//   const data1 = await promise1; // we get resolve in 5 sec
//   console.log("Hello world")
//   console.log(data1);
//   const data2 = await promise2; // we get resolve in 5 sec
//   console.log(data2);
// }
// print();

// promise1.then((val)=>console.log(val)) // it took more time but also resolve
// promise2.then((val)=>console.log(val)) // it resolve first

function test1() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Hello World")
      if (true) {
        resolve("First Promise");
      } else {
        reject("Rejected");
      }
    }, 7000);
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
    }, 5000);
  });

  return promise2;
}

async function print() {
  // both work independent
  const data1 = await test1(); //wait 5 sec
  console.log(data1);
  const data2 = await test2(); //  also wait 5 sec after above 5 sec complete
  console.log(data2);
}
print();

async function meet(){
    return "Async" // async always return a promise (if nothing then it will return undefined as a return)
}
meet().then((val)=>console.log(val))
