### Array

- `slice` doesn't change original array
- `splice` change original array

### Object

- `structuredClone` used for deep copy
- When assigning an object, nested objects are copied by reference (shallow copy),
- so both variables share the same nested object. To create independent nested
- objects, use a deep copy.

| Method                            | Copy type                     |
| --------------------------------- | ----------------------------- |
| `Object.assign({}, obj)`          | 🟡 shallow                    |
| `{ ...obj }`                      | 🟡 shallow                    |
| `structuredClone(obj)`            | 🟢 Deep                       |
| `JSON.parse(JSON.stringify(obj))` | 🟢 Deep-ish, with limitations |

### Simple rule to remember

- Primitive → value is copied
- Object/Array → reference is copied

### Advanced Loops

- For in loop : we can iterate over key in an object ( user )
- For in loop with Array isn't recommended.
- For in loop always used with objects only

### Call Back function Filter map

- For Each expect a call back function
- For each will not return anything
- Filter/Map return (true or false) true value accept else reject
- In `Map` we can modify values too

### Reduce sets and Maps

- Reduce create an result and result will be in any from like string, object and array

- const result = arr.reduce((callback_function, intialization))
- const result = arr.reduce(((_, _)=>{}, intialization))
- const result = arr.reduce(((accumulator(acc), currrent_value(curr))=>{
  e.g.acc = acc+curr // will go into ac cumulator
  return a will also goes into accumulator
  accumulator will collect produced result
  }, intialization))

- const result = arr.reduce(((_, _, index, array)=>{}, intialization))

### Create Element in DOM

- `appendChild` use to add an a element and statement
- `append` use to add multiple element and statements

- `createTextNode` TextNode (Text without any tag) space and next line came within textnode

- `createAttribute` use to which attribute we want to create and add
- `setAttributeNode` use to attribute attached to element

- `getAttribute` use to get that attribute access
- `setAttribute` use to set an attribute/ Update
- `removeAttribute` use to remove any attribute

- `prepend` use to attach on top/ front
- `append` use to attach on last/ back

- `replaceChild(newNode, oldNode)` use to replace element
- `insertAdjacentElement` use to create a element before/after end, before/after begin

- `remove()` use to remove element

### From in JS

- `event.target` we get element.
- `event.target.id` we get element id
- `event.target.value`
  to capture user input from HTML form elements (like text boxes, dropdowns, and radio buttons)
- `input` - one by one we get access
- `change` - we get when we change the field
- `focus` - doesn't follow bubbling
- `focusin` - does follow bubbling and print value when we change focus
- `focusout/ blur` - doesn't follow bubbling & print value when we change focus out
- `Submit` - form Submitted
- `Reset` - form Reset
- `event.preventDefault();` it prevent and didn't refresh

### TS

Definitions

- Compile time: TypeScript checks types before running the code.
- Run time: The code is actually executed.
  JIT (Just-In-Time): The JavaScript engine (V8) compiles JavaScript while it is running.

### Install TypeScript

- node -v
- npm -v
- npm install -g typescript
- tsc -v

In one line:

- TypeScript = Compile time + Runtime
- JavaScript = Runtime + JIT

| Feature             | JavaScript (JS)    | TypeScript (TS)                   |
| ------------------- | ------------------ | --------------------------------- |
| Type checking       | Runtime            | Compile time                      |
| Compilation         | JIT (Just-In-Time) | Transpiles to JS before execution |
| Compile-time errors | ❌ No              | ✅ Yes                            |
| Runtime errors      | ✅ Yes             | ✅ Yes                            |
| Static typing       | ❌ No              | ✅ Yes                            |
| JIT compilation     | ✅ Yes (V8 engine) | ✅ After conversion to JS         |

### Interface

It is used to define the structure (shape) of an object

- The actual use of an interface in TypeScript is to define a contract

| Property type | Syntax                | Meaning                                |
| ------------- | --------------------- | -------------------------------------- |
| Required      | `name: string`        | Must be provided                       |
| Optional      | `age?: number`        | Can be omitted                         |
| Readonly      | `readonly id: number` | Cannot be changed after initialization |

### Array of Object

- After React we will continue this

### ReactJs

React is a JavaScript library used to build user interfaces (UI) for websites and web applications. It lets developers create reusable components like buttons, forms, and cards.

- React === Object
- ReactDom === Object

| React                   | ReactDOM                          |
| ----------------------- | --------------------------------- |
| Creates components      | Renders components to the browser |
| Manages state and hooks | Updates the real DOM              |
| Platform-independent    | Web-specific                      |

- ReactDOM.render(element, document.getElementById("root")) // Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

- The React root container is the DOM element where React renders the application. React uses a virtual DOM to efficiently update the UI and improve performance. JavaScript is single-threaded, so React runs on a single thread.

### Bundler in React

A bundler is a tool that combines all your React files (JavaScript, CSS, images, TypeScript, etc.) into a few optimized files that the browser can understand.

`Many files → Bundler → One optimized bundle`

-npm init
-npm install parcel

Parcel is a zero-configuration bundler that combines and optimizes JavaScript, CSS, images, and other assets to build web applications.

- version Major.Minor.Patches ^ (Minor and Patches) and ~ mean Patches
- npm install react
- npm install react-dom
- npx parcel index.html and npx parcel build index.html

`dist` stands for distribution and `dist` folder contains the optimized production files that you can deploy to a server.

1. npm init -y
2. npm install -D parcel
3. npm install react react-dom
4. npx parcel index.html (development mode)
5. npx parcel build index.html (production mode)

The `dist` folder contains the production-ready and optimized files generated by Parcel after running npx parcel build index.html. These files are deployed to the server.

- if we want to deploy project so we should upload only dist folder not entire project folder

### JSX: JavaScript XM

JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML-like code inside JavaScript, making React code more readable and easier to write.
`Babel `                   `React  `                ` Render`
JSX => React.createElement() => react element(JSObject) => HTML element
Reactroot.render(heading1);

- {mean JS expression here}
- JSX : JS Expressions (mean produce a result) {obj.name}
- JSX: We'll not write statement in JSX {let x = 2}, {Obj (Object)}
- Function name starting letter should be capital letter (User Defined tag), It's JSX rules only no JS 
### React Component

A React component is a reusable JavaScript function that returns UI elements and helps us build applications in small, independent pieces

- Class Based Component
- Functional Component

### Vite

- npm create vite@latest
- npm install
- npm run dev

# React Short Notes

## 1. Hook

A **Hook** is a special function provided by React that lets functional components use React features such as **state** and **side effects**.

Hooks start with the word `use`.

### Common Hooks

* `useState()` → manages state
* `useEffect()` → handles side effects
* `useContext()` → accesses context
* `useRef()` → stores a reference/value without causing a re-render

Example:

```jsx
const [count, setCount] = useState(0);
```

---

## 2. useState

`useState()` is a React Hook used to **store and manage data that can change** inside a component.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [color, setColor] = useState("black");
```

Here:

* `color` → current state value
* `setColor` → function used to update the state
* `"black"` → initial value

When we call:

```jsx
setColor("red");
```

React updates the state and **re-renders the component**.

---

## 3. Render

**Render** means React runs the component and creates the UI based on the current state and props.

For example:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

When `<App />` is rendered:

```jsx
root.render(<App />);
```

React runs `App()` and displays:

```text
Hello
```

### Simple meaning:

**Render = Creating/displaying the UI.**

---

## 4. Re-render

A **re-render** happens when React runs the component again because something that affects the UI has changed.

Common reasons:

* State changes
* Props change
* Context changes

Example:

```jsx
const [color, setColor] = useState("black");

<p onClick={() => setColor("red")}>RED</p>
```

Initially:

```text
color = "black"
```

When you click RED:

```text
setColor("red")
       ↓
state changes
       ↓
React re-renders App
       ↓
color is now "red"
       ↓
UI updates
```

### Important

A re-render **does not mean the entire webpage is recreated from scratch**.

React compares the new result with the previous one and updates the necessary parts of the DOM.

---

## Quick Revision

| Term          | Meaning                                                                |
| ------------- | ---------------------------------------------------------------------- |
| **Hook**      | Special React function that gives functional components React features |
| **useState**  | Hook used to store and update changing data                            |
| **Render**    | React runs a component to create the UI                                |
| **Re-render** | React runs the component again after relevant data changes             |

### Remember this flow

```text
useState
   ↓
setState()
   ↓
State changes
   ↓
Re-render
   ↓
UI updates
```
### React bailout:
 React skips re-rendering a component when its state or props haven’t meaningfully changed.

 Here are **short notes** based on your code:

### React Bailout

* **Bailout** means React **skips re-rendering** when the state/props value has not changed.
* Example: `setColor("red")` when `color` is already `"red"` → React can **bail out** of the update.
* It helps improve **performance** by avoiding unnecessary renders.

* `useEffect` is a React Hook used to perform **side effects** after rendering.
* Syntax:

  ```js
  useEffect(() => {
      // side effect
  }, [dependency]);
  ```
* In your code:

  ```js
  useEffect(() => {
      document.body.style.backgroundColor = color;
  }, [color]);
  ```
* The effect runs **after the component renders** and whenever `color` changes.
* `[color]` is the **dependency array**.
* Here, `useEffect` is used because changing `document.body` is a **DOM side effect**.


### `useEffect`

* `useEffect` is used to perform **side effects** in a React component.
* Side effects include DOM manipulation, API calls, timers, subscriptions, etc.
* It runs **after the component renders**.
* The second argument is a **dependency array**.
* If a dependency changes, the effect runs again.

**Syntax:**

```jsx
useEffect(() => {
  // side effect
}, [dependency]);
```

**Your example:**
In `Colorfull.jsx`, `useEffect` changes the document background whenever `color` changes. 

```jsx
useEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);
```

👉 **Remember:** `useEffect` = **"Do something after rendering."**

---

### `useMemo`

* `useMemo` is used to **memoize (remember) a calculated value**.
* It helps avoid performing an **expensive calculation on every render**.
* The calculation runs again only when its dependencies change.

**Syntax:**

```jsx
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

