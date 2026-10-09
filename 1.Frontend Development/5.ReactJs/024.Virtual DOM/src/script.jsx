  import React from "react";
  import ReactDOM from "react-dom/client"
  import Add from "./components/Add"
  const arr = [0,1,2,3]
  const parent = ReactDOM.createRoot(document.getElementById("root"))
  function App(){
    return (<>
    {arr.map((value)=><Add key={value}/>)}
    {/* <Add/>
    <Add/>
    <Add/>
    <Add/> */}
    
    </>)
  }
  parent.render(<App/>)