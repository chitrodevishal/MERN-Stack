import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Card from "./components/Card";
import clothes from "../utils/dummy";

const parent = ReactDOM.createRoot(document.getElementById("root"));

function Section({ arr, setArr }) {
  function Filter() {
    console.log("Filter");
  }

  function Price() {
    setArr([...arr].sort((a, b) => a.price - b.price));
  }

  function PriceAbove999() {
    setArr([...arr].filter((value) => value.price > 999))
  }

  function Rating() {
    console.log("Sort by Rating");
  }

  function Offer() {
    setArr([...arr].sort((a, b) => a.offer - b.offer));
    console.log(arr)
  }

  return (
    <div className="section">
      <p onClick={Filter}>Filter</p>
      <p onClick={Price}>Sort by Price</p>
      <p onClick={PriceAbove999}>Price Above 999</p>
      <p onClick={Rating}>Sort by Rating</p>
      <p onClick={Offer}>Sort by Offer</p>
    </div>
  );
}

function App() {
  const [arr, setArr] = useState(clothes);

  return (
    <>
      <Header />

      <Section arr={arr} setArr={setArr} />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
          position: "absolute",
          top: "120px",
          marginLeft: "50px",
        }}
      >
        {arr.map((value, index) => {
          return (
            <Card
              key={index}
              cloth={value.cloth}
              price={value.price}
              offer={value.offer}
            />
          );
        })}
      </div>
    </>
  );
}

parent.render(<App />);
