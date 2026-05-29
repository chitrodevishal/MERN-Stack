console.log("Regex in JavaScript");

// Regular Expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

let text = `This is my email address abc@gmail.com
This is my phone number 1234567890
This is my website www.google.com
This is my password 123456
This is my username abc123
This is my name John Doe`;
console.log(text);
console.log(typeof text);

//if we you want to:

// check if email exists
// find phone numbers....etc Without Regex, we would write many loops and conditions. But with Regex, we can do it in one line of code.

let regex = /ab/g;
let string = "abcabcabcabc";
console.log(regex.test(string)); // true
console.log(typeof regex.test(string)); // true

// Before Regex
// if(str[0] === "a" && str[1] === "b") this will became huge for email, password, username, etc. But with Regex, we can do it in one line of code.

// Regex works like this
// String → Scan Character by Character → Match Pattern → Return Result

let str = "Hello World";
let regex1 = /Hello/;
let result = regex1.test(str); // true
console.log(result);
console.log(typeof result);

// Regex scans the string and checks:
// "Does world exist?"

// Regex Structure
// /pattern/flags
// | Part    | Meaning         |
// | ------- | --------------- |
// | `/ /`   | regex container |
// | `hello` | pattern         |
// | `g`     | flag            |

// Pattern: The pattern is the text we want to search for. It can be a simple string or a more complex pattern using special characters.
// Flags: Flags are optional and can be used to modify the behavior of the regex. Some common flags include:
// g: global search (find all matches)
// i: case-insensitive search
// m: multi-line search
// s: dot matches newline characters

// Two Ways to Create Regex
// 1. Using regex literal
let regex2 = /abc/; //used When pattern never changes
let regex5 = /abc/g; //used When pattern never changes
console.log(regex2);
console.log(typeof regex2);
console.log(regex5);
console.log(typeof regex5);
// 2. Using RegExp constructor
let regex3 = new RegExp("abc"); //used when For dynamic/user-generated patterns
let regex4 = new RegExp("abc", "g"); //used when For dynamic/user-generated patterns with flags /abc/g
console.log(regex3);
console.log(typeof regex3);
console.log(regex4);
console.log(typeof regex4);

// Differences between Literal and Constructor:

// | Literal     | Constructor           |
// | ----------- | --------------------- |
// | Static      | Dynamic               |
// | Faster      | Flexible              |
// | Easy syntax | Useful for user input |

// FLAGS
// Flags are optional and can be used to modify the behavior of the regex. Some common flags include:
// g: global search (find all matches)
// i: case-insensitive search
// m: multi-line search
// s: dot matches newline characters

// g flag: global search (find all matches)

let string1 = "cat cat cat";
let regex6 = /cat/;
console.log(regex6.test(string1)); // true
console.log(string1.match(/cat/)); // ["cat"] Only first match
console.log(string1.match(/cat/g)); // [ 'cat', 'cat', 'cat' ] All matches

// i flag: case-insensitive search
let string2 = "Hello JavaScript";
console.log(/javascript/i.test(string2)); // true
console.log(/javascript/i.exec(string2)); // [ 'JavaScript', index: 6, input: 'Hello JavaScript' ]
console.log(/javascript/i.exec(string2)[0]); // JavaScript Only the matched string
console.log(/javascript/i.exec(string2)[1]); // undefined No capturing groups

// [0] → full matched text
// [1] → first capturing group ()
// [2] → second capturing group ()

// m flag: multi-line search
let string3 = `This is 1 line 
This is 2 line 
This is last line`;
console.log(string3);
console.log(typeof string3);
console.log(/^This/g.test(string3));
// true because ^ matches the start of each line in multi-line mode
console.log(/^This/g.exec(string3));
// [ 'This', index: 0, input: 'This is line 1\nThis is line 2\nThis is last line' ]
// because ^ matches the start of the string and the first line starts with "This"

console.log(/Line$/gi.test(string3));
console.log(/Line$/gi.exec(string3));

