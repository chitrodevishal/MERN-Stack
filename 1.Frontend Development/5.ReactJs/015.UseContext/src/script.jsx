import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import First from "./components/first";
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const [name, setName] = useState("Vishal Chitrode");

  return (
    <>
      <h1>Parent</h1>
      <First name={name} />
    </>
  );
}
parent.render(<App />);
