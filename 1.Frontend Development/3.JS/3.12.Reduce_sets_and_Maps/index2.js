let arr = [10, 20, 304, 40, 50, 60];
console.log(arr.includes(10));

const obj = {
  user_name: "Vishal",
  user_age: 24,
  user_address: {
    user_city: "Bhopal",
    user_state: "MP",
    user_country: "India",
  },
  user_account_no: 9876543210,
  user_account_bal: 0,

};
let curr = "user_account_bal"
// console.log(obj.hasOwnProperty(curr)) // it return true and false
if(obj.hasOwnProperty(curr)){
    obj[curr]+=35000
}else{
    obj[curr] = 35000
}
console.log(obj);