// s flag: dot matches newline characters
let string4 = "Hello\nWorld";
console.log(/Hello.World/.test(string4)); // false because . does not match \n
console.log(/Hello.World/s.test(string4)); // true because s flag allows . to match \n
console.log(/Hello.World/s.exec(string4)); // [ 'Hello\nWorld', index: 0, input: 'Hello\nWorld', groups: undefined ]
console.log(/Hello.World/s.exec(string4)[0]); // Hello\nWorld

// KEY METHODS
// 1. test(): Tests for a match in a string. Returns true or false.
let regex7 = /Hello/;
let string5 = "Hello World";
console.log(regex7.test(string5)); // true

let email = "sharma@gmail.com";
console.log(/gmail\.com$/.test(email)); // true because $ matches the end of the string and "gmail.com" is at the end of the string

let password = "123@ Password";
console.log(/\d\s/.test(password)); // true because \d matches a digit and \s matches a whitespace character, and "3 " in the password matches this pattern

// 2. exec(): Executes a search for a match in a string. Returns an array of information or null on a mismatch.
let regex8 = /World/;
console.log(regex8.exec(string5)); // [ 'World', index: 6, input: 'Hello World', groups: undefined ]
console.log(regex8.exec(string5)[0]); // World
console.log(regex8.exec(string5)[1]); // undefined No capturing groups

let errorString = "Error: Something went wrong";
console.log(/Error:(.*)/.exec(errorString)); // [ 'Error: Something went wrong', 'Something went wrong', index: 0, input: 'Error: Something went wrong', groups: undefined ]

// 3. match(): Retrieves the matches when matching a string against a regex.
console.log(string5.match(/Hello/)); // [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]
console.log(string5.match(/Hello/g)); // [ 'Hello' ] Only matched string
console.log(string5.match(/o/g)); // [ 'o', 'o' ] All matched string

