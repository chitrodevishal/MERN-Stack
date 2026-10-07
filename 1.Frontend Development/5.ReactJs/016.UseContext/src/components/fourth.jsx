import { useContext } from "react";
import GlobalContext from "./global"
export default function fourth() {
    const data = useContext(GlobalContext)
  return <>
  <h1>This is Fourth Child {data}</h1></>;
}
