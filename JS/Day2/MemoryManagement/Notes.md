Memory Management in JS

How JavaScript stores, uses, allocates, and removes data from computer memory.

JavaScript introduced Automatic Garbage Collection meaning JavaScript engine manages memory automatically

e.g: let age = 22;

JS engine(A JavaScript (JS) engine is a specialized computer program that reads, translates, and executes JavaScript code. Its primary job is to take human-readable JavaScript and convert it into low-level machine code that a computer's processor can understand):

allocates memory
stores value
tracks reference
later removes unused memory

How JS engine Works ?
Modern JS engines use a process called Just-In-Time (JIT) compilation to balance speed and efficiency. The typical workflow involves:

Parsing: The engine reads the source code and turns it into a data structure called an Abstract Syntax Tree (AST).

Interpretation: An interpreter (like V8's "Ignition") converts the AST into bytecode and begins executing it immediately.

Optimization: While the code runs, a compiler (like V8's "TurboFan") identifies frequently used sections of code ("hot" code) and compiles them into highly optimized machine code for faster performance.

Memory Management: The engine includes a Garbage Collector that automatically finds and removes data that is no longer being used to free up memory.

Engine vs. Runtime
It is important to distinguish between the two:

JS Engine: The low-level component that strictly handles parsing and execution (e.g., V8).

JS Runtime: The larger environment that contains the engine plus extra tools like Web APIs (DOM, timers), the event loop, and callback queues.

| Memory Type  | Purpose                |
| ------------ | ---------------------- |
| Stack Memory | Primitive/static data  |
| Heap Memory  | Dynamic/reference data |

Stack is Fast, fixed-size, organized memory structure
Heap is Slow, dynamic-size, unorganized memory structure

Primitive Values stored in stack
because primitive values are: small
fixed-size
predictable

Stack Characteristics

| Feature           | Reason            |
| ----------------- | ----------------- |
| Very fast         | Continuous memory |
| Fixed size        | Easier management |
| Automatic cleanup | Function ends     |
| Ordered           | LIFO structure    |


Heap is Large unstructured dynamic memory area
Objects are:

dynamic
variable-sized
unpredictable

Stack cannot efficiently store them.

Actual object Stored in Heap but Variable Stores memory reference in Stack

Stack:
user → 0x101

Heap:
0x101 → {name:"Vishal", age:22}

Heap Characteristic:

| Feature           | Reason                        |
| ----------------- | ----------------------------- |
| Dynamic size      | Flexible storage              |
| Slower than stack | Complex allocation            |
| Reference-based   | Efficient large data handling |
| Supports objects  | Dynamic structures            |


Heap Vs Stack

| Stack            | Heap              |
| ---------------- | ----------------- |
| Fast             | Slower            |
| Fixed size       | Dynamic           |
| Primitive values | Objects/arrays    |
| LIFO structure   | Random allocation |
| Auto cleanup     | Garbage collected |
| Small memory     | Large memory      |

JavaScript automatically removes unused heap memory called Garbage Collection

Reachability Concept 

JS engine checks (Can object still be accessed? If NO) {
  Object becomes garbage and memory removed  
}

Mark and Sweep Algorithm
Modern JS engines mostly use Mark and Sweep Algorithm 

1. Mark Phase: The garbage collector starts from root objects (like global variables) and marks all reachable objects as "in use."

2. Sweep Phase: The garbage collector then goes through the heap and removes any objects that were not marked as "in use," freeing up memory.

Memory Leak happen when unused memory still remain referenced and garbage collector cannot remove it.

Example of Memory Leak:

let arr = [];

setInterval(() => {
  arr.push(new Array(1000000));
}, 1000); 

Closures and Memory
Closures preserve outer variables in memory.

Simple rule: "A variable lives in memory as long as something is referencing it"

Simple rule: order of lines matters — whatever is written first runs first.

V8 Engine Memory Management manages memory internally.
V8 divides heap into regions:

New Space : Stores short-lived objects and Fast garbage collection
Old Space : Stores long-lived objects 

Shallow Copy vs Deep Copy
Shallow Copy

Copies reference

Deep Copy

Creates completely new object in memory.