let hashtag = "#HTML #CSS #JavaScript";
console.log(hashtag.match(/#\w+/g)); // [ '#HTML', '#CSS', '#JavaScript' ] Matches all hashtags));

// 4. replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
console.log(string5.replace("l", "x")); // Hexlo World Only replaces first occurrence
console.log(string5.replaceAll("l", "x")); // Hexxo Worxd Replaces all occurrences

let text2 = "The quick brown fox jumps over the lazy dog";
console.log(text2.replaceAll(" ", "")); // Thequickbrownfoxjumpsoverthelazydog Removes all spaces))

let phone = "+91-1234567890";
console.log(phone.replace(/\d/g, "*")); // +**-********** Replaces all digits with * using regex

// 5. search(): Tests for a match in a string. Returns the index of the match, or -1 if the search fails.
console.log(string5.search(/World/)); // 6
console.log(string5.search(/JavaScript/)); // -1 Not found

// Anchors
// Anchors are special characters that match positions in a string rather than actual characters. Some common anchors include:
// ^: Matches the start of a string
// $: Matches the end of a string

// Example of anchors
// ^ anchor matches the start of a string
// /^Hello/ meaning string must start with "Hello"
console.log(/^Hello/.test(string5)); // true
console.log(/^World/.test(string5)); // false

// $ anchor matches the end of a string
// /World$/ meaning string must end with "World"
console.log(/World$/.test(string5)); // true
console.log(/Hello$/.test(string5)); // false

// Character Classes
// Character classes allow you to match any one of a set of characters. Some common character classes include:
// \d: Matches any digit (equivalent to [0-9])
// \w: Matches any word character (equivalent to [a-zA-Z0-9_])
// \s: Matches any whitespace character (equivalent to [ \t\n\r\f\v])

let word = "Hat";
console.log(/h.t/i.test(word)); // true because . matches any character and i flag makes it case-insensitive
console.log(/h.t/.test(word)); // false because . matches any character but h and t are not in the same case

let digit = "123@Password";
console.log(/\d/.test(digit)); // true because \d matches any digit and "1" in the string matches this pattern
console.log(/\w/.test(digit)); // true because \w matches any word character and "1" in the string matches this pattern
console.log(/\s/.test(digit)); // false because \s matches any whitespace character and there is no whitespace in the string

let whitespace = "Hello World\n Hello JavaScript\tHello Regex";
console.log(/\s/.test(whitespace)); // true because \s matches any whitespace character and there are multiple whitespace characters in the string
console.log(whitespace.match(/\s/g)); // [ ' ', '\n ', '\t' ] Matches all whitespace characters in the string

// Quantifiers
// Quantifiers allow you to specify how many times a character or group should be matched. Some common quantifiers include:
// *: Matches 0 or more times
// +: Matches 1 or more times
// ?: Matches 0 or 1 time
// {n}: Matches exactly n times
// {n,}: Matches n or more times
// {n,m}: Matches between n and m times

let string6 = "Helloooo World";
console.log(/lo*/.test(string6)); // true because o* matches 0 or more o's and "looooo" in the string matches this pattern
console.log(/lo+/.test(string6)); // true because o+ matches 1 or more o's and "looooo" in the string matches this pattern

console.log(/lo?/.test(string6)); // true because o? matches 0 or 1 o's and "lo" in the string matches this pattern
console.log(/lo{2}/.test(string6)); // true because o{2} matches exactly 2 o's and "loo" in the string matches this pattern
console.log(/lo{2,}/.test(string6)); // true because o{2,} matches 2 or more o's and "looooo" in the string matches this pattern
console.log(/lo{2,4}/.test(string6)); // true because o{2,4} matches between 2 and 4 o's and "loooo" in the string matches this pattern
console.log(/lo{2, 4}?/.test(string6)); // false because o{2,4}? matches between 2 and 4 o's but is non-greedy and "loooo" in the string does not match this pattern because it has 5 o's

// Groups
// Groups allow you to group multiple characters together and apply quantifiers to the entire group. Groups are defined using parentheses ().

let group = /(ha)+/.exec("hahaha"); // [ 'hahaha', index: 0, input: 'hahaha', groups: undefined ]
console.log(group); // because (ha)+ matches "ha" repeated 1 or more times and "hahaha" in the string matches this pattern, so it returns an array with the full matched text and the first capturing group
console.log(group[0]); // hahaha because [0] is the full matched text and "hahaha" in the string matches the pattern (ha)+ which means "ha" repeated 1 or more times
console.log(group[1]); // ha because (ha) is the first capturing group and it matches "ha" in the string, and it is repeated 3 times due to the + quantifier
console.log(group[2]); // undefined because there is no second capturing group in the regex pattern

let NCG = /(?:abc)/.exec("abcd"); // [ 'abc', index: 0, input: 'abc', groups: undefined ]
console.log(NCG);
console.log(NCG[0]); // abc because (?:abc) is a non-capturing group and it matches "abc" in the string, so it returns an array with the full matched text but no capturing groups
console.log(NCG[1]); // undefined because there are no capturing groups in the regex pattern

// Character Sets
// Character sets allow you to match any one of a set of characters. Character sets are defined using square brackets [].

let CS = /[abc]/.exec("bdefgh"); // [ 'a', index: 0, input: 'abcdefgh', groups: undefined ]
console.log(CS); // because [abc] matches any one of the characters a, b, or c and "a" in the string matches this pattern, so it returns an array with the full matched text
console.log(CS[0]); // a because [0] is the full matched text and "a" in the string matches the pattern [abc] which means any one of the characters a, b, or c
console.log(CS[1]); // undefined because there are no capturing groups in the regex pattern


// Practical Real-World Examples

let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
console.log(emailregex.test("JhoneDoe@gmail.com")); // true
console.log(emailregex.test("JhoneDoe@gmail")); // false
console.log(emailregex.exec("JhoneDoe@gmail.com")); // true
console.log(emailregex.exec("JhoneDoe@gmail")); // false






