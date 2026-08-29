import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header"
import Card from "./components/Card"
// import Section from "./components/Section"
import clothes from "../utils/dummy"
const parent = ReactDOM.createRoot(document.getElementById("root"));




function Section() {
  function Filter() {
    console.log("Filter");
  }
  function Price() {
    console.log("Sort by Price");
  }
  function Relevance() {
    console.log("Sort by Relevance");
  }
  function Rating() {
    console.log("Sort by Rating");
  }
  function Offer() {
    console.log("Sort by Offer");
  }
  return (
    <div className="section">
      <p onClick={Filter}>Filter</p>
      <p onClick={Price}>Sort by Price</p>
      <p onClick={Relevance}>Sort by Relevance</p>
      <p onClick={Rating}>Sort by Rating</p>
      <p onClick={Offer}>Sort by Offer</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Section/>
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
        {clothes.map((value, index) => {
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

parent.render(App());
