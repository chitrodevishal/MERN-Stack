import React, { useState } from "react";
import ReactDom from "react-dom/client";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Fourth from "./components/fourth"
import GlobalContext from "./components/global";
import { useContext } from "react";
const parent = ReactDom.createRoot(document.getElementById("root"));
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <GlobalContext.Provider value={{counts: count, setCount: setCount}}> */}
      {/* <GlobalContext.Provider value={{count, setCount}}> When key and value pair are same*/}
      <GlobalContext.Provider
        value={{
          count,
          setCount,
          name: "Vishal Chitrode",
          age: 25,
          city: "Indore",
        }}
      >
        <h1>This is parent</h1>
        <First />
        <Second />
        <Third />
        {/* <Fourth/> */}
      </GlobalContext.Provider>
        <Fourth/>

    </>
  );
}
parent.render(<App />);
