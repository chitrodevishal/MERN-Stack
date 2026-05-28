console.log("String in JS");

console.log("Hello World");

console.log("Hello World");

console.log(`Hello World`);

let string = "Hello World";
string[0] = "Z";
console.log(string); // Output: Hello World (Strings are immutable in JS)

let name = "Vishal";
name = "Dhurandhar";
console.log(`Hello ${name}`);

console.log("This is line 1 \nThis is line 2");
console.log(`This is line 1
This is line 2`);

let length = "JavaScript";
console.log(length.length); // Output: 10
console.log(length.toUpperCase()); // Output: JAVASCRIPT
console.log(length.toLowerCase()); // Output: javascript
console.log(length[0]); // Output: J

let trim = "Dhurandhar   ";
console.log(trim.trim()); // Output: Dhurandhar

let slice = "Hello World";
// -11 -> H -> 0
// -10 -> e -> 1
// -9 -> l -> 2
// -8 -> l -> 3
// -7 -> o -> 4
// -6 ->   -> 5
// -5 -> W -> 6
// -4 -> o -> 7
// -3 -> r -> 8
// -2 -> l -> 9
// -1 -> d -> 10
console.log(slice[0]); // Output: H
console.log(slice.length); // Output: 11
console.log(slice.slice(0, 5));
console.log(slice.slice(-8, 9));

let substring = "Substring";
console.log(substring.substring(0, 5)); // Output: Subst

console.log(substring.replace("Sub", "Java")); // Output: Javastring
console.log(substring.replaceAll("s", "x")); // Output: Subxtring

let list = "HTML! CSS! JavaScript";
console.log(list.split("! "));

let include = "JavaScript";
console.log(include.includes("Script")); // Output: true
console.log(include.includes("script")); // Output: false)

console.log(include.startsWith("Java")); // Output: true
console.log(include.endsWith("Script")); // Output: true

let first = "First_Name";
let last = "Last_Name";
console.log(first + last);
console.log(first + " " + last);
console.log(first.concat(" ", last));

// String and Number Addition

console.log(typeof ("5" + 6), "5" + 6); // Output: 56
console.log(typeof (5 + "6"), 5 + "6"); // Output: 56
console.log(typeof ("5" + "6"), "5" + "6"); // Output: 56
console.log(typeof (5 + 6), 5 + 6); // Output: 11

console.log(typeof ("Name" + 10), "Name" + 10); // Output: string
console.log(typeof (10 + "Name"), 10 + "Name"); // Output: string
console.log(typeof ("Name" + "10"), "Name" + "10"); // Output: string
console.log(typeof (10 + 10), 10 + 10); // Output: number
//  JS converts number into string when we use + operator with string and number. This is called Type Coercion in JS.

// Escape Characters
console.log("This is line 1 \nThis is line 2");
console.log("This is line 1 \\nThis is line 2");
console.log("This is line 1 \tThis is line 2");
console.log("Hello World\'s JavaScript");
console.log('Hello World"s JavaScript');

console.log(typeof "😀", "😀");

let str = "Hello World";
console.log(str.length);
console.log(str.indexOf("World")); // Output: 6
console.log(str.indexOf("world")); // Output: -1 (not found)
console.log(str.search("World")); // Output: 6
console.log(str.search("world")); // Output: -1 (not found
console.log(str.lastIndexOf("o")); // Output: 7
console.log(str.lastIndexOf("O")); // Output: -1 (not found)
console.log(str.charAt(0)); // Output: H
console.log(str.charAt(11)); // Output: "" (empty string, out of bounds)
console.log(str.charCodeAt(0)); // Output: 72 (ASCII code for 'H')
console.log(str.charCodeAt(11)); // Output: NaN (out of bounds)

let str1 = new String("Hello World");
console.log(typeof str1); // Output: object
console.log(str1); // Output: [String: 'Hello World']
console.log(str1.length); // Output: 11
console.log(str1.charAt(0)); // Output: H
console.log(str1.charAt(11)); // Output: "" (empty string, out of bounds)
console.log(str1.charCodeAt(0)); // Output: 72 (ASCII code for 'H')
console.log(str1.charCodeAt(11)); // Output: NaN (out of bounds)
console.log(str1.bold()); // Output: <b>Hello World</b>
console.log(str1.italics()); // Output: <i>Hello World</i>
console.log(str1.fontsize(5)); // Output: <font size="5">Hello World</font>
console.log(str1.fontcolor("red")); // Output: <font color="red">Hello World</font>

let letter = new String("A");
console.log(letter === "A"); // Output: false (different types)
console.log(letter == "A"); // Output: true (type coercion)

let str2 = "Hello";
str2+= "!"
console.log(str2); // Output: Hello!

let str3 = "Hello";
let str4 = "Hello"; //Here str3 and str4 are string literals and they are stored in the same memory location in the string pool. So, they are equal in value and type.
console.log(str3 === str4); // Output: true
console.log(str3 == str4); // Output: true
