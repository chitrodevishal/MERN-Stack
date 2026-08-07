const file = require(`fs`)

// 1. Restaurant Image
// 2. Restaurant Name
// 3. Rating
// 4. Food Type
// 5. Price
// 6. Location
// 7. Distance
// 8. Offers
// 9. Alcohol
// 10. Restaurant Opening time
// 10. Restaurant Closing time

// Here we create 100 dummy data
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const name = [
  "Urban Zaika",
  "The Dal Bafla Café",
  "Spice Heritage",
  "Royal Malwa Feast",
  "Street Spoon Indore",
  "Saffron Courtyard",
  "Mint & Masala",
  "The Hungry Rajwada",
  "Taste of Chappan",
  "Curry Craft Indore",
];
const foodTypes = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Fast Food",
  "Street Food",
  "Mughlai",
  "Biryani",
  "Pizza",
  "Cafe",
  "Desserts",
];
const locations = [
  "Vijay Nagar",
  "Palasia",
  "Rajwada",
  "Sarafa Bazaar",
  "Bhawarkuan",
  "New Palasia",
  "Scheme No. 54",
  "Scheme No. 78",
  "AB Road",
  "MR 10 Road",
];
const Restaurant = [];

for (let i = 0; i < 100; i++) {
  const obj = {};
  obj["Restaurant Images"] = images[Math.floor(Math.random() * 10)];
  obj["Restaurant Name"] = name[Math.floor(Math.random() * 10)];
  obj["Rating"] = Math.floor(Math.random() * 5 + 1).toFixed(1);
  obj["Food Type"] = foodTypes[Math.floor(Math.random() * 10)];
  obj["Price"] = Math.floor(Math.random() * 2401 + 100);
  obj["Location"] = locations[Math.floor(Math.random() * 10)];
  obj["Distance"] = Math.floor(Math.random() * 50 + 1);
  obj["Offers"] = Math.floor(Math.random() * 56 + 25);
  obj["Alcohol"] = Math.random() > 0.8;
  obj["Restaurant Opening time"] = Math.floor(Math.random() * 11 + 11);
  obj["Restaurant Closing time"] = (obj["Restaurant Opening time"] + 12) % 24;
  Restaurant.push(obj);
}

console.log(Restaurant);

const jsonData = JSON.stringify(Restaurant, null, 4)
file.writeFileSync(`File.json`, jsonData, `utf8`)
