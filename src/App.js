import React from "react";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import "./App.css";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><AboutMe /></section>
    </div>
  );
}

export default App;
