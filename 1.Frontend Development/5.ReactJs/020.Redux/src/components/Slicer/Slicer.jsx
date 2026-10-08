import { createSlice, reactslicer } from "@reduxjs/toolkit";
const Slicer = createSlice({
  name: "Slicer",
  initialState: { count: 0 }, //state :{count = 0}
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const {increment, decrement, reset} = Slicer.actions
export default Slicer.reducer
