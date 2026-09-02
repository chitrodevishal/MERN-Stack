import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Password from "./components/Password";
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <>
      <Password />
    </>
  );
}
parent.render(<App />);
