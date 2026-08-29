import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header"
import Card from "./components/Card"
import Section from "./components/Section"
import clothes from "../utils/dummy"
const parent = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Hello World</h1>;


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
