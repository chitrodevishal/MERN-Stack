import { Plus, Minus } from "lucide-react";
import { useState, memo } from "react";

function Countdown() {
  let [count, setCount] = useState(0);
  function Increase() {
    count += 1;
    setCount(count)
}
function Decrease() {
    count -= 1;
    setCount(count)
  }
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", marginBottom:"30px"}}>
      <h1 style={{color:"white"}}>Count is {count}</h1>
      <div className="button">
        <button onClick={Increase} style={{padding:"20px", fontSize:"20px", width:"auto"}}>
          {/* <Plus /> */}
          Increase {count}
        </button>
        <button onClick={Decrease} style={{padding:"20px", fontSize:"20px", width:"auto"}}>
          {/* <Minus /> */}
          Decrease {count}
        </button>
      </div>
    </div>
  );
}

export default Countdown