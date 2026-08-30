import React  from "react";
import ReactDOM from "react-dom/client"

const parent = ReactDOM.createRoot(document.getElementById("root"))
const element = <h1>UseEffect</h1>
function App(){
return (
    <div className="container">
        <p id="red">RED</p>
        <p id="blue">BLUE</p>
        <p id="pink">PINK</p>
        <p id="yellow">YELLOW</p>
        <p id="orange">ORANGE</p>

    </div>

)
}
parent.render(<App/>)
