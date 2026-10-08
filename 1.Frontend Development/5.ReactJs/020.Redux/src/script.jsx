import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter"
import { Provider } from "react-redux";
import Store from "./components/Store/Store"
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <>
      <Provider store={Store}>
        <Counter></Counter>
      </Provider>
    </>
  );
}
parent.render(<App />);
