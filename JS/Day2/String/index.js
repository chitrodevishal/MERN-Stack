console.log("Strings in JavaScript");
let str1 = "Hello World";
let str2 = "Hello World";
let str3 = `Hello World`;
console.log(str1, str2, str3);

//String are Immutable in JavaScript
str1[0] = "h"; // This will not change the string]
console.log(str1); // Output: Hello World

// Template Literals
let name = "Vishal";
console.log(`Hello ${name}`); // Output: Hello Vishal

console.log("This is line 1 \nThis is line 2"); // Output: This is line 1
// This is line 2

console.log("This is line 1 \\n This is line 2");

let length = "Hello World";
console.log(length.length); // Output: 11

console.log(length.toUpperCase());

console.log(length.toLowerCase());

console.log(length[0]);

// String Methods

let trim = "Dhurandhar   ";
console.log(trim.trim()); // Output: Dhurandhar
//012345678910

let slice = "Hello World";
// -1 -> H -> 0
// -2 -> e -> 1
// -3 -> l -> 2
// -4 -> l -> 3
// -5 -> 0 -> 4
// -6 ->   -> 5
// -7 -> w -> 6
// -8 -> o -> 7
// -9 -> r -> 8
// -10 -> l -> 9
// -11 -> d -> 10
console.log(slice.length);
console.log(slice.slice(0, 5)); // End is NOT included
console.log(slice.slice(-5)); // Output: World

let substring = "Substring ";
console.log(substring.substring(0, 5)); // End is NOT included

console.log(slice.replace("World", "JavaScript"));
// Output: Hello JavaScript
console.log(slice.replaceAll("l", "x")); // Output: Hexxo Worxd
let list = "HTML, CSS, JavaScript".split(",");
console.log(list);

console.log(list.join(" - ")); // Output: HTML - CSS - JavaScript

console.log(slice.includes("World")); // Output: true
console.log(slice.includes("world")); // Output: false

// startsWith() and endsWith()
console.log(slice.startsWith("H")); // Output: true
console.log(slice.endsWith("d")); // Output: true

//String Concatination
let str4 = "Hello";
let str5 = "World";
console.log(str4 + " " + str5);

// + Operator in Strings
console.log("1" + 2); //Because JS converts number into string this is called Type Coercion

console.log(1 + "2"); // Output: 12

// Escape Characters

console.log("Hello World\nThis is JavaScript"); // Output: Hello World
console.log("Hello World \\nThis is JavaScript"); // Output: Hello World
console.log("Hello World\tThis is JavaScript"); // Output: Hello World

console.log("Hello World\'s JavaScript"); // Output: Hello World's JavaScript

console.log('Hello World"s JavaScript'); // Output: Hello World's JavaScript

console.log("😀");

// String Search Methods
let search = "Hello World";

// indexOf() method returns the index of the first occurrence of the specified value, or -1 if not found
console.log(search.indexOf("i")); // Output: -1
console.log(search.indexOf("World")); // Output: 6
console.log(search.indexOf("world")); // Output: -1

// search() method searches a string for a specified value and returns the position of the match
console.log(search.search("World")); // Output: 6
console.log(search.search("world")); // Output: -1
console.log(search.search("w")); // Output: -1
console.log(search.search("W")); // Output: 6

// lastIndexOf() method returns the index of the last occurrence of the specified value, or -1 if not found
console.log(search.lastIndexOf("o")); // Output: 7
console.log(search.lastIndexOf("l")); // Output: 9
console.log(search.lastIndexOf("x")); // Output: -1

// charAt() method returns the character at the specified index
console.log(search.charAt(0)); // Output: H
console.log(search.charAt(6)); // Output: W
console.log(search.charAt(11)); // Output: (empty string)


