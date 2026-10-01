import React, { useState, useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
const parent = ReactDOM.createRoot(document.getElementById("root"));
// function Fibonnaci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return Fibonnaci(n - 1) + Fibonnaci(n - 2);
//   }
// }
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  // const [result, setResult] = useState(null)

  // function Fibonnaci(n){
  //   if(n<=1){
  //     return n
  //   }else{
  //     return Fibonnaci(n-1)+Fibonnaci(n-2)
  //   }
  // }
  const Fibonnaci = useCallback((n)=>{
    if(n<=1){
      return n
    }else{
      return Fibonnaci(n-1)+Fibonnaci(n-2)
    }
  }, [])
  const result = useMemo(() => Fibonnaci(number), [number]);
  //   useEffect(()=>{
  //     setResult(Fibonnaci(number))
  // }, [number])
  // if we use useEffect it will took one more render because useEffect work in last

  return (
    <>
      <div className="container">
        <div className="first box">
          <h1>Counter is: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <div className="second box">
          <h1>Fibonnaci is: {result}</h1>
          <input
            type="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

parent.render(<App />);
