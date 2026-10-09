import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Slicer/Slicer";
import Slicer from "./Slicer/Slicer"

export default function Counter() {
  // const [count, setCount] = useState(0)

  const count = useSelector((state) => state.Slice.count);
  const dispatch = useDispatch();
  console.log(Slicer)
  // console.log(increment())
  // console.log(decrement())
  
  return (
    <>
      <h1>Count is {count}</h1>
      <div className="button">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}
