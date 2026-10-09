import { useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, reset, customIncrease } from "./Slicer/Slicer";

export default function CustomCounter() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  function handleClick() {
    // dispatch(customIncrease(number));
    dispatch(customIncrease(Number(number)));
  }
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
