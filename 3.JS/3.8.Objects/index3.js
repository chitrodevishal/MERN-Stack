const user = {
    name:"Vishal",
    age:34
}
const user2 = {
    amount:"Rs.5000000000",
    balance:450
}
user2.__proto__ = user
console.log(user2.name)
console.log(Object.prototype)