console.log("Call Back Hell\n".toUpperCase());

function orderpizza(callback) {
  console.log("Talk to Domino's");
  setTimeout(() => {
    console.log("Order Placed");
    callback();
  }, 2000);
}

function preparingpizza(callback) {
  console.log("Pizza is being prepared");
  setTimeout(() => {
    console.log("Pizza is ready");
    callback();
  }, 5000);
}
function orderpickup(callback) {
  console.log("Order took from delivery boy");
  setTimeout(() => {
    console.log("Ordered Picked up");
    callback();
  }, 3000);
}
function Orderdelivery() {
  console.log("Order is out for delivery");
  setTimeout(() => {
    console.log("Order Delivered");
  }, 2000);
}
// orderpizza(preparingpizza)
orderpizza(() => {
  preparingpizza(() => {
    orderpickup(() => {
      Orderdelivery();
    });
  });
});
