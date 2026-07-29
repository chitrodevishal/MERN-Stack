const cart = ["Pizza", "Burger", "Sandwich", "Coca-Cola"];
function orderpizza(cart) {
  console.log("Talk to Domino's");
//   const available = true; // resolve
  const available = false; //reject
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
  try {
    const order = await orderpizza(cart);
    const details = await preparingpizza(order);
    const location = await orderpickup(details);
    Orderdelivery(location);
  } catch (error) {
    console.log(error);
  }
}
print()
