import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Colorfull from "./components/Colorfull"
import Countdown from "./components/Countdown"

const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
    return (
        <>
        <Countdown/>
        <Colorfull name={"Sunny"}></Colorfull>
        </>
    )
}
parent.render(<App />);
