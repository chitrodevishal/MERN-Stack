import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Zero from "./components/Nested Routing/Zero";
import First from "./components/Nested Routing/First";
import Second from "./components/Nested Routing/Second";
import GitHub from "./components/GitHub"
const parent = ReactDOM.createRoot(document.getElementById("root"));
function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Skills" element={<Skills></Skills>}></Route>
          <Route path="/Projects" element={<Projects></Projects>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}>
            <Route index element={<Zero></Zero>}></Route>
            <Route path="First" element={<First></First>}></Route>
            <Route path="Second" element={<Second></Second>}></Route>
          </Route>
          <Route path="/GitHub/:name" element = {<GitHub></GitHub>} ></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
parent.render(<App />);