👉 **Remember:** `useMemo` = **"Remember a calculated value."**

### Quick Difference

| `useEffect`                           | `useMemo`                       |
| ------------------------------------- | ------------------------------- |
| Performs side effects                 | Memorizes a value               |
| Runs after render                     | Calculates during render        |
| Used for API calls, DOM, timers, etc. | Used for expensive calculations |
| Doesn't return the calculated value   | Returns a memoized value        |

**Easy trick:**
**Effect → Action**
**Memo → Value**
# Lecture wise Notes
# 9.Password generator in React and Closure

### 1. Project Overview

This project is a simple **Password Generator built using React**. It allows users to generate random passwords and customize them by:

* Changing password length
* Including special characters
* Including numbers

The main `App` component renders the `Password` component. 

---

### 2. React Hooks Used

### `useState`

`useState` is used to manage the application's dynamic data.

```jsx
const [password, setPassword] = useState("");
const [length, setLength] = useState(8);
const [characterchange, setCharacterchange] = useState(false);
const [numberchange, setNumberchange] = useState(false);
```

### State variables

| State             | Purpose                       |
| ----------------- | ----------------------------- |
| `password`        | Stores the generated password |
| `length`          | Stores password length        |
| `characterchange` | Controls special characters   |
| `numberchange`    | Controls numbers              |

The project initializes the password length at 8 and keeps special characters and numbers disabled by default. 

---

### 3. Password Generation Logic

The `generate()` function is responsible for creating a random password.

```jsx
function generate() {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (characterchange) {
    str += "~`!@#$%^&*()-_=+[{]}";
  }

  if (numberchange) {
    str += "0123456789";
  }

  let final = "";

  for (let i = 0; i < length; i++) {
    final += str[Math.floor(Math.random() * str.length)];
  }

  setPassword(final);
}
```

### How it works

1. A string containing uppercase and lowercase letters is created.
2. If special characters are enabled, they are added to the character pool.
3. If numbers are enabled, digits are added.
4. A loop runs according to the selected password length.
5. Random characters are selected using:

```jsx
Math.random()
```

### 6. The generated password is stored using:

```jsx
setPassword(final)
```

The source code builds the password character pool conditionally and generates random characters based on the selected length. 

---

### 4. `useEffect` Hook

```jsx
useEffect(() => {
  generate();
}, [length, numberchange, characterchange]);
```

The password automatically regenerates whenever:

* Password length changes
* Number option changes
* Special character option changes

### Dependency Array

```jsx
[length, numberchange, characterchange]
```

This means React runs the `generate()` function whenever any of these state values change. 

---

### 5. Password Length Slider

```jsx
<input
  type="range"
  min={8}
  max={50}
  value={length}
  onChange={(e) => setLength(e.target.value)}
/>
```

### Features

* Minimum length: `8`
* Maximum length: `50`
* User can adjust password length using a slider.

The selected length is displayed using:

```jsx
<label>Length is {length}</label>
```



---

### 6. Special Character Option

```jsx
<input
  type="checkbox"
  defaultChecked={characterchange}
  onChange={() => setCharacterchange(!characterchange)}
/>
```

When the checkbox is selected:

```jsx
setCharacterchange(!characterchange)
```

The boolean value changes between:

* `true` → Special characters included
* `false` → Special characters excluded



---

### 7. Number Option

```jsx
<input
  type="checkbox"
  defaultChecked={numberchange}
  onChange={() => setNumberchange(!numberchange)}
/>
```

When enabled, the following numbers are added to the password character pool:

```jsx
0123456789
```



---

### 8. Component Structure

The application structure is:

```text
App
 │
 └── Password Component
       │
       ├── Generated Password
       ├── Length Slider
       ├── Special Character Checkbox
       └── Number Checkbox
```

The `App` component imports and displays the `Password` component. 

---

### 9. Important React Concepts Learned

Through this project, you learn:

* React Functional Components
* `useState` Hook
* `useEffect` Hook
* Event Handling
* Controlled Inputs
* Conditional Logic
* Random Password Generation
* JSX
* Component Import and Export

---

### 10. Project Working Flow

```text
Application Starts
       ↓
Default Password Generated
       ↓
User Changes Length / Characters / Numbers
       ↓
State Updates
       ↓
useEffect Detects Changes
       ↓
generate() Function Runs
       ↓
New Password Displayed
```

---

### 11. Short Interview Explanation

**Question: How does your React Password Generator work?**

> The Password Generator is built using React functional components and hooks. I used `useState` to manage the password, password length, special character option, and number option. A `generate()` function creates a random password based on user preferences. I used `useEffect` so that whenever the user changes the password length or toggles characters and numbers, a new password is automatically generated.



## Closure Example

### Code Overview

```javascript
let b = 10;

function greet() {
    let a = 20;
    let b = 30;

    function meet() {
        console.log(a);
        console.log(b);
    }

    return meet;
}

const num = greet();
num();
```



---

### 1. Global Scope

```javascript
let b = 10;
```

This variable is declared in the global scope.

```text
Global Scope
└── b = 10
```

However, this `b` is not used inside the `meet()` function because another `b` exists in the `greet()` function.

---

### 2. Parent Function: `greet()`

```javascript
function greet() {
    let a = 20;
    let b = 30;
}
```

Inside `greet()`:

* `a = 20`
* `b = 30`

These variables belong to the local scope of `greet()`. 

---

### 3. Nested Function: `meet()`

```javascript
function meet() {
    console.log(a);
    console.log(b);
}
```

The `meet()` function accesses:

```javascript
a
b
```

These variables are not declared inside `meet()`, so JavaScript looks in its parent scope (`greet()`). 

---

### 4. Lexical Scope

JavaScript follows **Lexical Scope**.

The scope structure is:

```text
Global Scope
│
├── b = 10
│
└── greet()
     │
     ├── a = 20
     ├── b = 30
     │
     └── meet()
          │
          ├── console.log(a)
          └── console.log(b)
```

When `meet()` needs `a` and `b`:

1. JavaScript checks inside `meet()`.
2. Variables are not found there.
3. JavaScript checks the parent function `greet()`.
4. It finds:

   * `a = 20`
   * `b = 30`

---

### 5. Returning a Function

```javascript
return meet;
```

The `greet()` function returns the `meet()` function itself.

Important:

```javascript
return meet;
```

does not execute the function.

It only returns the function reference.

---

### 6. Function Execution

```javascript
const num = greet();
```

Here:

1. `greet()` executes.
2. Variables `a` and local `b` are created.
3. The `meet` function is returned.
4. The returned function is stored in `num`.

Then:

```javascript
num();
```

This executes the `meet()` function. 

---

### 7. What is a Closure?

Even after `greet()` finishes execution, the returned `meet()` function still remembers the variables from its parent function.

This behavior is called a **Closure**.

### Simple Definition

> A closure is created when a function remembers and accesses variables from its outer scope even after the outer function has finished executing.

---

### 8. Output

```text
20
30
```

### Why?

```javascript
console.log(a); // 20
console.log(b); // 30
```

The `meet()` function remembers the variables from `greet()`.

The global:

```javascript
let b = 10;
```

is shadowed by:

```javascript
let b = 30;
```

inside `greet()`.

---

### 9. Important Concept: Variable Shadowing

There are two variables named `b`.

```javascript
let b = 10; // Global

function greet() {
    let b = 30; // Local
}
```

The local variable takes priority inside `greet()` and its nested functions.

This is called **Variable Shadowing**.

```text
Global b = 10
       ↓
Local b = 30
       ↓
meet() uses b = 30
```

---

### 10. Interview Answer

### What is Closure in JavaScript?

> A closure is a feature in JavaScript where an inner function has access to variables of its outer function even after the outer function has completed execution.

### Example from your code

```javascript
function greet() {
    let a = 20;

    function meet() {
        console.log(a);
    }

    return meet;
}

const num = greet();
num();
```

Even though `greet()` has finished, `meet()` still remembers `a`.

---

## Key Concepts Learned

* Global Scope
* Local Scope
* Lexical Scope
* Nested Functions
* Closure
* Variable Shadowing
* Returning Functions
* Function References

# 10.React GitHub Profile Viewer

### 1. Project Architecture

```text
                    ┌─────────────────────┐
                    │      main.jsx       │
                    │ GithubProfile App   │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
          ┌──────▼──────┐             ┌──────▼──────┐
          │ Header.jsx  │             │  Body.jsx   │
          │             │             │             │
          │ App Title   │             │ API Logic   │
          └─────────────┘             └──────┬──────┘
                                             │
                                  ┌──────────┼──────────┐
                                  │          │          │
                               useState    useEffect   fetch()
                                  │          │          │
                                  └──────────┼──────────┘
                                             │
                                    GitHub API Response
                                             │
                                             ▼
                                      Profile Cards
```

---

### 2. File Conversion

You asked to use `.jsx` instead of `.js`.

Recommended structure:

```text
src/
│
├── main.jsx
│
└── Component/
    ├── Header.jsx
    └── Body.jsx
```

Rename:

```text
main.js   → main.jsx
Body.js   → Body.jsx
Header.js → Header.jsx
```

Then update imports:

```jsx
import Header from "./Component/Header";
import Body from "./Component/Body";
```

React/Vite can usually resolve `.jsx` automatically.

---

### 3. Component Relationship

### Parent → Child Flow

```text
GithubProfile
      │
      │ renders
      ▼
 ┌─────────────┐
 │   Header    │
 └─────────────┘

 ┌─────────────┐
 │    Body     │
 └─────────────┘
