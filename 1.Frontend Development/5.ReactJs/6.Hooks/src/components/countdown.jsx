import { Plus, Minus } from "lucide-react";
import { useState } from "react";

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
    <div>
      <h1>Count is {count}</h1>
      <div className="button">
        <button onClick={Increase}>
          {/* <Plus /> */}
          Increase {count}
        </button>
        <button onClick={Decrease}>
          {/* <Minus /> */}
          Decrease {count}
        </button>
      </div>
    </div>
  );
}

export default Countdown;
