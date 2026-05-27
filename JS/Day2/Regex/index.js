console.log("Regular Expressions (Regex) in JavaScript");
// What Problem Does Regex Solve?
// We have a String
let str = "My email is John@gmail.com.";
// If we want to extract the email from the string, we can use regex

let str1 = "Hello World!";
let regex = /Hello/;
console.log(regex.test(str1)); // true
console.log(regex.test("Hello")); // true
console.log(regex.test("hello")); // false

//Regex Structure
// /pattern/flags
// pattern: The pattern we want to search for
// flags: Optional flags that modify the behavior of the regex

// Ways to Create Regex
// 1. Using regex literal
let regex1 = /abc/g;

let regex2 = /gmail/;

// 2. Using RegExp constructor
let regex3 = new RegExp("Hello", "g");

let word = "Cat";
let regex4 = new RegExp(word, "g");
// Now regex becomes
console.log(/Cat/g); // /Cat/g

// FLAGS (Modifiers)
// g - global search

let str2 = "Hello Hello Hello";
console.log(str2.match(/Hello/));
console.log(str2.match(/Hello/g));

// i - case insensitive search
let str3 = "Hello";
console.log(/hello/i.test(str3)); // true
console.log(/Hello/i.test(str3)); // true

// m - multiline search
let str4 = `Hello
World`;
console.log(/^Hello/m.test(str4)); // true
console.log(/^World/m.test(str4)); // true

console.log(/Hello$/m.test); // true
console.log(/World$/m.test); // true

console.log(/Hello/m.test(str4)); // true
console.log(/World/m.test(str4)); // true

console.log(/Hello/.test(str4)); // true
console.log(/World/.test(str4)); // true

console.log(str4.match(/Hello/m)); // [ 'Hello' ]
console.log(str4.match(/World/m)); // [ 'World' ]

// s - dotall search

let str5 = "Hello\nWorld";
console.log(/hello.world/.test(str5)); // false
console.log(/hello.world/s.test(str5)); // true

// Methods
// 1. test() - tests for a match in a string. Returns true or false.
let str6 = /hello/;
console.log(str6.test("Hello")); // true
console.log(str6.test("hello")); // true
console.log(str6.test("Hi")); // false

