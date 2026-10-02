import React, { useRef, useState } from "react";
import ReactDom from "react-dom/client";
const parent = ReactDom.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  let money = useRef(0);

  return (
    <>
      <h1>Counter is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Money is {money.current}</h1>
      <button
        onClick={() => {
          money.current = money.current + 1;
          console.log(money.current);
        }}
      >
        Increment
      </button>
    </>
  );
}

parent.render(<App />);