```

Your main component acts as the **container**.

Concept:

```jsx
function GithubProfile() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
```

### Learning Point

| Concept           | Meaning                                     |
| ----------------- | ------------------------------------------- |
| Component         | Reusable UI function                        |
| Parent Component  | Component containing other components       |
| Child Component   | Component rendered inside another component |
| Fragment `<> </>` | Groups elements without extra HTML          |

Your app structure is correctly componentized. 

---

### 4. Header Component

Flow:

```text
Header Component
       │
       ▼
Returns JSX
       │
       ▼
<div id="heading">
       │
       ▼
<h1>Github Profile Viewer</h1>
```

Current purpose:

> Display the application heading.

This is a simple **presentational component**. 

---

### 5. Body Component — The Main Brain 🧠

The Body component handles:

```text
USER INPUT
    │
    ▼
React State
    │
    ▼
API Request
    │
    ▼
GitHub API
    │
    ▼
JSON Response
    │
    ▼
Update State
    │
    ▼
Profile Cards Displayed
```

This is where most React concepts are being used. 

---

### 6. useState Visual Explanation

You have:

```jsx
const [Profile, setProfile] = useState([]);
```

Think of it like this:

```text
          useState([])
              │
      ┌───────┴────────┐
      │                │
   Profile         setProfile
      │                │
 Current Data      Update Data
```

### Example

Initially:

```text
Profile = []
```

After API:

```text
Profile = [
  User 1,
  User 2,
  User 3,
  ...
]
```

Then:

```jsx
setProfile(data);
```

React automatically updates the UI.

### Important React Flow

```text
State Changes
     │
     ▼
React Detects Change
     │
     ▼
Component Re-renders
     │
     ▼
New UI Appears
```

---

### 7. Second State

You also have:

```jsx
const [numberofProfile, setnumberofProfile] = useState("");
```

Purpose:

```text
Input Field
     │
     │ User types 5
     ▼
numberofProfile = "5"
     │
     ▼
Click Button
     │
     ▼
Number(numberofProfile)
     │
     ▼
generateProfile(5)
```

Visual:

```text
┌──────────────────┐
│ Input: "5"       │
└────────┬─────────┘
         │
         ▼
 setnumberofProfile("5")
         │
         ▼
 React State Updated
         │
         ▼
 Button Click
         │
         ▼
 generateProfile(5)
```

---

### 8. API Function Flow

Your important function:

```jsx
async function generateProfile(count)
```

Complete learning flow:

```text
generateProfile(count)
        │
        ▼
Generate Random Number
        │
        ▼
Build GitHub API URL
        │
        ▼
fetch(URL)
        │
        ▼
Wait for Response
        │
        ▼
response.json()
        │
        ▼
Receive User Data
        │
        ▼
setProfile(data)
        │
        ▼
React Re-renders UI
```

From your code, the API request uses GitHub's users endpoint with `since` and `per_page` parameters. 

---

### 9. Understanding async / await

Your code:

```jsx
const response = await fetch(url);
const data = await response.json();
```

Think of `await` as:

> "Wait here until this operation finishes."

### Visual

```text
JavaScript
    │
    ▼
fetch API
    │
    │ ⏳ Waiting
    │
    ▼
Response arrives
    │
    ▼
Convert to JSON
    │
    │ ⏳ Waiting
    │
    ▼
Data Ready
```

---

### 10. useEffect Flow

Your code:

```jsx
useEffect(() => {
  generateProfile(10);
}, []);
```

The empty dependency array:

```jsx
[]
```

means:

```text
Component Loads
      │
      ▼
useEffect Runs
      │
      ▼
generateProfile(10)
      │
      ▼
10 GitHub Profiles Loaded
```

### Dependency Cheat Sheet

```text
useEffect(fn, [])

Runs once when component mounts.


useEffect(fn, [name])

Runs when name changes.


useEffect(fn)

Runs after every render.
```

Your implementation loads 10 profiles automatically when the Body component first appears. 

---

### 11. Controlled Input

Your input:

```jsx
<input
  value={numberofProfile}
  onChange={(e) => setnumberofProfile(e.target.value)}
/>
```

Flow chart:

```text
User Types
     │
     ▼
onChange Event
     │
     ▼
e.target.value
     │
     ▼
setnumberofProfile()
     │
     ▼
State Updated
     │
     ▼
Input Displays New Value
```

This is called a:

### Controlled Component

Because React controls the input value through state.



---

### 12. Button Event Flow

```jsx
<button
  onClick={() => generateProfile(Number(numberofProfile))}
>
```

Visual:

```text
       USER
         │
         ▼
   Click Button
         │
         ▼
     onClick
         │
         ▼
Convert String → Number
         │
         ▼
generateProfile(number)
         │
         ▼
Fetch New Profiles
         │
         ▼
Update UI
```

---

### 13. Array `.map()` Visualization

Your code:

```jsx
Profile.map((value) => {
   return (...)
})
```

Suppose API returns:

```text
[
 User A,
 User B,
 User C
]
```

React map does this:

```text
User A ───► Card A
User B ───► Card B
User C ───► Card C
```

Final UI:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Avatar   │ │ Avatar   │ │ Avatar   │
│ User A   │ │ User B   │ │ User C   │
│ Profile  │ │ Profile  │ │ Profile  │
└──────────┘ └──────────┘ └──────────┘
```

This is called:

### Dynamic Rendering

React creates UI based on data.



---

### 14. Why `key={value.id}`?

Your code:

```jsx
<div key={value.id}>
```

React needs a unique identifier.

Without key:

```text
React: Which item changed? 🤔
```

With key:

```text
User ID = 1 → This card
User ID = 2 → This card
User ID = 3 → This card
```

Benefits:

* Faster UI updates
* Better React reconciliation
* Avoids React warnings

---

### 15. Complete Application Data Flow

This is the most important flowchart for revision:

```text
                  APP START
                      │
                      ▼
             GithubProfile Component
                      │
             ┌────────┴────────┐
             ▼                 ▼
          Header              Body
             │                 │
             ▼                 ▼
        App Title         useEffect()
                                │
                                ▼
                       generateProfile(10)
                                │
                                ▼
                           GitHub API
                                │
                                ▼
                         Receive JSON Data
                                │
                                ▼
                        setProfile(data)
                                │
                                ▼
                           React State
                                │
                                ▼
                          Profile.map()
                                │
                                ▼
                         Render Cards
```

---

### 16. User Interaction Flow

```text
┌─────────────────────┐
│ User enters number  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ React State Updates │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ User clicks Search  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ generateProfile()   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Fetch GitHub API    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Update Profile State│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ New Cards Display   │
└─────────────────────┘
```

---

### 17. Concepts Used in Your Project

### React Knowledge Map

```text
                         REACT
                           │
          ┌────────────────┼────────────────┐
          │                │                │
     Components          Hooks             Events
          │                │                │
      ┌───┴───┐       ┌────┴────┐      onClick
      │       │       │         │      onChange
    Header   Body   useState  useEffect
                        │
                        ▼
                      State
                        │
                        ▼
                    Re-render
```

---

### 18. Important Terms Flashcards 🧠

### Component

```text
Reusable piece of UI
```

Example:

```jsx
<Header />
```

---

### State

```text
Data managed by React
```

Example:

```jsx
const [Profile, setProfile] = useState([]);
```

---

### useEffect

```text
Runs side effects after rendering.
```

Example use:

* API calls
* Timers
* Event listeners

---

### API

```text
Application Programming Interface
```

Your project:

```text
React App ←→ GitHub API
```

---

### Fetch

```text
Used to request data from an API.
```

---

### map()

```text
Converts an array of data into multiple UI elements.
```

---

### Controlled Input

```text
Input controlled using React state.
```

---

### 19. Current Project Improvements

Your own comments already identify the next learning steps:

```text
Current Project
      │
      ├── Try/Catch
      │
      ├── useCallback
      │
      └── Search User by Name
```

These are excellent next steps and are explicitly noted in your Body component. 

### Recommended Learning Roadmap

```text
STEP 1 ✅
Components
     │
STEP 2 ✅
useState
     │
STEP 3 ✅
useEffect
     │
STEP 4 ✅
API Fetching
     │
STEP 5 ⏭
Error Handling (try/catch)
     │
STEP 6 ⏭
Loading State
     │
STEP 7 ⏭
Search GitHub User by Name
     │
STEP 8 ⏭
useCallback
     │
STEP 9 ⏭
Better UI + CSS
```

---

### 20. Suggested `.jsx` Version Structure

Your final files should ideally be:

```text
main.jsx
   │
   ├── imports React
   ├── imports Header.jsx
   ├── imports Body.jsx
   │
   ▼
GithubProfile
   │
   ├── <Header />
   └── <Body />


Header.jsx
   │
   ▼
Displays title


Body.jsx
   │
   ├── State
   ├── API Function
   ├── useEffect
   ├── Input
   ├── Button
   └── Profile Cards
```

---

### 🎯 One-Line Project Summary

> **This React project fetches random GitHub user profiles using the GitHub API, stores them in React state, and dynamically displays them as profile cards.**

### 🧠 Memory Formula

```text
INPUT
  ↓
STATE
  ↓
EVENT
  ↓
FUNCTION
  ↓
API
  ↓
DATA
  ↓
STATE UPDATE
  ↓
RE-RENDER
  ↓
UI
```

This is the core flow you should remember for your project.


# 11. React Hooks — `useMemo`, `useCallback`, `useRef`

## 1. `useMemo`

**Purpose:** Memoizes a **calculated value** so the calculation is not unnecessarily repeated on every render.

### Syntax

```jsx
const result = useMemo(() => calculation(), [dependencies]);
```

### Example — Fibonacci

```jsx
const Fibbonnaci = useCallback((n) => {
  if (n <= 1) return n;

  return Fibbonnaci(n - 1) + Fibbonnaci(n - 2);
}, []);

const result = useMemo(() => Fibbonnaci(number), [number]);
```

