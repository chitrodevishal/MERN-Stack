import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>State Uplifting</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <Increment counts = {count} setCounts = {setCount}/>
      <Decrement counts = {count} setCounts = {setCount}/>
    </>
  );
}
parent.render(<App />);
