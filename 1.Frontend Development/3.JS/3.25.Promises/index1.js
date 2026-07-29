// function orderpizza(callback) {
//   console.log("Talk to Domino's");
//   setTimeout(() => {
//     console.log("Order Placed");
//     callback();
//   }, 2000);
// }

// function preparingpizza(callback) {
//   console.log("Pizza is being prepared");
//   setTimeout(() => {
//     console.log("Pizza is ready");
//     callback();
//   }, 5000);
// }
// function orderpickup(callback) {
//   console.log("Order took from delivery boy");
//   setTimeout(() => {
//     console.log("Ordered Picked up");
//     callback();
//   }, 3000);
// }
// function orderdelivery() {
//   console.log("Order is out for delivery");
//   setTimeout(() => {
//     console.log("Order Delivered");
//   }, 2000);
// }
// // orderpizza(preparingpizza)
// orderpizza(() => {
//   //
//   preparingpizza(() => {
//     // Inversion of Control (IoC) with callbacks :- You give your function (callback) to another function, and that function decides when to run it.
//     orderpickup(() => {
//       orderdelivery();
//     });
//   });
// });

// // You wrote preparingpizza().
// // But you don't call it yourself.
// // You give it to orderpizza().
// // orderpizza() calls it after 2 seconds.

// const cart = ["Pizza", "Burger", "Sandwich", "Coca-Cola"];
// function orderpizza(cart, callback) {
//   console.log("Talk to Domino's");
//   setTimeout(() => {
//     console.log("Order Placed");
//     const order = {
//       orderID: 322,
//       food: cart,
//       restaurant: "Domino's",
//       location: "Mumbai", //user location this data needed to orderpickup and orderdeliver
//     };
//     callback(order);
//   }, 2000);
// }

// function preparingpizza(order, callback) {
//   console.log("Pizza is being prepared");
//   setTimeout(() => {
//     console.log("Pizza is ready");
//     const details = {
//       tokenID: 221,
//       restaurant: order.restaurant,
//       location: order.location,
//     };
//     callback(details);
//   }, 5000);
// }
// function orderpickup(details, callback) {
//   console.log("Order took from delivery boy");
//   setTimeout(() => {
//     console.log("Ordered Picked up");
//     const location = {
//       location: details.location,
//     };
//     callback(location);
//   }, 3000);
// }
// function Orderdelivery(location) {
//   console.log("Order is out for delivery");
//   setTimeout(() => {
//     console.log("Order Delivered");
//   }, 2000);

// orderpizza(cart)
// orderpizza(cart, callback)
// orderpizza(cart,() => {
//   preparingpizza(() => {
//     orderpickup(() => {
//       Orderdelivery();
//     });
//   });
// })

// orderpizza(preparingpizza)

// orderpizza(cart, (order) => {
//   preparingpizza(order, (details) => {
//     orderpickup(details, (location) => {
//       Orderdelivery(location);
//     });
//   });
// }); // this is call back hell and it's very complicated code and control is not in our hand we can resolve this issue using promises we can created own promises

// here we creating own promises
// const promise = orderpizza(cart);

// promise
//   .then((order) => {
//     preparingpizza(order);
//   })
//   .then((details) => {
//     orderpickup(details);
//   })
//   .then((location) => {
//     Orderdelivery(location);
//   });

// Here we remove callbacks and create promises
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
orderpizza(cart)
  .then((order) => preparingpizza(order))
  .then((details) => orderpickup(details))
  .then((location) => Orderdelivery(location))
  .catch((error) => console.log(error));

// const promise = new Promise() // here is the way to create a promise
// const promise = new Promise(function (resolve, reject) {});
// return promise;
