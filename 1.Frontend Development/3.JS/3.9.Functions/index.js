console.log("Function in JS");
let user = {
  name: "Vishal",
  age: 34,
};
console.log(user.age);
console.log(user.name);

function salman() {
  console.log("Aau kya apni par");
  console.log(
    'Salman fans ke liye "Hum dil de chuke saman part -2 directed by abhishek bachan" kare kya ?',
  );
}
salman();

function addition(number1, number2) {
  // console.log(number1 + number2)
  return number1 + number2;
}
let result = addition(3, 5); // using function name
console.log(result);

const mul = function multiplication(num1, num2) {
  return num1 * num2;
};
console.log(mul(3, 45)); // using variable name

// Arrow function
const dialogue = () => console.log("Bulaau kya farmhouse pe");
dialogue();

const square = (num) => num * num;
console.log(square(3));

const cube = (num) => num * num * num;
console.log(cube(5));

// Rest Parameters or Spread operator
// console.log(...[1, 2, 3, 4, 5]);
const sum = (...number) => {
  let initial = 0;
  for (let i of number) {
    initial += i;
  }
  return initial;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


let obj = {
    name:"Vishal",
    age: 23,
    location: "Delhi"
}
function fun({name, location}){
console.log(name, location)
}
// function fun(obj_1){
// console.log(obj_1.name, obj_1.age, obj_1.location)
// }
fun(obj)


obj2 = Object.create(obj)
console.log(obj2)
