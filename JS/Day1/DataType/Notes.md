Data Types in JavaScript

What kind of value is stored in memory and how the computer should handle it.
Data types help programming languages represent real-world information.
JS became Dynamically Typed because variable type is decided automatically at runtime

| Category                  | Stored How          |
| ------------------------- | ------------------- |
| Primitive                 | Stored by value     |
| Non-Primitive (Reference) | Stored by reference |



1. Primitive Data Types

Primitive values are:

simple
immutable
directly stored

JavaScript has 7 primitive types.

A. Number
B. String
C. Boolean
D. Undefined
E. Null
F. BigInt
G. Symbol

Internally JS uses:

IEEE 754 floating-point format

Special Number Values

//Infinity

//NAN (Not a Number)

B. String

Websites constantly handle text:

usernames
messages
buttons
URLs
APIs

So string operations became essential.

Backticks introduced modern string interpolation.

Like: console.log(`Hello ${name} ${last_name}`)

C. Boolean 

represent true or false

Computers make decisions using logic.
Boolean powers:

conditions
authentication
permissions
comparisons

D. Undefined
A variable declared but not assigned.

JavaScript automatically assigns it when value is missing.

Useful for:

checking missing data
debugging
default handling

E. Null
Represents:

Intentional absence of value

| Undefined     | Null                |
| ------------- | ------------------- |
| JS assigned   | Developer assigned  |
| Value missing | Empty intentionally |

F. Symbol

Used for:

unique identifiers
avoiding property conflicts

G. BigInt
Normal Number has limits:

2^53-1

Beyond this, precision problems happen.

Final Understanding
Primitive Types
| Type      | Purpose                 |
| --------- | ----------------------- |
| Number    | Numeric values          |
| String    | Text                    |
| Boolean   | True/False              |
| Undefined | Missing value           |
| Null      | Empty intentional value |
| Symbol    | Unique identifier       |
| BigInt    | Large integers          |



2. Non-Primitive (Reference) Types
These store references to memory locations.

Why Objects Were Needed
Websites represent real entities and Primitive types alone were insufficient.
Main types:

Object
Array
Function
Date
RegExp
Error

A. Object
Collection of key-value pairs
Key → Property Name
Value → Property Data

Objects model real-world entities.

B. Array
Stores ordered collections

Needed for:

lists
products
comments
users
APIs

C. Function

Functions are first-class objects in JS.
Functions can:

be stored in variables
passed as arguments
returned from functions

Final Understanding
Reference Types
| Type     | Purpose             |
| -------- | ------------------- |
| Object   | Real-world entities |
| Array    | Ordered lists       |
| Function | Reusable logic      |


Primitive vs Reference

Primitive Copy : value copied separately

Reference Copy: both change because both point to same memory Reference

Stack and Heap Memory
Primitive → Stack

Fast memory storage.

Objects → Heap

Dynamic memory allocation.

Simplified:

Stack → Reference Address
Heap → Actual Object


Type Coercion in JavaScript
JavaScript automatically converts types.

The + operator with a string triggers string concatenation

The -, /, %, and * operator tries numeric conversion

Number can be converted into String but String can't be converted into Number

Key rule to remember:

Operator	Behavior with strings
+	        Prefers string concatenation        
-, *, /	    Forces numeric conversion

So + is the "tricky" one — it works differently from all other arithmetic operators when a string is involved.