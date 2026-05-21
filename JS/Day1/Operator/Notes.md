Operators in JavaScript
Operators are symbols that perform operations on values.

In JavaScript, coercion means:

JavaScript automatically converts one data type into another when performing operations.

This is also called type conversion.


Types of Operators in JavaScript
| Category   | Purpose             |
| ---------- | ------------------- |
| Arithmetic | Math operations     |
| Assignment | Assign values       |
| Comparison | Compare values      |
| Logical    | Boolean logic       |
| Bitwise    | Binary operations   |
| Unary      | Single operand      |
| Ternary    | Short condition     |
| String     | Text concatenation  |
| Type       | Check/convert types |

1. Arithmetic Operators

Used for mathematical calculations.
Addition +
Substraction -
Multiplication *
Division /
Modulus %
Exponentiation (**)
Why Modulus Is Important

Used in:

even/odd checks
cyclic rotations
pagination
hashing

2. Assignment Operators

Store values in variables.
Basic Assignment =
Compound Assignment 
| Operator | Meaning         |
| -------- | --------------- |
| +=       | Addition assign  |
| -=       | subtract assign |
| *=       | multiply assign |
| /=       | divide assign   |
| %=       | modulus assign  |

3. Comparison Operators

Used to compare values and Result is always true or false
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
!= Not Equal to
== Equal and Equal to (Loose Equality (==)) Here check equality without type checking
Modern JS development strongly prefers === Strict Equality (==) Here first type check then compare

4. Logical Operators

Used for decision making.
And && return true when both will true else false
Or || return false when both will false else true

Why Logical Operators Matter

They power:

authentication
form validation
permissions
conditional rendering

Entire web applications depend on them.

Unary Operators
Operate on one operand only.
Increment (++)
Pre Increment (++x)
Post Increment (x++)
Decrement (--)
Pre Decrement (--x)
Post Decrement (x--)

String Operators

JavaScript uses + for string concatenation.

Why JS Uses + for Strings

JavaScript inherited syntax inspiration from older languages.

Dynamic typing allowed operator overloading behavior.

7. Ternary Operator
Short form of if-else
Example: condition ? trueValue : falseValue

Why Ternary Exists

Cleaner concise conditions.

Common in:

React rendering
UI conditions
JSX

8. Type Operators
typeof: Checks type.

instanceof: Checks object inheritance.
arr instanceof Array → "Is arr an Array?" → true
instanceof checks if an object was created from a specific constructor/class.

arr instanceof Array → true because arr is created from the Array constructor

9. Bitwise Operators

Operate directly on binary bits.

| Operator | Purpose     |
| -------- | ----------- |
| &        | AND         |
| |        | OR          |
| ^        | XOR         |
| ~        | NOT         |
| <<       | Left shift  |
| >>       | Right shift |
~ is the Bitwise NOT operator
~n = -(n + 1)

So ~5 = -(5 + 1) = -6
 5  = 00000101
~5  = 11111010  → -6 (in two's complement)

10. Nullish Coalescing (??)
Returns right side only if left is:

null
undefined
let name = null ?? "Guest";

Why ?? Was Introduced

Because || treated many valid values as false.

|| returns right side if left is falsy (0, "", null, undefined, false, NaN)

So 0 || 100 → 100 ❌ (but 0 might be a valid value you want to keep)

?? (Nullish Coalescing) only returns right side if left is null or undefined

So 0 ?? 100 → 0 ✅ (keeps 0 because it's not null/undefined)

Simple rule:

|| → "is it falsy?"

?? → "is it null/undefined?"

11. Optional Chaining (?.)
Prevents errors when property missing.  
let user = null
// console.log(user.name)  // Error Because user is null.

// With Optional Chaining
console.log(user?.name) // undefined
Now JS checks:

If user exists → access name
If user is null/undefined → return undefined

No error occurs.

// 1. Object Property
obj?.property

// 2. Array Element
arr?.[index]

// 3. Method Call
obj?.method?.()

let user = null

user?.name        // undefined (not crash)
user?.[0]         // undefined (not crash)
user?.getName?.() // undefined (not crash)

Short-Circuit Evaluation

Logical operators sometimes stop early.

