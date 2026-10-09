console.log("This is Second");

function add(a, b) {
  return a + b;
} 
// This is private in other module

// module.exports = add
function sub(a,b){
    return a-b
}
module.exports = {add, sub}