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