let password = "123@Sharma";
console.log(/\d/.test(password)); // true
console.log(/\w/.test(password)); // true
console.log(/\s/.test(password)); // false
console.log(/[@#$%^&*]/.test(password)); // true

// 2. exec() - executes a search for a match in a string. Returns an array of information or null on a mismatch.

let str7 = /Hello/;
console.log(str7.exec("Hello World")); // [ 'Hello', index: 0, input: 'Hello World' ]
console.log(str7.exec("Hi World")); // null

// 3. match() - retrieves the matches when matching a string against a regex. Returns an array of matches or null on a mismatch.

let str8 = "Hello Hello Hello";
console.log(str8.match(/Hello/)); // [ 'Hello', index: 0, input: 'Hello Hello Hello' ]
console.log(str8.match(/Hello/g)); // [ 'Hello', 'Hello', 'Hello' ]
console.log(str8.match(/Hi/g)); // null

let post = "#HTML #CSS #JavaScript";
console.log(post.match(/#\w+/g)); // [ '#HTML', '#CSS', '#JavaScript' ]

let text = "The price is $100";
console.log(text.match(/\$\d+/)); // [ '$100', index: 13, input: 'The price is $100' ]

// 4. replace() - executes a search for a match in a string, and replaces the matched substring with a replacement substring. Returns the new string.

let str9 = "Hello World";
console.log(str9.replace(/Hello/, "Hi")); // Hi World
console.log(str9.replace(/o/g, "0")); // Hell0 W0rld
console.log(str9.replaceAll(/l/g, "x")); // Hexxo Worxd

// 5. search() - tests for a match in a string. Returns the index of the first match, or -1 if the search fails.

let str10 = "Hello World";
console.log(str10.search(/Hello/)); // 0
console.log(str10.search(/World/)); // 6
console.log(str10.search(/Hi/)); // -1

// Anchors : define the position of a match in a string
// ^ - matches the beginning of a string
// $ - matches the end of a string

console.log(/^Hello/.test("Hello World")); // true
console.log(/^World/.test("Hello World")); // false
console.log(/World$/.test("Hello World")); // true
console.log(/Hello$/.test("Hello World")); // false

// Character Classes

// /h.t/ - matches any string that starts with 'h', followed by any character, and ends with 't'
console.log(/h.t/.test("hat")); // true
console.log(/h.t/.test("hit")); // true
console.log(/h.t/.test("hot")); // true
console.log(/h.t/.test("ht")); // false

// \d - matches any digit
console.log(/\d/.test("123")); // true
console.log(/\d/.test("abc")); // false

// \w - matches any word character (alphanumeric or underscore)
console.log(/\w/.test("Hello")); // true
console.log(/\w/.test("123")); // true
console.log(/\w/.test("_")); // true
console.log(/\w/.test("@")); // false

// \s - matches any whitespace character
console.log(/\s/.test("Hello World")); // true
console.log(/\s/.test("HelloWorld")); // false
console.log(/\s/.test(" ")); // true
console.log(/\s/.test("\n")); // true
console.log(/\s/.test("\t")); // true

// Quantifiers : define the number of times a character or group should be matched (control repetition)

// * - matches 0 or more times
console.log(/go*/.test("g")); // true
console.log(/go*/.test("go"));
console.log(/go*/.test("goo")); // true
console.log(/go*/.test("goooo")); // true
console.log(/go*/.test("gogogo")); // true

// + - matches 1 or more times
console.log(/go+/.test("g")); // false
console.log(/go+/.test("go")); // true
console.log(/go+/.test("goo")); // true
console.log(/go+/.test("goooo"));

// ? - matches 0 or 1 time
console.log(/go?/.test("g")); // true
console.log(/go?/.test("go")); // true
console.log(/go?/.test("goo")); // false

// {n} - matches exactly n times
console.log(/go{2}/.test("g")); // false
console.log(/go{2}/.test("go")); // false
console.log(/go{2}/.test("goo")); // true
console.log(/go{2}/.test("goooo")); // true

// {n,} - matches n or more times
console.log(/go{2,}/.test("g")); // false
console.log(/go{2,}/.test("go")); // false
console.log(/go{2,}/.test("goo")); // true
console.log(/go{2,}/.test("goooo")); // true

// {n,m} - matches between n and m times
console.log(/go{2,4}/.test("g")); // false
console.log(/go{2,4}/.test("go")); // false
console.log(/go{2,4}/.test("goo")); // true
console.log(/go{2,4}/.test("goooo")); // true
console.log(/go{2,4}/.test("gooooo")); // false

// GROUPS
// () - groups multiple tokens together and creates a capture group for extracting a substring or using a backreference

// Capturing Group (abc) - captures the matched substring for later use


let result = /(ha)+/.exec("hahahaha"); // [ 'hahahaha', index: 0, input: 'hahahaha', group: 'ha' ]
console.log(result);

let result2 = /(\d{3})-(\d{3})-(\d{4})/.exec("My phone number is 123-456-7890.");
console.log(result2); // [ '123-456-7890', '123', '456', '7890', index: 19, input: 'My phone number is 123-456-7890.' ]
console.log(result2[0]); // 123-456-7890
console.log(result2[1]); // 123
console.log(result2[2]); // 456
console.log(result2[3]); // 7890     

// Character Set [abc]
// Matches any one of the characters inside the brackets
console.log(/[aeiou]/.test("hello")); // true
console.log(/[aeiou]/.test("sky")); // false
console.log(/[aeiou]/i.test("Hello")); // true
console.log(/[aeiou]/i.test("AEIOU")); // true
console.log(/[aeiou]/.test("Hello")); // true

