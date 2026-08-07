### Array ###
* `slice` doesn't change original array
* `splice` change original array

### Object ###
* `structuredClone` used for deep copy
* When assigning an object, nested objects are copied by reference (shallow copy),
* so both variables share the same nested object. To create independent nested
* objects, use a deep copy.

### Advanced Loops ###
* For in loop :  we can iterate over key in an object ( user )
* For in loop with Array isn't recommended.
* For in loop always used with objects only 

### Call Back function Filter map ###

* For Each expect a call back function
* For each will not return anything
* Filter/Map return (true or false) true value accept else reject 
* In `Map` we can modify values too

### Reduce sets and Maps ###
* Reduce create an result and result will be in any from like string, object and array

* const result = arr.reduce((callback_function, intialization)) 
* const result = arr.reduce(((_, _)=>{}, intialization))
* const result = arr.reduce(((accumulator(acc), currrent_value(curr))=>{
  e.g.acc = acc+curr // will go into ac cumulator
return a will also goes into accumulator
accumulator will collect produced result
 }, intialization))

* const result = arr.reduce(((_, _, index, array)=>{}, intialization))

### Create Element in DOM ###

* `appendChild` use to add an a element and statement
* `append` use to add multiple element and statements

* ``createTextNode``  TextNode (Text without any tag) space and next line came within textnode

* `createAttribute` use to which attribute we want to create and add
* `setAttributeNode` use to attribute attached to element

* `getAttribute` use to get that attribute access
* `setAttribute` use to set an attribute/ Update
* `removeAttribute` use to remove any attribute

* `prepend` use to attach on top/ front
* `append` use to attach on last/ back

* `replaceChild(newNode, oldNode)` use to replace element
* `insertAdjacentElement` use to create a element before/after end, before/after begin 

* `remove()` use to remove element


### From in JS ###

* `event.target` we get element.
* `event.target.id` we get element id
* `event.target.value` 
 to capture user input from HTML form elements (like text boxes, dropdowns, and radio buttons) 
* `input` - one by one we get access
* `change` - we get when we change the field
* `focus` - doesn't follow bubbling
* `focusin` - does follow bubbling and print value when we change focus
* `focusout/ blur` - doesn't follow bubbling & print value when we change focus out
* `Submit` - form Submitted
* `Reset` - form Reset
* `event.preventDefault();` it prevent and didn't refresh



### TS ###
 Definitions
- Compile time: TypeScript checks types before running the code.
- Run time: The code is actually executed.
JIT (Just-In-Time): The JavaScript engine (V8) compiles JavaScript while it is running.

In one line:

- TypeScript = Compile time + Runtime
- JavaScript = Runtime + JIT

| Feature             | JavaScript (JS)    | TypeScript (TS)                   |
| ------------------- | ------------------ | --------------------------------- |
| Type checking       | Runtime            | Compile time                      |
| Compilation         | JIT (Just-In-Time) | Transpiles to JS before execution |
| Compile-time errors | ❌ No               | ✅ Yes                             |
| Runtime errors      | ✅ Yes              | ✅ Yes                             |
| Static typing       | ❌ No               | ✅ Yes                             |
| JIT compilation     | ✅ Yes (V8 engine)  | ✅ After conversion to JS          |


### Interface ###
 It is used to define the structure (shape) of an object
 - The actual use of an interface in TypeScript is to define a contract

 | Property type | Syntax                | Meaning                                |
| ------------- | --------------------- | -------------------------------------- |
| Required      | `name: string`        | Must be provided                       |
| Optional      | `age?: number`        | Can be omitted                         |
| Readonly      | `readonly id: number` | Cannot be changed after initialization |



### Array of Object ###