Here, `result` is recalculated when `number` changes. 

### Remember

```text
useMemo → Memoizes VALUE
```

---

### 2. `useCallback`

**Purpose:** Memoizes a **function reference** so React does not create a new function reference unnecessarily between renders.

### Syntax

```jsx
const functionName = useCallback(() => {
  // logic
}, [dependencies]);
```

### Example

```jsx
const Fibbonnaci = useCallback((n) => {
  if (n <= 1) return n;

  return Fibbonnaci(n - 1) + Fibbonnaci(n - 2);
}, []);
```

The Fibonacci function is wrapped with `useCallback`. 

### Remember

```text
useCallback → Memoizes FUNCTION
```

### Difference

| Hook          | Memoizes |
| ------------- | -------- |
| `useMemo`     | Value    |
| `useCallback` | Function |

---

###  3. `useRef`

**Purpose:** Stores a value that persists between renders **without causing a re-render when changed**.

### Syntax

```jsx
const ref = useRef(initialValue);
```

Access or modify the value using:

```jsx
ref.current
```

---

## Example 1 — Store a value

```jsx
const money = useRef(0);

money.current = money.current + 1;

console.log(money.current);
```

The uploaded example uses `money.current` to store the changing value. 

---

## Example 2 — Store `setInterval` ID

```jsx
const intervalRef = useRef(null);

intervalRef.current = setInterval(() => {
  setTime(prevTime => prevTime + 1);
}, 1000);
```

Later, the stored interval can be cleared:

```jsx
clearInterval(intervalRef.current);
intervalRef.current = null;
```

This pattern is used in the stopwatch implementation. 

---

### 4. Stopwatch — Hook Combination

```jsx
const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const intervalRef = useRef(null);
```

### Start

```jsx
intervalRef.current = setInterval(() => {
  setTime(prevTime => prevTime + 1);
}, 1000);
```

### Stop

```jsx
clearInterval(intervalRef.current);
intervalRef.current = null;
```

### Reset

```jsx
clearInterval(intervalRef.current);
intervalRef.current = null;
setTime(0);
```

The complete pattern is demonstrated in the uploaded stopwatch code. 

---

### 5. Quick Revision

```text
useState
→ Stores state
→ Changing it causes re-render

useMemo
→ Memoizes a VALUE
→ Avoids unnecessary calculation

useCallback
→ Memoizes a FUNCTION
→ Preserves function reference

useRef
→ Stores a mutable VALUE
→ Changing .current does NOT cause re-render
→ Commonly used for DOM elements, timers, intervals, etc.
```

### Most Important

```text
useMemo     → value
useCallback → function
useRef      → persistent mutable reference
```

# 12 React Router — Concise Notes

### 1. React Router
React Router is used to create **multiple pages/views in a React application without reloading the browser**.

### 2. `BrowserRouter`
Wraps the application and enables browser-based routing.

```jsx
<BrowserRouter>
  ...
</BrowserRouter>
```

### 3. `Routes`
Acts as a container for all route definitions.

```jsx
<Routes>
  ...
</Routes>
```

### 4. `Route`
Defines the relationship between a **URL path** and the **component** to render.

```jsx
<Route path="/" element={<Home />} />
<Route path="/Contact" element={<Contact />} />
```

Your application maps `/`, `/Contact`, `/Dashboard`, and `/Details` to their respective components. :chatgpt-content-reference{index="0"}

### 5. `Link`
Provides navigation between routes without a full page reload.

```jsx
<Link to="/Contact">Contact</Link>
```

The navigation links are placed inside the application's `<nav>`. :chatgpt-content-reference{index="1"}

### 6. Nested Routes
Routes can be placed inside another route to create a **parent-child route structure**.

```jsx
<Route path="/Details" element={<Details />}>
  <Route index element={<Zero />} />
  <Route path="Hello" element={<Hello />} />
  <Route path="Hi" element={<Hi />} />
</Route>
```

Here, `Hello` and `Hi` are child routes of `Details`. :chatgpt-content-reference{index="2"}

### 7. `Outlet`
`Outlet` is the **placeholder where a matched child route is rendered**.

```jsx
<Outlet />
```

The `Details` component contains the navigation and an `<Outlet>` for its nested components. :chatgpt-content-reference{index="3"}

### 8. Index Route
An index route represents the **default child route** of a parent route.

```jsx
<Route index element={<Zero />} />
```

So `/Details` displays the `Zero` component by default. :chatgpt-content-reference{index="4"}

### 9. Relative Nested Paths
Inside a parent route, child paths don't need `/`.

```jsx
<Route path="Hello" element={<Hello />} />
<Route path="Hi" element={<Hi />} />
```

They become:

```text
/Details/Hello
/Details/Hi
```

### 10. Route Structure

```text
BrowserRouter
      │
    Routes
      │
    Route
      │
 ┌────┴─────┐
Home      Details
             │
          Outlet
             │
       ┌─────┼─────┐
      Zero  Hello  Hi
```

The `Hello`, `Hi`, and `Zero` components are simple React components rendered through the routing structure. :chatgpt-content-reference{index="5"} :chatgpt-content-reference{index="6"} :chatgpt-content-reference{index="7"}

### Core Formula

**`BrowserRouter` → `Routes` → `Route` → `element`**

For nested routing:

**Parent `Route` → Child `Route` → `Outlet`**

# 13. React Router — Concise Detailed Notes

### 1. React Router

**React Router** is used to manage navigation and different URL-based views in a React application.

Instead of loading a completely new HTML page, React Router changes the displayed component based on the URL.

---

### 2. Main Routing Components

### `BrowserRouter`

Provides routing functionality to the application.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

It uses the browser's URL to determine which route should be displayed.

---

### `Routes`

Contains the application's route definitions.

```jsx
<Routes>
  ...
</Routes>
```

Each route inside `<Routes>` defines a URL and the component associated with it. :chatgpt-content-reference{index="0"}

---

### `Route`

Connects a URL path with a React component.

```jsx
<Route path="/Contact" element={<Contact />} />
```

When the URL matches `/Contact`, the `Contact` component is rendered. :chatgpt-content-reference{index="1"}

### Common Structure

```text
Route
 ├── path
 └── element
```

- **`path`** → URL pattern
- **`element`** → React component to render

---

### 3. `Link`

`Link` provides client-side navigation.

```jsx
<Link to="/Contact">Contact</Link>
```

It changes the URL and displays the corresponding route without performing a traditional full-page navigation.

Your application uses `Link` for Home, Contact, Dashboard, and Details navigation. :chatgpt-content-reference{index="2"}

---

### 4. Nested Routing

A route can contain other routes inside it.

```jsx
<Route path="/Details" element={<Details />}>
    <Route index element={<Zero />} />
    <Route path="Hello" element={<Hello />} />
    <Route path="Hi" element={<Hi />} />
</Route>
```

This creates a parent-child relationship between routes. :chatgpt-content-reference{index="3"}

### URL Structure

```text
/Details
/Details/Hello
/Details/Hi
```

Conceptually:

```text
Details
 ├── Zero
 ├── Hello
 └── Hi
```

---

### 5. `Outlet`

`Outlet` is a **placeholder for child routes**.

```jsx
<Outlet />
```

The parent component renders its common UI, while the matched child component appears inside `<Outlet />`. :chatgpt-content-reference{index="4"}

### Flow

```text
/Details/Hello
       ↓
Details component
       ↓
    <Outlet />
       ↓
Hello component
```

---

### 6. Index Route

An **index route** is the default child route of a parent route.

```jsx
<Route index element={<Zero />} />
```

Therefore, when the parent `/Details` route is accessed without another child path, `Zero` is rendered through the `Outlet`. :chatgpt-content-reference{index="5"}

---

### 7. Relative Child Routes

Child routes can use relative paths.

```jsx
<Route path="Hello" element={<Hello />} />
<Route path="Hi" element={<Hi />} />
```

Because they are inside `/Details`, the resulting URLs are:

```text
/Details/Hello
/Details/Hi
```

The child components themselves are ordinary React components. :chatgpt-content-reference{index="6"} :chatgpt-content-reference{index="7"}

---

### 8. Dynamic Routes

A **dynamic route** contains a variable URL segment.

```jsx
<Route path="/Github/:name" element={<Github />} />
```

Here:

```text
:name
```

is a **dynamic parameter**.

Examples:

```text
/Github/vishal
/Github/facebook
/Github/google
```

The same `Github` component can handle all these URLs. :chatgpt-content-reference{index="8"}

---

### 9. `useParams()`

`useParams()` retrieves dynamic values from the URL.

```jsx
const { name } = useParams();
```

For:

```text
/Github/vishal
```

the value becomes:

```js
name = "vishal"
```

The `Github` component uses `useParams()` to obtain the `name` parameter. :chatgpt-content-reference{index="9"}

---

### 10. Dynamic API Request

The dynamic parameter can be used in an API request.

```jsx
const response = await fetch(
    `https://api.github.com/users/${name}`
);
```

The URL parameter determines which GitHub user's data is requested. :chatgpt-content-reference{index="10"}

### Flow

```text
URL
 ↓
/Github/vishal
 ↓
useParams()
 ↓
name = "vishal"
 ↓
GitHub API
 ↓
User data
 ↓
React UI
```

---

### 11. `useState` with API Data

The fetched data can be stored in state.

```jsx
const [Profile, setProfile] = useState(null);
```

After receiving the API response:

```jsx
setProfile(data);
```

The component then uses the stored data for rendering. :chatgpt-content-reference{index="11"}

---

### 12. `useEffect` for API Calls

`useEffect()` can be used to execute the API request when the component loads.

```jsx
useEffect(() => {
    fetchuser();
}, []);
```

The empty dependency array means the effect runs after the component's initial render. :chatgpt-content-reference{index="12"}

---

### 13. Optional Chaining

The GitHub component uses:

```jsx
Profile?.avatar_url
Profile?.login
```

`?.` is **optional chaining**.

It safely accesses properties when `Profile` may initially be `null`.

```text
Profile = null
       ↓
