import React from "react"; // Here we import react
import ReactDOM from "react-dom/client"; //Here we import react-dom
// then we get this error SyntaxError: Cannot use import statement outside a module to solve this we place type="module" in index.html script section
// After adding type="module" we get this error TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../".
// to execute we use npx parcel index.html
const parent = document.getElementsByClassName("root")[0];

const element = React.createElement(
  "h1",
  {
    id: "one",
    className: "first",
    style: { fontSize: "50px", color: "White", backgroundColor: "red" },
  },
  "Hello World Using React",
);
const element1 = React.createElement(
  "h1",
  {
    id: "one",
    className: "first",
    style: { fontSize: "50px", color: "White", backgroundColor: "aqua" },
  },
  "Hello World",
);
console.log(element);
// React                       Render
// React.createElement() => react element(JSObject) => HTML element

const Reactroot = ReactDOM.createRoot(parent);

// Reactroot.render(element); // last render remove previous render data
// Reactroot.render(element1);

/* <div>
  <h1>Hello World Using React</h1>
  <h1>Hello World</h1>
</div> */

const div = React.createElement("div", {}, [element, element1]);
Reactroot.render(div);

// <div>
//   <div>
//     <h1>
//       <p></p>
//     </h1>
//   </div>
// </div>
// const nested = React.createElement("div", {}, React.createElement("div", {}, React.createElement("h1", {}, React.createElement("p", {}, "This is Paragraph"))));

// Reactroot.render(nested);

// Here we use JSX: We can HTML code in JS
const heading = <h1>This is JSX</h1>; //It's not a part of react it's a part of JSX (it's not exactly HTML, it's XML code)
const name = "Vishal Chitrode";
const obj = {
  fontSize: "50px",
  color: "white",
  backgroundColor: "red",
};
const heading1 = (
  <>
    <h1 id="one" className="first" money="23">
      Hello {name}
    </h1>
    <h2 id="second" className="first" money={23} style={obj}>
      {/* style= {{ fontSize:"50px",color:"white",backgroundColor:"red"}} */}
      This is JSX heading 1
    </h2>
  </>
);
//    Babel                   React                      Render
// JSX => React.createElement() => react element(JSObject) => HTML element
Reactroot.render(heading1);

// {mean JS expression here}


// React Component

// 1. Class Based Component
// 2. Functional Component
function print(){
  return <h1>This is Another Heading</h1>
}
const meet = ()=>{
  return <h1>Hello {name}</h1>
}
const functioncomponent = print()
const thor = <>{print()} {meet()}</>
Reactroot.render(thor)
