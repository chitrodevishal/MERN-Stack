// https://api.github.com/users?per_page=${count}
// https://api.github.com/users/taylorotwell
// https://api.github.com/users?since=6000&per_page=20

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Card from "./components/Card";
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  const [count, setCount] = useState(10);
  return (
    <>
      <Header setCount={setCount} />
      <Card count={count} />
    </>
  );
}
parent.render(<App />);
