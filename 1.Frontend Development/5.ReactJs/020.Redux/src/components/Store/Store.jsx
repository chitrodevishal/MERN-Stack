import { configureStore } from "@reduxjs/toolkit";
import Slicer from "../Slicer/Slicer";
const Store = configureStore({
  reducer: {
    Slice: Slicer,
  },
});
console.log(Store)

export default Store
