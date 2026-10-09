import React, { useState } from "react";
import ReactDOm from "react-dom/client";
import Add from "./components/Add";
const parent = ReactDOm.createRoot(document.getElementById("root"));
const arr = [0, 1, 2, 3];
function App() {
  const [language, setLanguage] = useState(["TS", "JS", "Java"]);
  function handleClick(){
    setLanguage(["C++", ...language])
  }
  return (
    <>
      {language.map((value, index) => (
        <Add key={value} value={value} />
      ))}
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Add Language</button>
    </>
  );
}
parent.render(<App />);
