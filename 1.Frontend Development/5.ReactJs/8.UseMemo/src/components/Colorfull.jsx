import React, { useState, useEffect } from "react";
function Colorfull({name}) {
  let [color, setColor] = useState("black");
  console.log("Render");
  console.log(name);
  console.log("One");
  // document.body.style.backgroundColor = color //Here we directly manipulate this DOM manually
  useEffect(() => {
    console.log("UseEffect");
    document.body.style.backgroundColor = color;
  }, [color]);
  console.log("Two");
  return (
    <div
      style={{
        textAlign: "center",
        border: "2px solid white",
        borderRadius: "20px",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          marginTop: "30px",
          marginBottom: "20px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        Background Color Changer
      </h1>
      <div className="container">
        <p
          id="red"
          onClick={() => {
            setColor("red");
          }}
        >
          RED
        </p>
        <p
          id="blue"
          onClick={() => {
            setColor("blue");
          }}
        >
          BLUE
        </p>
        <p
          id="pink"
          onClick={() => {
            setColor("pink");
          }}
        >
          PINK
        </p>
        <p
          id="yellow"
          onClick={() => {
            setColor("yellow");
          }}
        >
          YELLOW
        </p>
        <p
          id="orange"
          onClick={() => {
            setColor("orange");
          }}
        >
          ORANGE
        </p>
      </div>
    </div>
  );
}
export default React.memo(Colorfull);
