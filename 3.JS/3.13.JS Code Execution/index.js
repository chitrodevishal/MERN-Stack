console.log("How_Does_JS_Code_Works_Hoisting");
console.log(a);

var a = 23; // undefined
// let a = 23; // error ( Cannot access 'a' before initialization)

var x = 10;
let y = 20;
console.log(x);
console.log(y);

salman();
function salman() {
  console.log("Keep your voice down!");
}
// rai() // Error we cannot access 'rai' before initialization
let rai = function aishwariya() {
  console.log("Salman fans ke liye 'Dil De Chuke Sanam Part - 2' kare kya");
};

rai();
