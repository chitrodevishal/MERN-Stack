import GlobalContext from "./global";
import { useContext } from "react";

export default function Third() {
  const { name, age, city } = useContext(GlobalContext);
  console.log(name, age, city);
  return (
    <>
      <h1>
        My Name is {name} and I'm {age} year old and I live in {city}
      </h1>
    </>
  );
}
