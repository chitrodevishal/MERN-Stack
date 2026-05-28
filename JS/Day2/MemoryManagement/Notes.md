String
String is a sequence of characters used to store and manipulate text.

Ways to Create Strings:
Memory Management in JavaScript

Memory management means:

How JavaScript stores, uses, allocates, and removes data from computer memory.

This is one of the most important internal concepts in JavaScript and MERN stack development.

Why Memory Exists

Programs need memory to store:

variables
objects
arrays
functions
API data
user input

Without memory:

Program cannot remember anything
Real World Analogy

Imagine:

Memory Area Real World Example
Stack Small organized table
Heap Large storage warehouse
History Before Automatic Memory Management

Languages like:

C
C++

required manual memory handling.

Example in C:

malloc()
free()

Developer had to:

allocate memory
remove memory manually

Mistakes caused:

crashes
memory leaks
security vulnerabilities
Why JavaScript Chose Automatic Memory Management

When Brendan Eich created JavaScript:

Goal was:

easy browser scripting
beginner friendly
safer execution inside browsers

So JavaScript introduced:

Automatic Garbage Collection

Meaning:

JavaScript engine manages memory automatically
What Happens When You Create Variable

Example:

let age = 22;

JS engine:

allocates memory
stores value
tracks reference
later removes unused memory
Two Main Memory Areas in JavaScript
Memory Type Purpose
Stack Memory Primitive/static data
Heap Memory Dynamic/reference data

1. Stack Memory

Stack is:

Fast, fixed-size, organized memory structure

Used for:

primitive values
function calls
execution context
local variables
Why Called "Stack"?

Because it follows:

LIFO → Last In First Out

Like stack of plates.

Last inserted item removed first.

Stack Visualization
|-----------|
| Function3 |
|-----------|
| Function2 |
|-----------|
| Function1 |
|-----------|
Primitive Values Stored in Stack

Example:

let a = 10;
let b = "Hello";
let c = true;

Stored directly in stack.

Why?

Because primitive values are:

small
fixed-size
predictable
Stack Characteristics
Feature Reason
Very fast Continuous memory
Fixed size Easier management
Automatic cleanup Function ends
Ordered LIFO structure
Function Calls and Stack

Every function call creates:

Execution Context

stored in stack.

Example:

function one() {
two();
}

function two() {
console.log("Hello");
}

one();
Call Stack Flow
Push one()
Push two()
Execute two()
Pop two()
Pop one()
Call Stack

This structure is called:

Call Stack

JavaScript is:

Single-threaded

meaning:

One call stack executes code sequentially
Stack Overflow

If function calls become infinite:

function test() {
test();
}

test();

Stack keeps growing.

Eventually:

Maximum call stack size exceeded
Why Stack Overflow Happens

Stack memory is limited.

Infinite recursion fills stack completely.

2. Heap Memory

Heap is:

Large unstructured dynamic memory area

Used for:

objects
arrays
functions
DOM elements
Why Heap Exists

Objects are:

dynamic
variable-sized
unpredictable

Stack cannot efficiently store them.

Example
let user = {
name: "Vishal",
age: 22
};

Object stored in heap.

How Reference Works

Actual object:

Stored in Heap

Variable:

Stores memory reference in Stack
Visualization
Stack:
user → 0x101

Heap:
0x101 → {name:"Vishal", age:22}
Why Reference Storage Is Important

Objects can be:

large
nested
dynamically resized

Copying entire object every time would be slow.

References improve performance.

Primitive vs Reference Behavior
Primitive Copy
let a = 10;
let b = a;

b = 20;

Result:

a = 10
b = 20

Separate copies created.

Reference Copy
let obj1 = { name: "Vishal" };

let obj2 = obj1;

obj2.name = "Rahul";

Now both objects change.

Why?

Because both variables point to same heap address.

Heap Characteristics
Feature Reason
Dynamic size Flexible storage
Slower than stack Complex allocation
Reference-based Efficient large data handling
Supports objects Dynamic structures
Heap vs Stack
Stack Heap
Fast Slower
Fixed size Dynamic
Primitive values Objects/arrays
LIFO structure Random allocation
Auto cleanup Garbage collected
Small memory Large memory
Garbage Collection

JavaScript automatically removes unused heap memory.

This process is called:

Garbage Collection
Why Garbage Collection Needed

Without cleanup:

memory keeps increasing
browser slows down
crashes happen
Reachability Concept

JS engine checks:

Can object still be accessed?

If NO:

Object becomes garbage

and memory removed.

Example
let user = {
name: "Vishal"
};

user = null;

Old object now unreachable.

Garbage collector can remove it.

Mark and Sweep Algorithm

Modern JS engines mostly use:

Mark and Sweep
Step 1 — Mark

Engine starts from root objects:

global variables
active functions

Marks reachable objects.

Step 2 — Sweep

Unreachable objects removed from heap.

Memory freed.

Memory Leak

Memory leak happens when:

Unused memory still remains referenced

So garbage collector cannot remove it.

Example of Leak
let arr = [];

setInterval(() => {
arr.push(new Array(1000000));
}, 1000);

Memory keeps increasing.

Why Memory Leaks Matter in MERN

Leaks can:

crash Node.js servers
slow React apps
increase RAM usage
reduce performance
Closures and Memory

Closures preserve outer variables in memory.

Example:

function outer() {
let count = 0;

return function inner() {
count++;
};
}

count stays alive because inner function references it.

V8 Engine Memory Management

V8 manages memory internally.

Used in:

Chrome
Node.js

V8 divides heap into regions:

New Space
Old Space
Why Two Heap Regions?

Most objects die quickly.

Example:

temporary variables
short-lived objects

Optimization improves performance.

New Space

Stores short-lived objects.

Fast garbage collection.

Old Space

Stores long-lived objects.

Example:

app state
cached data
Shallow Copy vs Deep Copy

Memory behavior important here.

Shallow Copy

Copies reference.

Example:

let a = {name:"V"};
let b = a;

Both share same heap object.

Deep Copy

Creates completely new object in memory.

Example:

structuredClone(obj)
Why JS Uses Heap + Stack Together

Because combining both gives:

Benefit Explanation
Speed Stack efficient
Flexibility Heap dynamic
Safety Automatic cleanup
Performance Reference optimization
How Memory Works in MERN Stack
React
component state → heap
function calls → stack
Express/Node.js
request objects → heap
middleware execution → stack
MongoDB Data

API responses stored in heap as objects/arrays.

Common Beginner Mistakes
Mistake Problem
Infinite recursion Stack overflow
Large unused arrays Memory leak
Global variables Long memory retention
Improper event listeners Heap growth
Best Practices
Prefer Local Variables

They clean automatically after function ends.

Remove Unused References

Example:

obj = null;
Avoid Massive Global Objects

Global references live long.

Be Careful with Closures

Closures can unintentionally keep memory alive.

Final Understanding
Stack

Used for:

primitive data
function execution
fast temporary memory

Works using:

LIFO
Heap

Used for:

objects
arrays
dynamic data

Managed using:

Garbage Collection
Core Idea

JavaScript memory management exists because programs constantly create and remove data.

The engine combines:

Stack → speed
Heap → flexibility
Garbage Collection → automatic cleanup

to make web development safer and easier compared to low-level languages like C and C++.



