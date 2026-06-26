console.log("Map in JS");
// Maps should be store in key value par and key must be unique and any kind of like string, object and number and etc but in object key must be string and symbol
const map = new Map();
map.set("name", "Avinash");
map.set("age", 22);
map.set("college", "Gla University");
map.set("college", "Gla University"); // it repeat but it show once
map.set("college", "RGPV University"); // it will update
map.set("name", "Avi"); // it will override the previous value of name
map.delete("name"); // it will dlt
console.log(map.has("age")); // return true and false
console.log(map.size);
map.clear(); // it will clear whole map
console.log(map);

// Other method to create a map
const map1 = new Map([
  ["name", "Neha Sharma"],
  ["city", "Mumbai"],
  ["age", 34],
]);
// console.log(map1)

for (let [key, values] of map1) {
  console.log(key, values);
}
