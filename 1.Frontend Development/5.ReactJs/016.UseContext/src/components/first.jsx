import GlobalContext from "./global";
import { useContext } from "react";
export default function First() {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <>
      <h1>This is First Child & count is {count}</h1>
    </>
  );
}