Profile?.login
       ↓
undefined
```

This prevents an immediate error while the API data is being loaded. :chatgpt-content-reference{index="13"}

---

### 14. Complete Routing Structure

```text
BrowserRouter
      │
      └── Routes
           │
           ├── /
           │    └── Home
           │
           ├── /Contact
           │    └── Contact
           │
           ├── /Dashboard
           │    └── Dashboard
           │
           ├── /Details
           │    ├── index → Zero
           │    ├── Hello → Hello
           │    └── Hi → Hi
           │
           └── /Github/:name
                └── Github
                     │
                     ├── useParams()
                     ├── fetch()
                     ├── useState()
                     └── useEffect()
```

The uploaded project demonstrates the progression from **basic routes → nested routes → index routes → dynamic routes → URL parameters → API data fetching**. :chatgpt-content-reference{index="14"}

### Quick Revision

```text
BrowserRouter → Enables routing
Routes        → Holds routes
Route         → Defines URL + component
Link          → Navigation
Nested Route  → Parent-child routing
Outlet        → Displays child route
Index Route   → Default child route
:path         → Dynamic URL parameter
useParams()   → Reads URL parameter
useEffect()   → Runs side effects
useState()    → Stores component data
fetch()       → Gets API data
?.            → Safe property access
```

# 14. Redux Toolkit — Concise Detailed Notes

### 1. Redux

**Redux** is a state management library used to maintain application state in a centralized store.

```text
React Components
       ↓
     Redux
       ↓
 Central Store
       ↓
 Application State
```

It is useful when multiple components need access to the same state.

---

### 2. Redux Toolkit

**Redux Toolkit (RTK)** is the recommended way to write Redux logic.

The uploaded project uses:

```js
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
```

---

### 3. Store

The **store** contains the application's global state.

`configureStore()` creates the Redux store and connects reducers to it. :chatgpt-content-reference{index="0"}

```js
const stores = configureStore({
    reducer: {
        slice1: slice1Reducer,
    }
});
```

### Store structure

```text
Store
 └── reducer
      └── slice1
           └── state
```

---

### 4. State

State represents the current data maintained by Redux.

The example state contains multiple sections:

```js
const state = {
    slice1: {
        count: 0
    },
    slice2: {
        count: 2,
        name: "Rohit"
    },
    slice3: {
        login: true
    }
};
```

Each section can represent state managed by a different reducer/slice. :chatgpt-content-reference{index="1"}

---

### 5. Slice

A **slice** represents one logical portion of the Redux state.

`createSlice()` combines:

- Slice name
- Initial state
- Reducers
- Automatically generated actions

```js
const reactslicer = createSlice({
    name: "slice1",
    initialState: {
        count: 0
    },
    reducers: {
        ...
    }
});
```

:chatgpt-content-reference{index="2"}

---

### 6. `name`

The `name` identifies the slice.

```js
name: "slice1"
```

This name becomes part of the Redux state structure:

```text
state
 └── slice1
```

---

### 7. `initialState`

Defines the starting value of the slice.

```js
initialState: {
    count: 0
}
```

Initial state:

```text
count = 0
```

:chatgpt-content-reference{index="3"}

---

### 8. Reducers

Reducers define how the state can change.

```js
reducers: {
    Increment: (state) => {
        state.count = state.count + 1;
    },

    Decrement: (state) => {
        state.count = state.count - 1;
    },

    Reset: (state) => {
        state.count = 0;
    }
}
```

The example defines three state-changing operations: `Increment`, `Decrement`, and `Reset`. :chatgpt-content-reference{index="4"}

---

### 9. Actions

`createSlice()` automatically generates action creators from the reducer names.

```js
export const {
    Increment,
    Decrement,
    Reset
} = reactslicer.actions;
```

:chatgpt-content-reference{index="5"}

Conceptually:

```text
Increment() → Action
Decrement() → Action
Reset()     → Action
```

---

### 10. Reducer Export

The slice's reducer is exported separately.

```js
export default reactslicer.reducer;
```

This reducer is then registered in the Redux store. :chatgpt-content-reference{index="6"}

---

### 11. Connecting Reducer to Store

The reducer is imported into the store:

```js
import slice1Reducer from "./Slicer1";
```

and registered as:

```js
const stores = configureStore({
    reducer: {
        slice1: slice1Reducer
    }
});
```

:chatgpt-content-reference{index="7"}

This creates:

```text
state.slice1
      ↓
slice1Reducer
      ↓
Slicer1.js
```

---

### 12. Provider

`Provider` makes the Redux store available to React components.

```jsx
<Provider store={stores}>
    <Counting />
</Provider>
```

The `Counting` component can therefore access the Redux store. :chatgpt-content-reference{index="8"}

### Structure

```text
Provider
   │
   └── Redux Store
          │
          └── React Components
```

---

### 13. `useSelector`

`useSelector()` reads data from the Redux store.

```js
const count = useSelector(
    (state) => state.slice1.count
);
```

Here:

```text
state
 ↓
slice1
 ↓
count
```

The component receives the current Redux value. :chatgpt-content-reference{index="9"}

---

### 14. `useDispatch`

`useDispatch()` provides the `dispatch` function used to send actions to Redux.

```js
const dispatch = useDispatch();
```

An action can then be dispatched:

```js
dispatch(Increment());
```

:chatgpt-content-reference{index="10"}

---

### 15. Dispatch

**Dispatch** sends an action to Redux.

```js
dispatch(Increment());
dispatch(Decrement());
dispatch(Reset());
```

The corresponding reducer handles the action and updates the state. :chatgpt-content-reference{index="11"}

---

### 16. Redux Data Flow

```text
User Interaction
      ↓
dispatch(action)
      ↓
Reducer
      ↓
State Update
      ↓
Redux Store
      ↓
useSelector()
      ↓
Component Re-render
```

For the counter:

```text
Click Increment
      ↓
dispatch(Increment())
      ↓
Increment reducer
      ↓
count = count + 1
      ↓
Component receives new count
```

---

### 17. Complete Architecture

```text
             Redux Store
                  │
             configureStore()
                  │
        ┌─────────┴─────────┐
        │                   │
     slice1              slice2
        │
   slice1Reducer
        │
    createSlice()
        │
 ┌──────┼───────┐
 │      │       │
Increment Decrement Reset
 │      │       │
 └──────┼───────┘
        │
     dispatch()
        ↑
   React Component
        │
   useSelector()
```

### Quick Revision

```text
Redux              → Global state management
Redux Toolkit      → Simplified Redux development
Store              → Holds global state
State              → Application data
Slice              → Logical section of state
createSlice()      → Creates slice + reducers + actions
initialState       → Starting state
Reducer            → Changes state
Action             → Describes an operation
dispatch()         → Sends action
useSelector()      → Reads Redux state
useDispatch()      → Gets dispatch function
Provider            → Makes store available to React
configureStore()   → Creates Redux store
```

# 15. Redux Toolkit — Advanced Concepts

### 1. Redux State Management

Redux provides a **centralized store** for application-wide state.

```text
React Components
       ↓
    dispatch()
       ↓
     Redux
       ↓
     Store
       ↓
 useSelector()
       ↓
React Components
```

In the uploaded project, separate state sections are represented through `slice1` and `slice2`. :chatgpt-content-reference{index="0"}

---

### 2. Multiple Slices

A Redux application can contain multiple slices, where each slice manages a different type of state.

```text
Store
├── slice1 → Counter state
└── slice2 → Cart state
```

Example:

```js
const initialState = {
    count: 0
};
```

A separate `slice2` manages cart count with `addItems` and `removeItems`. :chatgpt-content-reference{index="1"}

---

### 3. `createSlice()`

`createSlice()` creates a complete Redux slice containing:

- Slice name
- Initial state
- Reducers
- Action creators
- Reducer function

```js
const reactslicer = createSlice({
    name: "slice1",
    initialState,
    reducers: {
        Increment: (state) => {
            state.count++;
        }
    }
});
```

:chatgpt-content-reference{index="2"}

---

### 4. Immer

Redux Toolkit uses **Immer** internally.

Immer allows reducers to write code that looks like direct state mutation:

```js
state.count++;
```

Although it looks like mutation, Immer produces the appropriate immutable state update internally.

The uploaded notes specifically demonstrate the **Draft → new state object** concept. :chatgpt-content-reference{index="3"}

### Traditional immutable approach

```js
return {
    ...state,
    count: state.count + 1
};
```

### Redux Toolkit approach

```js
state.count = state.count + 1;
```

Both represent a state update, but RTK's Immer allows the simpler syntax. :chatgpt-content-reference{index="4"}

---

### 5. Actions

An action describes the operation that should happen.

A generated action can conceptually look like:

```js
{
    type: "slice1/Increment",
    payload: undefined
}
```

The action `type` is automatically generated from the slice name and reducer name. :chatgpt-content-reference{index="5"}

---

### 6. Payload

A **payload** carries additional data with an action.

The custom counter sends a number:

```js
dispatch(
    CustomIncreaser(Number(number))
);
```

The reducer receives that value through `action.payload`. :chatgpt-content-reference{index="6"}

---

### 7. Payload Flow

```text
Input
  ↓
number
  ↓
CustomIncreaser(number)
  ↓
dispatch()
  ↓
action.payload
  ↓
Reducer
  ↓
