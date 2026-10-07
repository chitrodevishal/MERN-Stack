import { useContext } from "react";
import GlobalContext from "./global"

export default function Second() {
  const { count, setCount } = useContext(GlobalContext); 
  return (
    <>
      <h1>This is Second Child & count is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  );
}
