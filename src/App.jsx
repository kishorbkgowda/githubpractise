import React from "react";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './index.css'
import About from "./Components/About";
import Contact from "./Components/Contact";
import Howley from "./Components/Howley";
function App() {
  return (
    <>
    <Router>
      <div className="header">
        <div>
          <h1>React Project</h1>
        </div>
        <div>
          <Link className="lol" to="/home">Home</Link>
          <Link className="lol" to="/About">About</Link>
          <Link className="lol" to="/contact">Contact</Link>
          <Link className="lol" to='/howley'>Howley</Link>
        </div>
      </div>
      <div className="container">
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