state.count += payload
```

The reducer is defined as:

```js
CustomIncreaser: (state, action) => {
    state.count += action.payload;
}
```

:chatgpt-content-reference{index="7"}

---

### 8. Custom Reducer

A reducer can accept both:

```js
(state, action)
```

- `state` → current slice state
- `action` → dispatched action
- `action.payload` → additional data

Example:

```js
CustomIncreaser: (state, action) => {
    state.count += action.payload;
}
```

---

### 9. `useSelector()`

`useSelector()` reads data from the Redux store.

```js
const count = useSelector(
    (state) => state.slice1.count
);
```

The component automatically receives the relevant state value. :chatgpt-content-reference{index="8"}

---

### 10. `useDispatch()`

`useDispatch()` provides the Redux `dispatch` function.

```js
const dispatch = useDispatch();

dispatch(Increment());
```

It is used to send actions from React components to Redux. :chatgpt-content-reference{index="9"}

---

### 11. Controlled Input + Redux

The custom counter combines local React state with Redux state.

```js
const [number, setNumber] = useState("");
```

The input value is controlled by React state:

```jsx
<input
    type="number"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
/>
```

After submission, the value is converted to a number and dispatched to Redux. :chatgpt-content-reference{index="10"}

### Separation

```text
React useState
     ↓
Temporary input value

Redux
     ↓
Application counter state
```

---

### 12. Cart State

The food-cart example uses Redux for the global cart count.

```js
initialState: {
    count: 0
}
```

Actions:

```js
addItems
removeItems
```

:chatgpt-content-reference{index="11"}

---

### 13. Local State + Redux State

`FoodCart` maintains whether an individual item is currently in the cart:

```js
const [inCart, setInCart] = useState(false);
```

Redux maintains the overall cart count.

```text
Local State
└── Is this particular item in cart?

Redux State
└── Total cart count
```

:chatgpt-content-reference{index="12"}

---

### 14. Conditional Add/Remove

The button behavior depends on `inCart`.

```text
inCart = false
     ↓
Add
     ↓
addItems()
     ↓
inCart = true
```

Then:

```text
inCart = true
     ↓
Remove
     ↓
removeItems()
     ↓
inCart = false
```

:chatgpt-content-reference{index="13"}

---

### 15. Global Cart Count

The `Header` reads the cart count directly from Redux:

```js
const count = useSelector(
    (state) => state.slice2.count
);
```

This allows the header to display the current cart count without receiving it through props. :chatgpt-content-reference{index="14"}

---

### 16. Redux Provider

`Provider` makes the Redux store accessible to components inside it.

```jsx
<Provider store={stores}>
    <Header />
    <Card />
</Provider>
```

Both components can access the same Redux store. :chatgpt-content-reference{index="15"}

---

### 17. Component → Redux Communication

```text
Card
 ↓
FoodCart
 ↓
dispatch(addItems())
 ↓
slice2 reducer
 ↓
Redux Store
 ↓
Header
 ↓
useSelector()
 ↓
Updated Cart Count
```

This demonstrates communication between separate React components through shared Redux state.

---

### 18. `map()` with Component Data

The food list is stored as an array of objects:

```js
[
    { id: 1, food: "Pizza", Price: "200" },
    { id: 2, food: "Pasta", Price: "300" }
]
```

The array is converted into multiple `FoodCart` components using `.map()`. :chatgpt-content-reference{index="16"}

```jsx
foodItems.map((value) => (
    <FoodCart value={value} />
))
```

---

### 19. Props

The food object is passed from `Card` to `FoodCart` through props.

```jsx
<FoodCart value={value} />
```

The child receives it:

```js
function FoodCart({ value })
```

and uses:

```jsx
{value.food}
{value.Price}
```

:chatgpt-content-reference{index="17"} :chatgpt-content-reference{index="18"}

---

### 20. Complete Architecture

```text
                    Redux Store
                        │
              ┌─────────┴─────────┐
              │                   │
           slice1               slice2
              │                   │
        Counter State         Cart State
              │                   │
        ┌─────┴─────┐       ┌─────┴─────┐
        │           │       │           │
    Increment   Custom     addItems   removeItems
                Increaser
        │           │       │           │
        └─────┬─────┘       └─────┬─────┘
              │                   │
          dispatch()          dispatch()
              ↑                   ↑
          Counting            FoodCart
              │                   │
       useSelector()             Card
                                  │
                               Header
                                  │
                           useSelector()
```

### Quick Revision

```text
createSlice()      → Creates slice
initialState       → Starting state
reducers           → State update logic
actions            → Generated operations
payload            → Data sent with action
dispatch()         → Sends action
useSelector()      → Reads Redux state
useDispatch()      → Gets dispatch
configureStore()   → Creates store
Provider           → Gives components store access
Immer              → Enables mutable-looking reducer syntax
Custom reducer     → Receives (state, action)
action.payload     → Carries dynamic data
useState()         → Local component state
Redux state        → Shared/global state
```

# 16. Redux Toolkit — Async API & `createAsyncThunk`

### 1. Asynchronous Redux

When Redux needs to handle an **API request**, the operation has multiple stages:

```text
Request
  ↓
Loading
  ↓
Success / Failure
```

Redux Toolkit provides `createAsyncThunk()` for managing this type of asynchronous logic.

---

### 2. `createAsyncThunk()`

`createAsyncThunk()` creates an asynchronous Redux action.

```js
const FetchData = createAsyncThunk(
    'Coin/fetch',
    async (args, thunkAPI) => {
        // API request
    }
);
```

It is used when Redux needs to perform operations such as:

- API requests
- Fetching data
- Handling loading state
- Handling errors

The uploaded example uses it to fetch cryptocurrency data. :chatgpt-content-reference{index="0"}

---

### 3. Automatic Action States

`createAsyncThunk()` automatically generates three action states:

```text
pending
fulfilled
rejected
```

### Flow

```text
createAsyncThunk()
       ↓
   API Request
       ↓
 ┌─────┼──────┐
 ↓     ↓      ↓
pending fulfilled rejected
```

The source illustrates these generated action types. :chatgpt-content-reference{index="1"}

---

### 4. `pending`

Represents the period while the asynchronous operation is running.

```js
.addCase(FetchData.pending, (state) => {
    state.loading = true;
    state.error = null;
})
```

Typical state:

```text
loading = true
error = null
```

:chatgpt-content-reference{index="2"}

---

### 5. `fulfilled`

Represents a successful asynchronous operation.

```js
.addCase(FetchData.fulfilled, (state, action) => {
    state.data = action.payload;
    state.loading = false;
})
```

The returned API data becomes:

```text
action.payload
      ↓
state.data
```

:chatgpt-content-reference{index="3"}

---

### 6. `rejected`

Represents a failed asynchronous operation.

```js
.addCase(FetchData.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
})
```

The error information is stored in the Redux state. :chatgpt-content-reference{index="4"}

---

### 7. `extraReducers`

`extraReducers` handles actions generated outside the normal `reducers` section.

With `createAsyncThunk`, it is used to handle:

```text
FetchData.pending
FetchData.fulfilled
FetchData.rejected
```

```js
extraReducers: (builder) => {
    builder
        .addCase(...)
        .addCase(...)
        .addCase(...)
}
```

:chatgpt-content-reference{index="5"}

---

### 8. `builder`

`builder` provides methods for defining how the slice responds to external actions.

```js
builder
    .addCase(FetchData.pending, ...)
    .addCase(FetchData.fulfilled, ...)
    .addCase(FetchData.rejected, ...)
```

---

### 9. Async State Structure

The example initializes:

```js
initialState: {
    data: [],
    loading: false,
    error: null
}
```

:chatgpt-content-reference{index="6"}

Each property has a specific purpose:

| State | Purpose |
|---|---|
| `data` | Stores API response |
| `loading` | Tracks request status |
| `error` | Stores error information |

---

### 10. API Request

The thunk performs the API request using `fetch()`.

```js
const response = await fetch(url);
const data = await response.json();

