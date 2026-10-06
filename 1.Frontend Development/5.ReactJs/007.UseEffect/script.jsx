import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

const parent = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>UseEffect</h1>;
function App() {
    let [color, setColor] = useState("black")
    console.log("Render")
    console.log("One")
    // document.body.style.backgroundColor = color //Here we directly manipulate this DOM manually
    useEffect(()=>{
        console.log("UseEffect")
        document.body.style.backgroundColor = color 
    }, [color])
    console.log("Two")
  return (
    <div style={{ textAlign: "center", border: "2px solid white",  borderRadius: "20px", backgroundColor:"white", padding:"30px" }}>
      <h1 style={{ marginTop: "30px", marginBottom: "20px", fontFamily:"Arial, Helvetica, sans-serif" }}>
        Background Color Changer
      </h1>
      <div className="container">
        <p id="red" onClick={()=>{setColor("red")}}>RED</p>
        <p id="blue" onClick={()=>{setColor("blue")}}>BLUE</p>
        <p id="pink" onClick={()=>{setColor("pink")}}>PINK</p>
        <p id="yellow" onClick={()=>{setColor("yellow")}}>YELLOW</p>
        <p id="orange" onClick={()=>{setColor("orange")}}>ORANGE</p>
      </div>
    </div>
  );
}
parent.render(<App />);
