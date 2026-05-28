### Strings

A String is:

A sequence of characters used to store and manipulate text.

Examples:

"Hello"
'JavaScript'
`MERN Stack`

Strings are one of the most used data types in JavaScript.

Why Strings Exist

Computers naturally understand:

0 and 1

But humans communicate using:

words
sentences
symbols
emojis
URLs
emails

Strings allow programming languages to represent human-readable text.

History Before Modern Strings

Early computers worked mainly with:

numeric codes
binary
machine instructions

Characters were later standardized using systems like:

Standard Purpose
ASCII English characters
Unicode Global characters/emojis

Without string systems:

Text processing would be impossible
Why Strings Became Important for Web Development

Websites constantly use text:

usernames
passwords
buttons
APIs
chat messages
search inputs
URLs

JavaScript was built for browsers, so string handling became extremely important.

How String Is Stored Internally

Example:

let name = "Vishal";

JavaScript stores characters internally using:

Unicode

Each character gets numeric encoding.

Example:

Character Unicode
A 65
V 86
Strings Are Primitive Data Types

In JavaScript:

String = Primitive Type

Meaning:

immutable
stored by value
lightweight
What Does Immutable Mean?

Immutable means:

Original string cannot be changed

Example:

let str = "Hello";

str[0] = "Y";

console.log(str);

Output:

Hello

Nothing changed.

Why Strings Are Immutable

Immutability provides:

better optimization
safer memory handling
predictable behavior
easier caching

Modern JS engines optimize immutable strings heavily.

Ways to Create Strings

1. Double Quotes
2. Single Quotes
3. Backticks (Template Literals)

| Feature                | Benefit             |
| ---------------------- | ------------------- |
| Multiline strings      | Cleaner formatting  |
| Variable interpolation | Easier dynamic text |
| Better readability     | Cleaner code        |

String Index Starts from 0

String Methods
Methods help manipulate strings.
**toUpperCase()**

**toLowerCase()**

**Slice()**
Simple rule: "slice cuts a copy, never touches the original"

**Trim()**
Removes spaces from start/end.

**Substring()**
Similar to slice().

| **slice()**             | **substring()** |
| ----------------------- | --------------- |
| supports negative index | does not        |
| more modern/flexible    | older behavior  |

**Replace()**
Replaces part of string with new value.

**ReplaceAll()**
Replaces all occurrences of a substring.

Replace Methods Matter

Used in:

text formatting
sanitization
URL rewriting
markdown parsing

**Split()**
Converts string into array

split() Important
Very common in:

CSV parsing
API handling
search systems
tokenization

**Includes()**
Checks if text exists. it return true or false

**StartsWith() and endsWith()**
Checks if string starts or ends with specific text.

Useful
Common in:

route validation
file checking
URL handling

String Concatenation
Combining strings together

- Operator in Strings
  The + operator concatenates strings.

String and Number Addition
Because JS converts number into string and this is called Type coercion

Escape Characters
Used for special formatting.

| Escape | Meaning      |
| ------ | ------------ |
| \n     | new line     |
| \t     | tab          |
| \      | backslash    |
| "      | double quote |

Unicode and Emojis

JavaScript strings support Unicode because JS internally uses Unicode encoding.

String Search Methods

**indexOf()**
Returns first match position

**lastIndexOf()**
Returns last match position

**search()**
Works with regex(Regex helps powerful text matching) too
