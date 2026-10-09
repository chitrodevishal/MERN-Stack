import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import Store from "./components/Store/Store";
import CustomCounter from "./components/CustomCounter"
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <div className="container">
      <div className="box">
        <Provider store={Store}>
          <Counter></Counter>
          <br />
          <br />
          <CustomCounter></CustomCounter>
        </Provider>
      </div>
    </div>
  );
}
parent.render(<App />);