return data;
```

The returned value becomes the payload of the `fulfilled` action. :chatgpt-content-reference{index="7"}

---

### 11. Dynamic API Parameters

The thunk accepts an argument:

```js
async (args, thunkAPI) => {
```

That argument is used in the API URL:

```js
per_page=${args}
```

The component dispatches:

```js
dispatch(FetchData(20));
```

So the value `20` is passed into the thunk. :chatgpt-content-reference{index="8"}

---

### 12. `dispatch()` with Async Thunk

The component triggers the API request through Redux:

```js
dispatch(FetchData(20));
```

This starts the asynchronous lifecycle:

```text
dispatch(FetchData(20))
          ↓
       pending
          ↓
      API request
       ↙       ↘
 fulfilled   rejected
```

:chatgpt-content-reference{index="9"}

---

### 13. `useEffect()` + Async Thunk

`useEffect()` can trigger the API request when the component mounts.

```js
useEffect(() => {
    dispatch(FetchData(20));
}, []);
```

This keeps the API request separate from the component's rendering logic. :chatgpt-content-reference{index="10"}

---

### 14. Loading UI

The component reads the Redux state:

```js
const {
    data,
    loading,
    error
} = useSelector((state) => state.slice1);
```

When `loading` is `true`:

```jsx
if (loading) {
    return <h1>Data is Loading</h1>;
}
```

:chatgpt-content-reference{index="11"}

---

### 15. Error UI

When the request fails:

```jsx
if (error) {
    return <h1>Error has Occured</h1>;
}
```

This creates a separate UI state for failed requests. :chatgpt-content-reference{index="12"}

---

### 16. Rendering API Data

After successful loading, the data is rendered using `.map()`:

```jsx
data.map((value) => (
    <CoinCard
        key={value.id}
        coin={value}
    />
))
```

Each API object is passed to `CoinCard` through props. :chatgpt-content-reference{index="13"}

---

### 17. Props and Reusable Components

`CoinCard` receives:

```js
const CoinCard = ({ coin }) => {
```

It displays information from the `coin` object:

```jsx
{coin.name}
{coin.current_price}
{coin.market_cap_rank}
```

and uses `coin.image` for the image. :chatgpt-content-reference{index="14"} :chatgpt-content-reference{index="15"}

---

### 18. Redux Provider

The Redux store is provided to the application using:

```jsx
<Provider store={stores}>
    <CoinCreate />
</Provider>
```

This allows `CoinCreate` and its children to access Redux state and dispatch actions. :chatgpt-content-reference{index="16"}

---

### 19. Store Configuration

The async slice reducer is registered in the store:

```js
const stores = configureStore({
    reducer: {
        slice1: slice1Reducer
    }
});
```

:chatgpt-content-reference{index="17"}

Therefore:

```text
state.slice1
   ├── data
   ├── loading
   └── error
```

---

### 20. Complete Data Flow

```text
Component
    │
    │ dispatch(FetchData(20))
    ↓
createAsyncThunk
    │
    ↓
pending
    │
    ↓
API Request
    │
 ┌──┴───┐
 ↓      ↓
Success Error
 ↓      ↓
fulfilled rejected
 ↓      ↓
data   error
 │
 ↓
useSelector()
 │
 ↓
CoinCreate
 │
 ↓
CoinCard
```

### Quick Revision

```text
createAsyncThunk() → Handles async Redux logic
pending            → Request started
fulfilled          → Request successful
rejected           → Request failed
extraReducers      → Handles external/generated actions
builder            → Defines async action handlers
action.payload     → Returned API data/error
dispatch()         → Starts thunk
useSelector()      → Reads async state
loading            → Tracks request status
data               → Stores response
error              → Stores failure information
useEffect()        → Triggers request on mount
Provider           → Provides Redux store
configureStore()   → Creates Redux store
```

# 17. React Virtual DOM, Reconciliation & Keys — Concise Detailed Notes

### 1. Virtual DOM

- The **Virtual DOM** is a lightweight JavaScript representation of the UI.
- React does not directly update the entire real DOM for every state change.
- When state/props change, React creates an updated Virtual DOM representation and compares it with the previous one.
- React then updates the required parts of the **Real DOM** rather than unnecessarily rebuilding the whole UI.

```text
State Change
     ↓
New Virtual DOM
     ↓
Compare with Previous Virtual DOM
     ↓
Find Changes
     ↓
Update Required Real DOM
```

---

### 2. Re-rendering

A state update causes React to **re-render the affected component**.

The important distinction is:

```text
Re-render ≠ Rebuild entire Real DOM
```

React may execute the component again to produce the new UI description, but the DOM updates are applied selectively.

---

### 3. Batching Updates

React can **batch multiple state updates** together so that they are processed efficiently rather than causing a separate update for every call.

Example:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

When the same current `count` value is used, these updates can effectively be based on the same snapshot.

For sequential updates, use the **functional updater**:

```jsx
setCount(count => count + 1);
setCount(count => count + 1);
setCount(count => count + 1);
```

Each updater receives the latest pending state.

```text
Previous count
      ↓
  +1 → +1 → +1
      ↓
Final updated count
```

---

### 4. Reconciliation

**Reconciliation** is React's process of determining what needs to change in the UI after a render.

React compares the previous element tree with the new element tree and determines the necessary updates.

```text
Previous Tree
      ↓
     Compare
      ↑
New Tree
      ↓
Required Changes
```

The goal is to minimize unnecessary DOM operations.

---

### 5. Tree Comparison

React represents UI as a tree:

```text
        Parent
       /      \
    Child    Child
    /  \      /  \
   A    B    C    D
```

After an update, React compares the new tree with the previous tree to determine which parts changed.

---

### 6. Lists and `key`

When rendering lists, React uses the **`key`** to identify individual elements.

Example:

```jsx
<li key="milk">Milk</li>
<li key="sugar">Sugar</li>
<li key="chai">Chai</li>
```

Keys provide a stable identity for list elements.

```text
Parent
 ├── key: milk
 ├── key: sugar
 └── key: chai
```

---

### 7. Why Keys Matter

Consider:

```text
Old:
Milk
Sugar
Chai
```

New:

```text
Samosa
Milk
Sugar
Chai
```

Without stable keys, React has less reliable information about which existing elements correspond to which new elements.

With keys:

```text
Old                  New

Milk   ───────────→  Milk
Sugar  ───────────→  Sugar
Chai   ───────────→  Chai
                     Samosa
```

React can preserve the identity of existing elements and handle the insertion more efficiently.

---

### 8. Avoid Array Index as Key

Avoid:

```jsx
items.map((item, index) =>
    <li key={index}>{item}</li>
)
```

when the list can be reordered, inserted into, or deleted from.

The notes specifically emphasize:

> **Key: array ka index mat banana**

Prefer a stable unique identifier:

```jsx
items.map(item =>
    <li key={item.id}>{item.name}</li>
)
```

---

### 9. Stable Identity

A good key should be:

- **Unique among siblings**
- **Stable across renders**
- Associated with the same logical item

```text
Good:
key = item.id

Avoid:
key = array index
key = random value
```

A changing key can cause React to treat an existing element as a completely different element.

---

### 10. Ideal List Update

For a list update, the desired behavior is to **preserve existing nodes where their identity remains the same** and create/remove only what actually changed.

```text
Old:
Milk → Sugar → Chai

New:
Samosa → Milk → Sugar → Chai

Stable keys allow React to recognize:
Milk  → same item
Sugar → same item
Chai  → same item
Samosa → new item
```

This is the main reason keys are important during reconciliation.

---

### 11. 60 FPS Concept

The notes connect UI updates with **60 FPS**.

At 60 FPS, the browser has roughly:

```text
1000 ms ÷ 60 ≈ 16.67 ms
```

per frame.

Efficient rendering and minimizing unnecessary DOM work help maintain smooth UI updates.

---

### 12. Core Concepts

```text
Virtual DOM
    ↓
Component Re-render
    ↓
New UI Tree
    ↓
Reconciliation
    ↓
Compare Old vs New
    ↓
Identify Changes
    ↓
Update Real DOM
```

For lists:

```text
List
 ↓
Stable Keys
 ↓
Element Identity
 ↓
Better Reconciliation
 ↓
Efficient Updates
```

### Quick Revision

```text
Virtual DOM       → JS representation of UI
Re-render         → Component executes again after update
Reconciliation    → Determines UI differences
Real DOM          → Actual browser DOM
Batching          → Groups state updates
Functional update → Uses latest pending state
Key               → Gives list elements stable identity
Stable key        → Usually unique item ID
Index as key      → Avoid when list order can change
60 FPS            → ~16.67 ms per frame
```
# 18. React Re-rendering, Batching, Reconciliation & Keys

### 1. Virtual DOM

- **Virtual DOM** is a JavaScript representation of the UI.
- When state changes, React creates a new Virtual DOM tree.
- React compares the new tree with the previous tree and updates only the necessary parts of the **Real DOM**.
- A component re-render does **not** mean the entire Real DOM is recreated.

```text
State Change
     ↓
Component Re-render
     ↓
New Virtual DOM
     ↓
Compare with Previous Virtual DOM
     ↓
Required DOM Updates
     ↓
Real DOM
```

The code demonstrates the difference between a React element object and a real DOM element created with `document.createElement()`. :chatgpt-content-reference{index="0"}

---

### 2. Virtual DOM vs Real DOM

### Virtual DOM

```jsx
const VDom = <h1>Hello Coder Army</h1>;
```

This represents a React element/object.

### Real DOM

```js
const RDom = document.createElement("h1");
RDom.innerText = "Hello Coder Army";
```

This creates an actual browser DOM node. :chatgpt-content-reference{index="1"}

---

### 3. Re-render

A state update causes React to execute the component again and produce a new UI representation.

```text
Old State
   ↓
setState()
   ↓
Re-render
   ↓
New Virtual DOM
   ↓
Reconciliation
```

React then determines which actual DOM changes are required.

---

### 4. Batching Updates

**Batching** means React can group multiple state updates and process them together.

Example:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

If all updates use the same `count` snapshot, they can produce the same next value rather than three sequential increments.

### Functional updater

```jsx
setCount(count => count + 1);
setCount(count => count + 1);
setCount(count => count + 1);
```

Each updater receives the latest pending state.

```text
count = 2

+1 → 3
+1 → 4
+1 → 5
```

**Use the functional form when multiple updates depend on the previous state.**

---

### 5. 60 FPS and Rendering

A 60 FPS display has approximately:

```text
1000 / 60 ≈ 16.67 ms
```

available for each frame.

Efficient rendering reduces unnecessary browser work and helps maintain smooth UI updates.

---

### 6. Reflow

**Reflow** is the browser's process of recalculating layout when changes affect element size, position, or structure.

Examples of layout-related changes include:

- Element position
- Width/height
- Adding/removing elements
- Changes affecting surrounding layout

React's reconciliation helps determine what DOM changes are required, while the browser handles the resulting layout work.

---

### 7. Reconciliation

**Reconciliation** is React's process of comparing the previous UI tree with the new UI tree.

```text
Previous Virtual DOM
        ↓
      Compare
        ↑
New Virtual DOM
        ↓
Determine Changes
        ↓
Update Real DOM
```

React attempts to preserve existing elements when their identity has not changed.

---

### 8. List Rendering

Lists are commonly rendered using `.map()`:

```jsx
language.map((value, index) =>
    <Add key={value} value={value} />
)
```

The uploaded example renders each language as a separate `Add` component. :chatgpt-content-reference{index="2"}

---

### 9. `key` Prop

`key` gives each list element a **stable identity among its siblings**.

```jsx
<Add key={value} value={value} />
```

Example:

```text
Parent
 ├── key="TS"
 ├── key="JS"
 └── key="Java"
```

React uses these keys during reconciliation to determine which list item corresponds to which previous item.

---

### 10. Why Stable Keys Matter

Initial list:

```text
TS
JS
Java
```

After adding `C++` at the beginning:

```text
C++
TS
JS
Java
```

The code performs:

```js
setLanguage(["C++", ...language]);
```

and uses the language itself as the key. :chatgpt-content-reference{index="3"}

React can therefore recognize:

```text
C++  → New item
TS   → Existing item
JS   → Existing item
Java → Existing item
```

This allows existing component identity/state to remain associated with the correct language.

---

### 11. Component State and Keys

Each `Add` component has its own local state:

```jsx
const [count, setCount] = useState(0);
```

and displays:

```jsx
<h1>{value}: {count}</h1>
```

The `Vote` button updates that component's count. :chatgpt-content-reference{index="4"}

Therefore, keys become important when list items are inserted, removed, or reordered.

```text
Language
   ↓
key
   ↓
Component Identity
   ↓
Local State
```

---

### 12. Avoid Array Index as Key

Avoid:

```jsx
key={index}
```

when the list can be:

- Reordered
- Inserted into
- Deleted from

Example:

```text
Old:
0 → TS
1 → JS
2 → Java
```

Insert `C++` at the beginning:

```text
New:
0 → C++
1 → TS
2 → JS
3 → Java
```

The indexes now refer to different items.

This can cause component state to become associated with the **wrong item**.

---

### 13. Stable ID vs Index

### Preferred

```jsx
key={item.id}
```

or another stable unique identifier.

### In the example

```jsx
key={value}
```

is suitable because the language values are used as stable identities.

### Avoid when list changes

```jsx
key={index}
```

---

### 14. Key Does Not Mean Array Index

A key is **not the position of an element**.

```text
Wrong concept:
key = position

Correct concept:
key = identity
```

React uses the key to determine **which logical item is which**, not simply where the item currently appears.

---

### 15. Complete Concept Flow

```text
State / Props Change
        ↓
Component Re-render
        ↓
New Virtual DOM
        ↓
Reconciliation
        ↓
Compare Old vs New Tree
        ↓
Use Keys to Identify List Items
        ↓
Determine Required Changes
        ↓
Update Real DOM
        ↓
Browser Layout / Paint
```

### Quick Revision

```text
Virtual DOM       → JavaScript representation of UI
Real DOM          → Actual browser DOM
Re-render         → Component executes again after update
Batching          → Groups state updates
Functional update → Uses latest pending state
Reconciliation    → Compares old and new UI trees
Reflow             → Browser recalculates layout
Key               → Stable identity for list elements
Stable key        → Preserves correct component identity
Index as key      → Avoid for dynamic lists
60 FPS            → ~16.67 ms per frame
```

The accompanying example specifically demonstrates **component-local state + dynamic list insertion + stable keys**, which is the practical reason `key` matters during reconciliation. :chatgpt-content-reference{index="5"} :chatgpt-content-reference{index="6"}

# 19. Tailwind CSS — Concise Detailed Notes

### 1. Tailwind CSS

**Tailwind CSS** is a **utility-first CSS framework**.

Instead of writing custom CSS for every element, predefined utility classes are directly applied in JSX/HTML.

```jsx
<div className="flex justify-center gap-10">
```

The project imports Tailwind through:

```css
@import "tailwindcss";
```

:chatgpt-content-reference{index="0"}

---

### 2. Utility-First Approach

Tailwind provides small utility classes for individual CSS properties.

```text
flex        → display: flex
p-4         → padding
mt-5        → margin-top
text-2xl    → font size
bg-sky-500  → background color
rounded-xl  → border radius
shadow-md   → box shadow
```

These utilities can be combined directly in `className`.

The project uses this approach extensively in the React components. :chatgpt-content-reference{index="1"}

---

### 3. Colors

Tailwind provides color utilities with intensity levels.

```text
bg-red-500
bg-green-500
bg-blue-500
bg-sky-500
text-gray-700
```

The notes use a color intensity scale from **50 to 950** for supported colors. :chatgpt-content-reference{index="2"}

### Pattern

```text
property-color-intensity
```

Example:

```text
bg-sky-500
text-gray-700
```

---

### 4. Background Color

```text
bg-sky-500
bg-white
bg-gray-100
```

`bg-*` controls the background color.

Example from the project:

```jsx
<button className="bg-sky-500">
```

:chatgpt-content-reference{index="3"}

---

### 5. Text Color

```text
text-gray-700
text-gray-500
text-white
```

`text-*` controls text color.

Example:

```jsx
<h1 className="text-gray-700">
```

:chatgpt-content-reference{index="4"}

---

### 6. Border

```text
border
border-2
border-sky-500
```

- `border` → default 1px border
- `border-2` → 2px border

Directional borders:

```text
border-t → top
border-r → right
border-b → bottom
border-l → left
```

Example:

```text
border-t-2
```

creates a 2px top border. :chatgpt-content-reference{index="5"}

---

### 7. Margin

Margin controls **space outside an element**.

```text
m-1  → all sides
mx-1 → left + right
my-1 → top + bottom
mt-1 → top
mb-1 → bottom
ml-1 → left
mr-1 → right
```

Tailwind spacing commonly uses:

```text
1 → 4px
```

So:

```text
m-1 → 4px margin
```

:chatgpt-content-reference{index="6"}

---

### 8. Padding

Padding controls **space inside an element**.

```text
p-1  → all sides
px-1 → horizontal
py-1 → vertical
pt-1 → top
pb-1 → bottom
pl-1 → left
pr-1 → right
```

Example:

```jsx
<button className="p-1">
```

:chatgpt-content-reference{index="7"}

---

### 9. Font Size

Common Tailwind text-size utilities:

| Class | Size |
|---|---:|
| `text-xs` | 12px |
| `text-sm` | 14px |
| `text-base` | 16px |
| `text-lg` | 18px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-3xl` | 30px |
| `text-4xl` | 36px |
| `text-5xl` | 48px |

:chatgpt-content-reference{index="8"}

Example:

```jsx
<h1 className="text-2xl">
```

:chatgpt-content-reference{index="9"}

---

### 10. Flexbox

`flex` enables Flexbox.

```text
flex
```

Common utilities:

```text
flex
flex-wrap
justify-center
items-center
gap-10
```

Example:

```jsx
<div className="flex flex-wrap justify-center gap-10">
```

:chatgpt-content-reference{index="10"}

### Meaning

```text
flex           → display: flex
flex-wrap      → allow items to wrap
justify-center → horizontal alignment
gap-10         → spacing between items
```

---

### 11. Width and Height

Examples:

```text
w-full
h-48
max-w-sm
```

The project uses:

```jsx
<img className="w-full h-48 object-cover" />
```

:chatgpt-content-reference{index="11"}

- `w-full` → full available width
- `h-48` → fixed height utility
- `max-w-sm` → maximum width

---

### 12. Border Radius

Tailwind provides rounded-corner utilities:

```text
rounded
rounded-sm
rounded-md
rounded-lg
rounded-xl
rounded-2xl
```

Example:

```jsx
<img className="rounded-2xl" />
```

:chatgpt-content-reference{index="12"}

The available rounded scale includes `xs`, `sm`, `md`, `lg`, `xl`, and `2xl`. :chatgpt-content-reference{index="13"}

---

### 13. Shadows

Shadow utilities add box shadows:

```text
shadow-sm
shadow-md
shadow-lg
```

Example:

```jsx
<div className="shadow-md">
```

The card in the project uses `shadow-md`. :chatgpt-content-reference{index="14"}

---

### 14. Object Fit

For images:

```text
object-cover
```

makes the image cover its container while maintaining its aspect ratio.

Example:

```jsx
<img className="w-full h-48 object-cover" />
```

:chatgpt-content-reference{index="15"}

---

### 15. Hover State

Tailwind supports state variants such as `hover:`.

```text
hover:bg-sky-800
```

The style applies when the mouse is over the element.

Example:

```jsx
<button className="bg-sky-500 hover:bg-sky-800">
```

:chatgpt-content-reference{index="16"}

---

### 16. Responsive Layout Concept

Tailwind utilities can be combined to build responsive layouts.

A common pattern is:

```text
flex
flex-wrap
justify-center
```

This allows cards to wrap onto new rows when the available width becomes smaller.

The project uses this structure for its card layout. :chatgpt-content-reference{index="17"}

---

### 17. React + Tailwind

Tailwind classes are written directly inside React's `className`:

```jsx
<div className="max-w-sm bg-white shadow-md p-4">
```

React:

```text
className
     ↓
Tailwind utility classes
     ↓
Generated CSS
     ↓
Browser UI
```

The HTML entry point loads `index.css`, while `App.js` is loaded as a module. :chatgpt-content-reference{index="18"} :chatgpt-content-reference{index="19"}

---

### 18. Complete Card Example

The project combines multiple utilities to create a card:

```jsx
<div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5">
```

Inside it:

```text
max-w-sm       → maximum width
overflow-hidden → hide overflowing content
bg-white       → white background
shadow-md      → medium shadow
p-4            → padding
mt-5           → top margin
```

:chatgpt-content-reference{index="20"}

---

### Quick Revision

```text
Tailwind CSS → Utility-first CSS framework

bg-*         → Background
text-*       → Text color / text utilities
border       → Border
m-*          → Margin
p-*          → Padding
flex         → Flexbox
justify-*    → Main-axis alignment
items-*      → Cross-axis alignment
gap-*        → Gap between items
w-*          → Width
h-*          → Height
max-w-*      → Maximum width
rounded-*    → Border radius
shadow-*     → Box shadow
object-cover → Image fitting
hover:*      → Hover state
flex-wrap    → Allow flex items to wrap
```

### Core Pattern

```text
Utility Class
      ↓
CSS Property
      ↓
Combine Multiple Utilities
      ↓
Build Component UI
```

The key idea from your notes is: **Tailwind lets you compose small utility classes directly in markup instead of writing separate CSS rules for each component.** :chatgpt-content-reference{index="21"}